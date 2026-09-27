import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js';

export function databaseUrl() {
  // Vercel's Neon integration exposes DATABASE_URL (and POSTGRES_URL on older setups).
  return process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? '';
}

let pool: pg.Pool | undefined;
export function getPool() {
  if (!pool) {
    const url = databaseUrl();
    if (!url) throw new Error('DATABASE_URL is not set');
    const local = /localhost|127\.0\.0\.1/.test(url);
    pool = new pg.Pool({
      connectionString: url,
      // Serverless functions get few concurrent requests per instance; keep connections low.
      max: process.env.VERCEL ? 3 : 10,
      ssl: local ? undefined : { rejectUnauthorized: false },
    });
  }
  return pool;
}

export const db = () => drizzle(getPool(), { schema });
export type DB = ReturnType<typeof db>;
