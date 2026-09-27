import { eq, or } from 'drizzle-orm';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';
import { db } from '../db/client.js';
import { dealers, users } from '../db/schema.js';
import { checkPassword, endSession, readSession, startSession } from '../lib/auth.js';

export const auth = new Hono();

const HOME: Record<string, string> = { customer: '/customer', dealer: '/dealer', provider: '/provider', admin: '/admin' };

/** Pakistani mobile numbers are accepted as 03XXXXXXXXX, +923XXXXXXXXX or 923XXXXXXXXX. */
export function normalisePhone(v: string) {
  const d = v.replace(/[^\d+]/g, '');
  if (/^03\d{9}$/.test(d)) return '+92' + d.slice(1);
  if (/^\+?923\d{9}$/.test(d)) return '+' + d.replace(/^\+/, '');
  return null;
}

const loginBody = z.object({ identifier: z.string().trim().min(3), password: z.string().min(1) });

auth.post('/login', async (c) => {
  const parsed = loginBody.safeParse(await c.req.json().catch(() => ({})));
  if (!parsed.success) throw new HTTPException(400, { message: 'Enter your phone number or email and your password.' });
  const { identifier, password } = parsed.data;
  const phone = normalisePhone(identifier);
  const d = db();
  const [u] = await d.select().from(users)
    .where(or(eq(users.email, identifier.toLowerCase()), phone ? eq(users.phone, phone) : undefined))
    .limit(1);
  if (!u || !u.passwordHash || !(await checkPassword(password, u.passwordHash))) {
    throw new HTTPException(401, { message: "That phone number / email and password don't match. Check them and try again." });
  }
  if (u.role === 'dealer' && u.dealerId) {
    const [dl] = await d.select({ status: dealers.status }).from(dealers).where(eq(dealers.id, u.dealerId));
    if (dl?.status !== 'approved') {
      throw new HTTPException(403, { message: 'Your dealer account is still under review. You can log in as soon as Dealer90.com approves it.' });
    }
  }
  if (!u.activatedAt) throw new HTTPException(403, { message: 'Your account is not activated yet — use the code we sent you to set a password.' });
  await d.update(users).set({ lastLoginAt: new Date() }).where(eq(users.id, u.id));
  await startSession(c, { userId: u.id, role: u.role, dealerId: u.dealerId, name: u.fullName });
  return c.json({ user: { id: u.id, role: u.role, name: u.fullName, dealerId: u.dealerId }, redirectTo: HOME[u.role] });
});

auth.post('/logout', (c) => {
  endSession(c);
  return c.json({ ok: true });
});

auth.get('/me', async (c) => {
  const s = await readSession(c);
  if (!s) return c.json({ user: null });
  let dealer = null;
  if (s.role === 'dealer' && s.dealerId) {
    const [dl] = await db().select({ id: dealers.id, businessName: dealers.businessName, features: dealers.features, status: dealers.status })
      .from(dealers).where(eq(dealers.id, s.dealerId));
    dealer = dl ?? null;
  }
  return c.json({ user: { id: s.userId, role: s.role, name: s.name, dealerId: s.dealerId }, dealer, home: HOME[s.role] });
});
