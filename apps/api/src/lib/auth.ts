import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import type { Context, MiddlewareHandler } from 'hono';
import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { HTTPException } from 'hono/http-exception';
import { jwtVerify, SignJWT } from 'jose';
import { randomBytes } from 'node:crypto';
import { db } from '../db/client.js';
import { settings } from '../db/schema.js';

export type Role = 'customer' | 'dealer' | 'provider' | 'admin';
export type Session = { userId: string; role: Role; dealerId: string | null; name: string };

const COOKIE = 'd90_session';
const TTL_DAYS = 7;

let secretPromise: Promise<Uint8Array> | undefined;
/** AUTH_SECRET env var if set; otherwise a random secret generated once and kept in the database. */
function secret(): Promise<Uint8Array> {
  secretPromise ??= (async () => {
    if (process.env.AUTH_SECRET) return new TextEncoder().encode(process.env.AUTH_SECRET);
    const d = db();
    const fresh = randomBytes(48).toString('base64url');
    await d.insert(settings).values({ key: 'auth_secret', value: fresh }).onConflictDoNothing();
    const [row] = await d.select().from(settings).where(eq(settings.key, 'auth_secret'));
    return new TextEncoder().encode(row.value);
  })();
  return secretPromise;
}

export const hashPassword = (pw: string) => bcrypt.hash(pw, 10);
export const checkPassword = (pw: string, hash: string) => bcrypt.compare(pw, hash);

export async function startSession(c: Context, s: Session) {
  const token = await new SignJWT({ role: s.role, dealerId: s.dealerId, name: s.name })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(s.userId)
    .setIssuedAt()
    .setExpirationTime(`${TTL_DAYS}d`)
    .sign(await secret());
  setCookie(c, COOKIE, token, {
    httpOnly: true,
    secure: new URL(c.req.url).protocol === 'https:',
    sameSite: 'Lax',
    path: '/',
    maxAge: TTL_DAYS * 86400,
  });
}

export const endSession = (c: Context) => deleteCookie(c, COOKIE, { path: '/' });

export async function readSession(c: Context): Promise<Session | null> {
  const token = getCookie(c, COOKIE);
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, await secret());
    return {
      userId: String(payload.sub),
      role: payload.role as Role,
      dealerId: (payload.dealerId as string | null) ?? null,
      name: String(payload.name ?? ''),
    };
  } catch {
    return null;
  }
}

/** Route guard: rejects unless the signed-in user has one of the given roles. */
export function requireRole(...roles: Role[]): MiddlewareHandler<{ Variables: { session: Session } }> {
  return async (c, next) => {
    const s = await readSession(c);
    if (!s) throw new HTTPException(401, { message: 'Please log in to continue.' });
    if (!roles.includes(s.role)) throw new HTTPException(403, { message: "Your account doesn't have access to this area." });
    c.set('session', s);
    await next();
  };
}
