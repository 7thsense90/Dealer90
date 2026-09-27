import { and, desc, eq, gt, inArray, or, sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';
import { db } from '../db/client.js';
import { DEALER_FEATURES, dealers, properties, users, type FeatureAccess } from '../db/schema.js';
import { requireRole, type Session } from '../lib/auth.js';
import { roiExpr } from './public.js';

export const admin = new Hono<{ Variables: { session: Session } }>();
admin.use('*', requireRole('admin'));

admin.get('/overview', async (c) => {
  const d = db();
  const [[stats], registrations, flagged] = await Promise.all([
    d.select({
      pending: sql<number>`(select count(*)::int from dealers where status in ('pending_review','documents_missing'))`,
      activeDealers: sql<number>`(select count(*)::int from dealers where status = 'approved')`,
      totalProperties: sql<number>`(select count(*)::int from properties where status <> 'archived')`,
      customers: sql<number>`(select count(*)::int from users where role = 'customer')`,
    }).from(sql`(select 1) as one`),
    // Waiting for review, plus anything approved in the last 30 days.
    d.select().from(dealers).where(or(
      inArray(dealers.status, ['pending_review', 'documents_missing']),
      and(eq(dealers.status, 'approved'), gt(dealers.approvedAt, sql`now() - interval '30 days'`)),
    )).orderBy(desc(dealers.submittedAt)).limit(50),
    d.select({
      id: properties.id, title: properties.title, price: properties.price, dealerName: dealers.businessName,
      projectionPct: roiExpr, areaPct: properties.areaComparablePct,
    }).from(properties).innerJoin(dealers, eq(dealers.id, properties.dealerId))
      .where(eq(properties.status, 'pricing_review')).orderBy(desc(properties.createdAt)),
  ]);
  return c.json({
    stats,
    registrations: registrations.map((r) => ({
      id: r.id, businessName: r.businessName, ownerName: r.ownerName, email: r.email, phone: r.phone,
      city: r.city, submittedAt: r.submittedAt, status: r.status,
    })),
    flagged: flagged.map((f) => ({ ...f, projectionPct: Number(f.projectionPct), areaPct: f.areaPct === null ? null : Number(f.areaPct) })),
  });
});

admin.get('/dealers', async (c) => {
  const rows = await db().select({ id: dealers.id, businessName: dealers.businessName, status: dealers.status, features: dealers.features })
    .from(dealers).where(inArray(dealers.status, ['approved', 'pending_review', 'documents_missing'])).orderBy(dealers.businessName);
  return c.json({ dealers: rows });
});

admin.get('/dealers/:id', async (c) => {
  const [row] = await db().select().from(dealers).where(eq(dealers.id, c.req.param('id')));
  if (!row) throw new HTTPException(404, { message: 'Dealer not found.' });
  return c.json({ dealer: row });
});

const accessBody = z.object({
  features: z.object(Object.fromEntries(DEALER_FEATURES.map((f) => [f, z.boolean()])) as Record<(typeof DEALER_FEATURES)[number], z.ZodBoolean>),
  approve: z.boolean().default(false),
});

/** Save a dealer's tab access; with approve=true this is "Save & Approve Dealer". */
admin.put('/dealers/:id/access', async (c) => {
  const body = accessBody.parse(await c.req.json());
  const s = c.get('session');
  const d = db();
  const [row] = await d.update(dealers).set({
    features: body.features as FeatureAccess,
    ...(body.approve ? { status: 'approved' as const, approvedAt: sql`coalesce(${dealers.approvedAt}, now())`, reviewedBy: s.userId } : {}),
  }).where(eq(dealers.id, c.req.param('id'))).returning();
  if (!row) throw new HTTPException(404, { message: 'Dealer not found.' });
  if (body.approve) {
    // The dealer's login becomes usable once the business is approved.
    await d.update(users).set({ activatedAt: sql`coalesce(${users.activatedAt}, now())` })
      .where(and(eq(users.dealerId, row.id), sql`${users.passwordHash} is not null`));
  }
  return c.json({ dealer: row });
});

admin.post('/dealers/:id/reject', async (c) => {
  const s = c.get('session');
  const [row] = await db().update(dealers).set({ status: 'rejected', reviewedBy: s.userId })
    .where(eq(dealers.id, c.req.param('id'))).returning();
  if (!row) throw new HTTPException(404, { message: 'Dealer not found.' });
  return c.json({ dealer: row });
});

const reviewBody = z.object({ action: z.enum(['approve', 'request_revision']) });

admin.post('/properties/:id/pricing-review', async (c) => {
  const { action } = reviewBody.parse(await c.req.json());
  const [row] = await db().update(properties).set(
    action === 'approve' ? { status: 'published', publishedAt: new Date() } : { status: 'revision_requested' },
  ).where(and(eq(properties.id, c.req.param('id')), eq(properties.status, 'pricing_review'))).returning({ id: properties.id, status: properties.status });
  if (!row) throw new HTTPException(404, { message: 'That listing is no longer waiting for pricing review.' });
  return c.json({ property: row });
});
