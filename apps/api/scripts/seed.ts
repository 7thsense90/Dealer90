/**
 * Demo data: the same businesses, people and listings that appear in the approved designs, so the
 * live app reads like the canvas. Loaded automatically into an empty database by scripts/migrate.ts.
 */
import { fileURLToPath } from 'node:url';
import { db as makeDb, getPool, type DB } from '../src/db/client.js';
import { dealers, properties, users, type FeatureAccess } from '../src/db/schema.js';
import { hashPassword } from '../src/lib/auth.js';

export const DEMO_PASSWORD = 'Dealer90!demo';

const ALL_ON: FeatureAccess = {
  buyer_requests: true, transfer_requests: true, properties: true, customers_plans: true,
  payments_reminders: true, marketing: true, branding: true,
};
const days = (n: number) => new Date(Date.now() - n * 86400_000);
const at = (iso: string) => new Date(iso + 'T09:00:00+05:00');

export async function seedDemo(d: DB) {
  const pw = await hashPassword(DEMO_PASSWORD);
  const dl = await d.insert(dealers).values([
    { businessName: 'Al-Noor Builders', ownerName: 'Ahmed Raza', email: 'ahmed@alnoor.pk', phone: '+923214567890', city: 'Lahore', status: 'approved', features: { ...ALL_ON, marketing: false }, credibilityScore: '8.7', submittedAt: at('2026-09-18'), approvedAt: days(3) },
    { businessName: 'Skyline Properties', ownerName: 'Fatima Sheikh', email: 'fatima@skyline.pk', phone: '+923001234567', city: 'Karachi', status: 'approved', features: ALL_ON, credibilityScore: '8.4', submittedAt: at('2026-09-12'), approvedAt: days(9) },
    { businessName: 'Sadaqat Estates', ownerName: 'Kamran Sadaqat', email: 'kamran@sadaqat.pk', city: 'Karachi', status: 'approved', features: ALL_ON, credibilityScore: '9.2', submittedAt: days(120), approvedAt: days(118) },
    { businessName: 'Capital Frontier', ownerName: 'Hina Malik', email: 'hina@capitalfrontier.pk', city: 'Islamabad', status: 'approved', features: ALL_ON, credibilityScore: '8.1', submittedAt: days(200), approvedAt: days(199) },
    { businessName: 'Green Homes Co.', ownerName: 'Faisal Qureshi', email: 'faisal@greenhomes.pk', city: 'Lahore', status: 'approved', features: ALL_ON, credibilityScore: '8.9', submittedAt: days(90), approvedAt: days(88) },
    { businessName: 'Green Valley Realty', ownerName: 'Saima Iqbal', email: 'saima@gvr.pk', city: 'Faisalabad', status: 'pending_review', features: ALL_ON, submittedAt: at('2026-09-17') },
    { businessName: 'Riverside Estates', ownerName: 'Bilal Khan', email: 'bilal@riverside.pk', city: 'Multan', status: 'documents_missing', features: { ...ALL_ON, marketing: false, branding: false }, submittedAt: at('2026-09-15') },
  ]).returning();
  const byName = Object.fromEntries(dl.map((x) => [x.businessName, x.id]));

  await d.insert(users).values([
    { role: 'admin', fullName: 'Super Admin', email: 'admin@dealer90.pk', passwordHash: pw, activatedAt: days(300) },
    { role: 'dealer', fullName: 'Ahmed Raza', email: 'ahmed@alnoor.pk', phone: '+923214567890', passwordHash: pw, dealerId: byName['Al-Noor Builders'], activatedAt: days(3) },
    { role: 'dealer', fullName: 'Fatima Sheikh', email: 'fatima@skyline.pk', phone: '+923001234567', passwordHash: pw, dealerId: byName['Skyline Properties'], activatedAt: days(9) },
    { role: 'dealer', fullName: 'Saima Iqbal', email: 'saima@gvr.pk', passwordHash: pw, dealerId: byName['Green Valley Realty'] },
    { role: 'customer', fullName: 'Usman Tariq', email: 'usman@example.pk', phone: '+923331234567', passwordHash: pw, activatedAt: days(20) },
    { role: 'provider', fullName: 'Al-Fateh Architects', email: 'studio@alfateh.pk', passwordHash: pw, activatedAt: days(40) },
  ]);

  const g = ['linear-gradient(135deg,#2C4463,#10213A)', 'linear-gradient(135deg,#9C5B3C,#6B3F29)', 'linear-gradient(135deg,#3F5B47,#22331F)',
    'linear-gradient(135deg,#5B4A2C,#3A2E17)', 'linear-gradient(135deg,#2C4463,#16294A)', 'linear-gradient(135deg,#9C5B3C,#4A2C1D)'];
  const listing = (dealer: string, title: string, area: string, city: string, size: string, price: number, roi: number, months: number,
    delivery: 'ready' | 'under_construction', gradient: string, extra: Partial<typeof properties.$inferInsert> = {}) => ({
    dealerId: byName[dealer], title, area, city, sizeLabel: size, price, downPayment: Math.round(price * 0.2),
    projected1y: Math.round(price * (1 + roi / 100)), planMonths: months, delivery, cardGradient: gradient,
    status: 'published' as const, publishedAt: days(10), riskTier: 'conservative' as const, rentalYield: 'medium' as const,
    estimateBasis: 'comparable_sales' as const, estimatesConfirmed: true, ...extra,
  });
  await d.insert(properties).values([
    listing('Al-Noor Builders', '5 Marla Corner Villa', 'DHA Phase 6', 'Lahore', '5 Marla', 28_500_000, 12.4, 36, 'ready', g[0], { downPayment: 5_000_000, projected3y: 38_200_000, description: 'Corner villa with 4 bed, modern finishes, near community park. Ready for possession.' }),
    listing('Sadaqat Estates', '10 Marla Plot + Grey Structure', 'Bahria Town', 'Karachi', '10 Marla', 41_000_000, 9.1, 48, 'under_construction', g[1]),
    listing('Capital Frontier', '1 Kanal Residential Plot', 'Gulberg Greens', 'Islamabad', '1 Kanal', 64_000_000, 15.6, 24, 'ready', g[2]),
    listing('Green Homes Co.', '3 Marla Row House', 'Johar Town', 'Lahore', '3 Marla', 16_500_000, 10.8, 30, 'ready', g[3]),
    listing('Al-Noor Builders', '8 Marla Duplex', 'DHA Phase 2', 'Islamabad', '8 Marla', 33_000_000, 13.2, 42, 'under_construction', g[4]),
    listing('Sadaqat Estates', '1 Kanal Farmhouse Plot', 'Raiwind Road', 'Lahore', '1 Kanal', 52_000_000, 8.4, 36, 'ready', g[5]),
    listing('Skyline Properties', '7 Marla Family Home', 'Gulshan-e-Iqbal', 'Karachi', '7 Marla', 24_000_000, 11.5, 36, 'ready', g[0]),
    listing('Green Homes Co.', '5 Marla Plot, Block C', 'Bahria Orchard', 'Lahore', '5 Marla', 9_800_000, 16.2, 24, 'under_construction', g[2]),
    // Held for pricing review (projection far above the area average) — shown on the admin Approvals screen.
    listing('Riverside Estates', 'Shop 3, Meridian Heights', 'Cantt', 'Multan', 'Shop', 11_000_000, 38, 24, 'under_construction', g[1], { type: 'commercial', status: 'pricing_review', publishedAt: null, areaComparablePct: '14.0' }),
    listing('Green Valley Realty', '12 Marla Plot, Sector B', 'Canal Road', 'Faisalabad', '12 Marla', 22_000_000, 29, 36, 'ready', g[3], { type: 'plot', status: 'pricing_review', publishedAt: null, areaComparablePct: '15.0' }),
  ]);
}

// `npm run db:seed` runs this file directly.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await seedDemo(makeDb());
  await getPool().end();
  console.log('demo data loaded');
}
