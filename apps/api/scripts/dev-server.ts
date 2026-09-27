import { serve } from '@hono/node-server';
import { app } from '../src/app.js';

process.env.DATABASE_URL ??= 'postgresql://dealer90:dealer90@localhost:5432/d90';
const port = Number(process.env.PORT ?? 8787);
serve({ fetch: app.fetch, port }, () => console.log(`Dealer90 API on http://localhost:${port}/api`));
