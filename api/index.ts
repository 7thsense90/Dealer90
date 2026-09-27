// Vercel serverless entry (Node.js runtime). vercel.json rewrites every /api/* request here and the
// original URL is preserved, so the Hono app in apps/api routes it as usual.
import { getRequestListener } from '@hono/node-server';
import { app } from '../apps/api/src/app.js';

export default getRequestListener(app.fetch);
