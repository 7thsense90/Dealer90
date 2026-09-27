import { sql } from 'drizzle-orm';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { fileURLToPath } from 'node:url';
import { beforeAll, describe, expect, it } from 'vitest';

process.env.DATABASE_URL = process.env.TEST_DATABASE_URL ?? 'postgresql://dealer90:dealer90@localhost:5432/d90_test';
const { db } = await import('../src/db/client.js');
const { app } = await import('../src/app.js');
const { seedDemo, DEMO_PASSWORD } = await import('../scripts/seed.js');
const { isPricingOutlier } = await import('../src/routes/dealer.js');
const { normalisePhone } = await import('../src/routes/auth.js');

type Res = { status: number; body: any; cookie?: string };
async function call(method: string, path: string, body?: unknown, cookie?: string): Promise<Res> {
  const res = await app.request(`http://localhost/api${path}`, {
    method, headers: { 'content-type': 'application/json', ...(cookie ? { cookie } : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const set = res.headers.get('set-cookie')?.split(';')[0];
  return { status: res.status, body: await res.json(), cookie: set };
}
const login = async (identifier: string) => (await call('POST', '/auth/login', { identifier, password: DEMO_PASSWORD })).cookie!;

beforeAll(async () => {
  const d = db();
  await d.execute(sql`drop schema if exists public cascade; drop schema if exists drizzle cascade; create schema public;`);
  await migrate(d, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
  await seedDemo(d);
});

describe('auth', () => {
  it('logs in with email or a Pakistani phone number and returns the role home', async () => {
    const byEmail = await call('POST', '/auth/login', { identifier: 'admin@dealer90.pk', password: DEMO_PASSWORD });
    expect(byEmail.status).toBe(200);
    expect(byEmail.body.redirectTo).toBe('/admin');
    expect(byEmail.cookie).toMatch(/^d90_session=/);
    const byPhone = await call('POST', '/auth/login', { identifier: '0333 1234567', password: DEMO_PASSWORD });
    expect(byPhone.body.redirectTo).toBe('/customer');
  });
  it('rejects a wrong password with a clear message', async () => {
    const r = await call('POST', '/auth/login', { identifier: 'admin@dealer90.pk', password: 'nope' });
    expect(r.status).toBe(401);
    expect(r.body.error).toMatch(/don't match/);
  });
  it('blocks dealers whose business is not approved yet', async () => {
    const r = await call('POST', '/auth/login', { identifier: 'saima@gvr.pk', password: DEMO_PASSWORD });
    expect(r.status).toBe(403);
    expect(r.body.error).toMatch(/under review/);
  });
  it('me returns the dealer business and its tab access', async () => {
    const me = await call('GET', '/auth/me', undefined, await login('ahmed@alnoor.pk'));
    expect(me.body.user.role).toBe('dealer');
    expect(me.body.dealer.businessName).toBe('Al-Noor Builders');
    expect(me.body.dealer.features.marketing).toBe(false);
  });
  it('normalises phone formats', () => {
    expect(normalisePhone('0321-4567890')).toBe('+923214567890');
    expect(normalisePhone('+92 321 4567890')).toBe('+923214567890');
    expect(normalisePhone('12345')).toBeNull();
  });
});

describe('public listings', () => {
  it('lists only published listings of approved dealers, highest ROI first', async () => {
    const r = await call('GET', '/public/properties?limit=60');
    expect(r.status).toBe(200);
    expect(r.body.total).toBe(8);
    expect(r.body.dealerCount).toBe(5);
    const rois = r.body.items.map((i: any) => i.roiPct);
    expect(rois).toEqual([...rois].sort((a: number, b: number) => b - a));
    expect(r.body.items.find((i: any) => i.title === '5 Marla Corner Villa').roiPct).toBe(12.4);
    expect(r.body.items.some((i: any) => i.title.startsWith('Shop 3'))).toBe(false);
  });
  it('filters by city, ROI band and delivery status', async () => {
    const lahore = await call('GET', '/public/properties?city=Lahore&limit=60');
    expect(lahore.body.items.every((i: any) => i.city === 'Lahore')).toBe(true);
    const band = await call('GET', '/public/properties?roi=10-15&limit=60');
    expect(band.body.items.every((i: any) => i.roiPct >= 10 && i.roiPct < 15)).toBe(true);
    const uc = await call('GET', '/public/properties?delivery=under_construction&limit=60');
    expect(uc.body.items.every((i: any) => i.delivery === 'under_construction')).toBe(true);
  });
  it('pages with offset/limit', async () => {
    const p1 = await call('GET', '/public/properties?limit=6');
    const p2 = await call('GET', '/public/properties?limit=6&offset=6');
    expect(p1.body.items).toHaveLength(6);
    expect(p2.body.items).toHaveLength(2);
  });
});

describe('admin: approvals and feature access', () => {
  it('requires an admin session', async () => {
    expect((await call('GET', '/admin/overview')).status).toBe(401);
    expect((await call('GET', '/admin/overview', undefined, await login('usman@example.pk'))).status).toBe(403);
  });
  it('overview has live counts, registrations and flagged pricing', async () => {
    const r = await call('GET', '/admin/overview', undefined, await login('admin@dealer90.pk'));
    expect(r.body.stats).toMatchObject({ pending: 2, activeDealers: 5, customers: 1 });
    expect(r.body.registrations.map((x: any) => x.businessName)).toContain('Green Valley Realty');
    expect(r.body.flagged.map((x: any) => x.title)).toEqual(expect.arrayContaining(['Shop 3, Meridian Heights', '12 Marla Plot, Sector B']));
  });
  it('Save & Approve activates the dealer with exactly the chosen tabs', async () => {
    const admin = await login('admin@dealer90.pk');
    const { body } = await call('GET', '/admin/overview', undefined, admin);
    const gv = body.registrations.find((x: any) => x.businessName === 'Green Valley Realty');
    const features = { buyer_requests: true, transfer_requests: false, properties: true, customers_plans: true, payments_reminders: true, marketing: false, branding: false };
    const saved = await call('PUT', `/admin/dealers/${gv.id}/access`, { features, approve: true }, admin);
    expect(saved.body.dealer.status).toBe('approved');
    const me = await call('GET', '/auth/me', undefined, await login('saima@gvr.pk'));
    expect(me.body.dealer.features).toEqual(features);
  });
  it('approving a flagged price publishes it', async () => {
    const admin = await login('admin@dealer90.pk');
    const { body } = await call('GET', '/admin/overview', undefined, admin);
    const f = body.flagged[0];
    const r = await call('POST', `/admin/properties/${f.id}/pricing-review`, { action: 'approve' }, admin);
    expect(r.body.property.status).toBe('published');
    expect((await call('POST', `/admin/properties/${f.id}/pricing-review`, { action: 'approve' }, admin)).status).toBe(404);
  });
});

describe('dealer: add property', () => {
  const base = {
    title: '5 Marla Corner Villa — DHA Phase 9', type: 'residential', publicVisibility: true, showNocPublicly: true,
    location: 'DHA Phase 9, Lahore', sizeLabel: '5 Marla', description: 'Test', corridor: 'DHA Phase 9–10 Expansion (Lahore)',
    riskTier: 'conservative', rentalYield: 'medium', price: 28_500_000, downPayment: 5_000_000, projected1y: 31_500_000,
    projected3y: 38_200_000, estimateBasis: 'comparable_sales', estimatesConfirmed: true, planMonths: 12, planFrequency: 'monthly', publish: true,
  };
  it('publishes a listing that then appears on the public portal', async () => {
    const r = await call('POST', '/dealer/properties', base, await login('ahmed@alnoor.pk'));
    expect(r.status).toBe(201);
    expect(r.body.property).toMatchObject({ status: 'published', city: 'Lahore', area: 'DHA Phase 9' });
    const pub = await call('GET', '/public/properties?city=Lahore&limit=60');
    expect(pub.body.items.some((i: any) => i.id === r.body.property.id)).toBe(true);
  });
  it('holds outlier projections for admin pricing review', async () => {
    const r = await call('POST', '/dealer/properties', { ...base, title: 'Too good to be true', projected1y: 45_000_000 }, await login('ahmed@alnoor.pk'));
    expect(r.body.property.status).toBe('pricing_review');
    expect(isPricingOutlier(38, 14)).toBe(true);
    expect(isPricingOutlier(16, 14)).toBe(false);
  });
  it('saves drafts, validates input, and enforces the Properties tab access', async () => {
    const draft = await call('POST', '/dealer/properties', { ...base, publish: false }, await login('ahmed@alnoor.pk'));
    expect(draft.body.property.status).toBe('draft');
    const bad = await call('POST', '/dealer/properties', { ...base, downPayment: 30_000_000 }, await login('ahmed@alnoor.pk'));
    expect(bad.status).toBe(400);
    expect(bad.body.error).toMatch(/Down payment/);
    const d = db();
    await d.execute(sql`update dealers set features = jsonb_set(features, '{properties}', 'false') where business_name = 'Skyline Properties'`);
    const locked = await call('POST', '/dealer/properties', base, await login('fatima@skyline.pk'));
    expect(locked.status).toBe(403);
    expect(locked.body.error).toMatch(/contact Admin/);
  });
});
