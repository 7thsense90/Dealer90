import { and, avg, desc, eq, ne } from 'drizzle-orm';
import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { z } from 'zod';
import { db } from '../db/client.js';
import { dealers, properties, type DealerFeature } from '../db/schema.js';
import { requireRole, type Session } from '../lib/auth.js';
import { roiExpr } from './public.js';

export const dealer = new Hono<{ Variables: { session: Session } }>();
dealer.use('*', requireRole('dealer'));

async function requireFeature(dealerId: string | null, feature: DealerFeature) {
  if (!dealerId) throw new HTTPException(403, { message: 'No dealer business is linked to this account.' });
  const [d] = await db().select({ features: dealers.features, status: dealers.status }).from(dealers).where(eq(dealers.id, dealerId));
  if (!d || d.status !== 'approved') throw new HTTPException(403, { message: 'Your dealer account is not approved.' });
  if (!d.features[feature]) throw new HTTPException(403, { message: "This feature isn't enabled for your account. Please contact Admin to enable this feature." });
}

const GRADIENTS = [
  'linear-gradient(135deg,#2C4463,#10213A)', 'linear-gradient(135deg,#9C5B3C,#6B3F29)',
  'linear-gradient(135deg,#3F5B47,#22331F)', 'linear-gradient(135deg,#5B4A2C,#3A2E17)',
];

const money = z.coerce.number().int().positive();
export const propertyBody = z.object({
  title: z.string().trim().min(3, 'Give the property a title.'),
  type: z.enum(['residential', 'commercial', 'plot', 'rental']),
  publicVisibility: z.boolean(),
  showNocPublicly: z.boolean(),
  location: z.string().trim().min(3, 'Enter the area and city, e.g. "DHA Phase 6, Lahore".'),
  sizeLabel: z.string().trim().min(1, 'Enter the size, e.g. "5 Marla".'),
  description: z.string().trim().optional(),
  corridor: z.string().optional(),
  riskTier: z.enum(['conservative', 'balanced', 'aggressive']),
  rentalYield: z.enum(['low', 'medium', 'high']),
  price: money,
  downPayment: z.coerce.number().int().min(0),
  projected1y: money.optional(),
  projected3y: money.optional(),
  estimateBasis: z.enum(['comparable_sales', 'area_market_trend', 'personal_estimate']),
  estimatesConfirmed: z.boolean(),
  planMonths: z.coerce.number().int().min(1).max(120),
  planFrequency: z.enum(['monthly', 'quarterly']),
  publish: z.boolean(),
}).refine((b) => b.downPayment < b.price, { message: 'Down payment must be less than the total price.', path: ['downPayment'] })
  .refine((b) => !b.publish || !b.projected1y || b.estimatesConfirmed, { message: 'Confirm the estimates are good-faith before publishing.', path: ['estimatesConfirmed'] });

/** A projection is held for admin review when it is at least double the area's average and 10+ points above it. */
export function isPricingOutlier(projectionPct: number, areaPct: number | null) {
  return areaPct !== null && projectionPct >= areaPct * 2 && projectionPct - areaPct >= 10;
}

dealer.get('/properties', async (c) => {
  const s = c.get('session');
  await requireFeature(s.dealerId, 'properties');
  const rows = await db().select().from(properties).where(eq(properties.dealerId, s.dealerId!)).orderBy(desc(properties.createdAt));
  return c.json({ properties: rows });
});

dealer.post('/properties', async (c) => {
  const s = c.get('session');
  await requireFeature(s.dealerId, 'properties');
  const parsed = propertyBody.safeParse(await c.req.json().catch(() => ({})));
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    throw new HTTPException(400, { message: issue.message.startsWith('Invalid') || issue.message.startsWith('Expected') ? `Check the "${issue.path.join('.')}" field.` : issue.message });
  }
  const b = parsed.data;
  const [areaPart, ...rest] = b.location.split(',');
  const city = rest.join(',').trim() || areaPart.trim();
  const d = db();

  let status: 'draft' | 'published' | 'pricing_review' = 'draft';
  let areaPct: number | null = null;
  if (b.publish) {
    const [cmp] = await d.select({ v: avg(roiExpr) }).from(properties)
      .where(and(eq(properties.city, city), eq(properties.status, 'published'), ne(properties.dealerId, s.dealerId!)));
    areaPct = cmp?.v == null ? null : Math.round(Number(cmp.v) * 10) / 10;
    const projectionPct = b.projected1y ? ((b.projected1y - b.price) / b.price) * 100 : 0;
    status = b.publicVisibility && isPricingOutlier(projectionPct, areaPct) ? 'pricing_review' : 'published';
  }
  const [row] = await d.insert(properties).values({
    dealerId: s.dealerId!, title: b.title, type: b.type, status,
    publicVisibility: b.publicVisibility, showNocPublicly: b.showNocPublicly,
    area: areaPart.trim(), city, sizeLabel: b.sizeLabel, description: b.description, corridor: b.corridor,
    riskTier: b.riskTier, rentalYield: b.rentalYield, price: b.price, downPayment: b.downPayment,
    projected1y: b.projected1y, projected3y: b.projected3y, estimateBasis: b.estimateBasis,
    estimatesConfirmed: b.estimatesConfirmed, planMonths: b.planMonths, planFrequency: b.planFrequency,
    areaComparablePct: areaPct === null ? null : String(areaPct),
    cardGradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
    publishedAt: status === 'published' ? new Date() : null,
  }).returning();
  return c.json({ property: row }, 201);
});
