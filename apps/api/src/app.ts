import { Hono } from 'hono';
import { HTTPException } from 'hono/http-exception';
import { ZodError } from 'zod';
import { admin } from './routes/admin.js';
import { auth } from './routes/auth.js';
import { dealer } from './routes/dealer.js';
import { publicRoutes } from './routes/public.js';

export const app = new Hono().basePath('/api');

app.get('/health', (c) => c.json({ ok: true }));
app.route('/auth', auth);
app.route('/public', publicRoutes);
app.route('/admin', admin);
app.route('/dealer', dealer);

app.onError((err, c) => {
  if (err instanceof HTTPException) return c.json({ error: err.message }, err.status);
  if (err instanceof ZodError) return c.json({ error: 'Some of the details are missing or invalid.', issues: err.issues }, 400);
  console.error(err);
  return c.json({ error: 'Something went wrong on our side. Please try again.' }, 500);
});
app.notFound((c) => c.json({ error: 'Not found' }, 404));
