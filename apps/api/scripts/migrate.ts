/**
 * Runs on every deploy (see root "build" script): applies pending SQL migrations, then loads the
 * demo data set into an empty database (set SEED_DEMO=false to skip it, e.g. at public launch).
 */
import { sql } from 'drizzle-orm';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { fileURLToPath } from 'node:url';
// Migrations use a direct (unpooled) connection when the platform provides one (Neon on Vercel does).
if (process.env.DATABASE_URL_UNPOOLED) process.env.DATABASE_URL = process.env.DATABASE_URL_UNPOOLED;
const { databaseUrl, db, getPool } = await import('../src/db/client.js');
const { seedDemo } = await import('./seed.js');

if (!databaseUrl()) {
  console.warn('[migrate] DATABASE_URL is not set - skipping migrations (connect a database in Vercel → Storage).');
  process.exit(0);
}

const d = db();
await migrate(d, { migrationsFolder: fileURLToPath(new URL('../drizzle', import.meta.url)) });
console.log('[migrate] schema up to date');

const [{ n }] = (await d.execute(sql`select count(*)::int as n from users`)).rows as { n: number }[];
if (n === 0 && process.env.SEED_DEMO !== 'false') {
  await seedDemo(d);
  console.log('[migrate] demo data loaded');
}
await getPool().end();
