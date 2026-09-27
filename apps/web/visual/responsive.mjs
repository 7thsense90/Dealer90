// Renders key screens at common window widths to check nothing is cut off and there are no side gaps.
import { chromium } from 'playwright';
import fs from 'node:fs';
const base = process.argv[2];
const out = new URL('./out/responsive/', import.meta.url).pathname;
fs.mkdirSync(out, { recursive: true });
const WIDTHS = [2560, 1920, 1440, 1280, 1024, 768, 390];
const SCREENS = [['/', null], ['/properties', null], ['/login', null], ['/advisor', null],
  ['/customer', 'usman@example.pk'], ['/dealer', 'ahmed@alnoor.pk'], ['/dealer/properties/new', 'ahmed@alnoor.pk'], ['/admin/approvals', 'admin@dealer90.pk']];
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const problems = [];
for (const w of WIDTHS) {
  const ctxs = {};
  for (const [route, acct] of SCREENS) {
    const key = acct ?? 'anon';
    if (!ctxs[key]) {
      ctxs[key] = await browser.newContext({ viewport: { width: w, height: 900 } });
      if (acct) await ctxs[key].request.post(`${base}/api/auth/login`, { data: { identifier: acct, password: 'Dealer90!demo' } });
    }
    const page = await ctxs[key].newPage();
    await page.goto(base + route, { waitUntil: 'networkidle' });
    await page.waitForSelector('.d90-screen');
    await page.waitForTimeout(200);
    const m = await page.evaluate(() => {
      const s = document.querySelector('.d90-screen');
      const r = s.getBoundingClientRect();
      return { vw: document.documentElement.clientWidth, sw: document.documentElement.scrollWidth, left: Math.round(r.left), right: Math.round(r.right) };
    });
    if (m.sw > m.vw + 1 || Math.abs(m.left) > 1 || Math.abs(m.right - m.vw) > 1) problems.push({ w, route, ...m });
    await page.screenshot({ path: `${out}${w}-${route.replace(/\//g, '_') || 'home'}.png` });
    await page.close();
  }
  for (const c of Object.values(ctxs)) await c.close();
}
await browser.close();
console.log(problems.length ? problems : `No horizontal overflow or side gaps at ${WIDTHS.join(', ')}px across ${SCREENS.length} screens.`);
