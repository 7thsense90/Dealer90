import { and, asc, countDistinct, desc, eq, gte, lt, sql, type SQL } from 'drizzle-orm';
import { Hono } from 'hono';
import { z } from 'zod';
import { db } from '../db/client.js';
import { dealers, properties } from '../db/schema.js';

export const publicRoutes = new Hono();

/** 1-year projected gain as a percentage of price, rounded to 0.1 — the "ROI" shown on listing cards. */
export const roiExpr = sql<number>`round(((${properties.projected1y} - ${properties.price})::numeric / nullif(${properties.price}, 0)) * 100, 1)`;

const query = z.object({
  city: z.enum(['Lahore', 'Karachi', 'Islamabad']).optional(),
  roi: z.enum(['8-10', '10-15', '15+']).optional(),
  delivery: z.enum(['ready', 'under_construction']).optional(),
  sort: z.enum(['roi_desc', 'price_asc', 'price_desc', 'newest']).default('roi_desc'),
  offset: z.coerce.number().int().min(0).default(0),
  limit: z.coerce.number().int().min(1).max(60).default(6),
});

publicRoutes.get('/properties', async (c) => {
  const q = query.parse(c.req.query());
  const where: SQL[] = [
    eq(properties.status, 'published'),
    eq(properties.publicVisibility, true),
    eq(dealers.status, 'approved'),
  ];
  if (q.city) where.push(eq(properties.city, q.city));
  if (q.delivery) where.push(eq(properties.delivery, q.delivery));
  if (q.roi === '8-10') where.push(gte(roiExpr, 8), lt(roiExpr, 10));
  if (q.roi === '10-15') where.push(gte(roiExpr, 10), lt(roiExpr, 15));
  if (q.roi === '15+') where.push(gte(roiExpr, 15));
  const order = {
    roi_desc: [desc(roiExpr), desc(properties.publishedAt)],
    price_asc: [asc(properties.price)],
    price_desc: [desc(properties.price)],
    newest: [desc(properties.publishedAt)],
  }[q.sort];

  const d = db();
  const filter = and(...where);
  const [rows, [totals]] = await Promise.all([
    d.select({
      id: properties.id, title: properties.title, area: properties.area, city: properties.city,
      price: properties.price, planMonths: properties.planMonths, delivery: properties.delivery,
      roiPct: roiExpr, gradient: properties.cardGradient, type: properties.type,
      dealerName: dealers.businessName, dealerScore: dealers.credibilityScore,
    }).from(properties).innerJoin(dealers, eq(dealers.id, properties.dealerId))
      .where(filter).orderBy(...order).limit(q.limit).offset(q.offset),
    d.select({ listings: sql<number>`count(*)::int`, dealers: countDistinct(properties.dealerId) })
      .from(properties).innerJoin(dealers, eq(dealers.id, properties.dealerId)).where(filter),
  ]);
  return c.json({
    items: rows.map((r) => ({ ...r, roiPct: r.roiPct === null ? null : Number(r.roiPct), dealerScore: r.dealerScore === null ? null : Number(r.dealerScore) })),
    total: Number(totals.listings),
    dealerCount: Number(totals.dealers),
  });
});
