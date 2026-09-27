CREATE TYPE "public"."dealer_status" AS ENUM('pending_review', 'documents_missing', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."delivery_status" AS ENUM('ready', 'under_construction');--> statement-breakpoint
CREATE TYPE "public"."estimate_basis" AS ENUM('comparable_sales', 'area_market_trend', 'personal_estimate');--> statement-breakpoint
CREATE TYPE "public"."installment_frequency" AS ENUM('monthly', 'quarterly');--> statement-breakpoint
CREATE TYPE "public"."level" AS ENUM('low', 'medium', 'high');--> statement-breakpoint
CREATE TYPE "public"."property_status" AS ENUM('draft', 'pricing_review', 'published', 'revision_requested', 'archived');--> statement-breakpoint
CREATE TYPE "public"."property_type" AS ENUM('residential', 'commercial', 'plot', 'rental');--> statement-breakpoint
CREATE TYPE "public"."risk_tier" AS ENUM('conservative', 'balanced', 'aggressive');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('customer', 'dealer', 'provider', 'admin');--> statement-breakpoint
CREATE TABLE "dealers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"business_name" text NOT NULL,
	"owner_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"city" text NOT NULL,
	"status" "dealer_status" DEFAULT 'pending_review' NOT NULL,
	"features" jsonb NOT NULL,
	"credibility_score" numeric(3, 1),
	"submitted_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_at" timestamp with time zone,
	"reviewed_by" uuid
);
--> statement-breakpoint
CREATE TABLE "properties" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"dealer_id" uuid NOT NULL,
	"title" text NOT NULL,
	"type" "property_type" DEFAULT 'residential' NOT NULL,
	"status" "property_status" DEFAULT 'draft' NOT NULL,
	"public_visibility" boolean DEFAULT true NOT NULL,
	"show_noc_publicly" boolean DEFAULT true NOT NULL,
	"area" text NOT NULL,
	"city" text NOT NULL,
	"size_label" text NOT NULL,
	"description" text,
	"corridor" text,
	"risk_tier" "risk_tier",
	"rental_yield" "level",
	"delivery" "delivery_status" DEFAULT 'ready' NOT NULL,
	"price" bigint NOT NULL,
	"down_payment" bigint DEFAULT 0 NOT NULL,
	"projected_1y" bigint,
	"projected_3y" bigint,
	"estimate_basis" "estimate_basis",
	"estimates_confirmed" boolean DEFAULT false NOT NULL,
	"plan_months" integer DEFAULT 12 NOT NULL,
	"plan_frequency" "installment_frequency" DEFAULT 'monthly' NOT NULL,
	"area_comparable_pct" numeric(5, 1),
	"card_gradient" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"published_at" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"key" text PRIMARY KEY NOT NULL,
	"value" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"role" "role" NOT NULL,
	"full_name" text NOT NULL,
	"email" text,
	"phone" text,
	"password_hash" text,
	"dealer_id" uuid,
	"activated_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_login_at" timestamp with time zone,
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_phone_unique" UNIQUE("phone"),
	CONSTRAINT "users_contact_chk" CHECK ("users"."email" is not null or "users"."phone" is not null)
);
--> statement-breakpoint
ALTER TABLE "properties" ADD CONSTRAINT "properties_dealer_id_dealers_id_fk" FOREIGN KEY ("dealer_id") REFERENCES "public"."dealers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_dealer_id_dealers_id_fk" FOREIGN KEY ("dealer_id") REFERENCES "public"."dealers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "dealers_status_idx" ON "dealers" USING btree ("status");--> statement-breakpoint
CREATE INDEX "properties_public_idx" ON "properties" USING btree ("status","public_visibility","city");--> statement-breakpoint
CREATE INDEX "properties_dealer_idx" ON "properties" USING btree ("dealer_id");