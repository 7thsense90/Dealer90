import { sql } from 'drizzle-orm';
import {
  bigint, boolean, check, index, integer, jsonb, numeric, pgEnum, pgTable, text, timestamp, uuid,
} from 'drizzle-orm/pg-core';

export const role = pgEnum('role', ['customer', 'dealer', 'provider', 'admin']);
export const dealerStatus = pgEnum('dealer_status', ['pending_review', 'documents_missing', 'approved', 'rejected']);
export const propertyType = pgEnum('property_type', ['residential', 'commercial', 'plot', 'rental']);
export const propertyStatus = pgEnum('property_status', ['draft', 'pricing_review', 'published', 'revision_requested', 'archived']);
export const deliveryStatus = pgEnum('delivery_status', ['ready', 'under_construction']);
export const riskTier = pgEnum('risk_tier', ['conservative', 'balanced', 'aggressive']);
export const level = pgEnum('level', ['low', 'medium', 'high']);
export const estimateBasis = pgEnum('estimate_basis', ['comparable_sales', 'area_market_trend', 'personal_estimate']);
export const frequency = pgEnum('installment_frequency', ['monthly', 'quarterly']);

/** Dealer tabs an admin can switch on/off per dealer (Dashboard is always on). */
export const DEALER_FEATURES = [
  'buyer_requests', 'transfer_requests', 'properties', 'customers_plans',
  'payments_reminders', 'marketing', 'branding',
] as const;
export type DealerFeature = (typeof DEALER_FEATURES)[number];
export type FeatureAccess = Record<DealerFeature, boolean>;

export const dealers = pgTable('dealers', {
  id: uuid('id').primaryKey().defaultRandom(),
  businessName: text('business_name').notNull(),
  ownerName: text('owner_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'),
  city: text('city').notNull(),
  status: dealerStatus('status').notNull().default('pending_review'),
  features: jsonb('features').$type<FeatureAccess>().notNull(),
  credibilityScore: numeric('credibility_score', { precision: 3, scale: 1 }),
  submittedAt: timestamp('submitted_at', { withTimezone: true }).notNull().defaultNow(),
  approvedAt: timestamp('approved_at', { withTimezone: true }),
  reviewedBy: uuid('reviewed_by'),
}, (t) => [index('dealers_status_idx').on(t.status)]);

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  role: role('role').notNull(),
  fullName: text('full_name').notNull(),
  email: text('email').unique(),
  phone: text('phone').unique(),
  passwordHash: text('password_hash'),
  dealerId: uuid('dealer_id').references(() => dealers.id),
  activatedAt: timestamp('activated_at', { withTimezone: true }),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  lastLoginAt: timestamp('last_login_at', { withTimezone: true }),
}, (t) => [check('users_contact_chk', sql`${t.email} is not null or ${t.phone} is not null`)]);

export const properties = pgTable('properties', {
  id: uuid('id').primaryKey().defaultRandom(),
  dealerId: uuid('dealer_id').notNull().references(() => dealers.id),
  title: text('title').notNull(),
  type: propertyType('type').notNull().default('residential'),
  status: propertyStatus('status').notNull().default('draft'),
  publicVisibility: boolean('public_visibility').notNull().default(true),
  showNocPublicly: boolean('show_noc_publicly').notNull().default(true),
  area: text('area').notNull(),          // e.g. "DHA Phase 6"
  city: text('city').notNull(),          // e.g. "Lahore"
  sizeLabel: text('size_label').notNull(), // e.g. "5 Marla", "1 Kanal"
  description: text('description'),
  corridor: text('corridor'),
  riskTier: riskTier('risk_tier'),
  rentalYield: level('rental_yield'),
  delivery: deliveryStatus('delivery').notNull().default('ready'),
  // Money is stored in whole PKR.
  price: bigint('price', { mode: 'number' }).notNull(),
  downPayment: bigint('down_payment', { mode: 'number' }).notNull().default(0),
  projected1y: bigint('projected_1y', { mode: 'number' }),
  projected3y: bigint('projected_3y', { mode: 'number' }),
  estimateBasis: estimateBasis('estimate_basis'),
  estimatesConfirmed: boolean('estimates_confirmed').notNull().default(false),
  planMonths: integer('plan_months').notNull().default(12),
  planFrequency: frequency('plan_frequency').notNull().default('monthly'),
  /** Average 1-year projection (%) of comparable listings in the area when this was submitted. */
  areaComparablePct: numeric('area_comparable_pct', { precision: 5, scale: 1 }),
  cardGradient: text('card_gradient'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  publishedAt: timestamp('published_at', { withTimezone: true }),
}, (t) => [
  index('properties_public_idx').on(t.status, t.publicVisibility, t.city),
  index('properties_dealer_idx').on(t.dealerId),
]);

export const settings = pgTable('settings', {
  key: text('key').primaryKey(),
  value: text('value').notNull(),
});
