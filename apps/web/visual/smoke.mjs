// Smoke test: every route renders without React/console errors, and key navigation works.
import { chromium } from 'playwright';
import fs from 'node:fs';
const base = process.argv[2];
const manifest = JSON.parse(fs.readFileSync(new URL('../../../design/screen-manifest.json', import.meta.url)));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${page.url()}] ${m.text().slice(0, 200)}`); });
page.on('pageerror', (e) => errors.push(`[${page.url()}] ${e}`));
for (const m of manifest) {
  await page.goto(base + m.route);
  await page.waitForSelector(`.pg-${m.id.toLowerCase()}`);
}
const flows = [
  ['/', 'a:text-is("For Dealers")', '/for-dealers'],
  ['/for-dealers', 'a:text-is("For Builders")', '/for-builders'],
  ['/properties', 'text=See Offer →', '/customer/offers'],
  ['/advisor', 'text=Submit My Request to Dealers →', '/advisor/send-offers'],
  ['/advisor/send-offers', 'text=Send My Request →', '/advisor/submitted'],
  ['/estimator', 'text=Continue →', '/estimator/services'],
  ['/estimator/services', 'text=See My Estimate →', '/estimator/signup'],
  ['/estimator/signup', 'text=Show My Estimate →', '/estimator/results'],
  ['/estimator/results', 'text=Request Actual Quotes →', '/build-advisor/services'],
  ['/login', 'button:text-is("Log In")', '/customer'],
  ['/customer', '.navitem:has-text("My Offers")', '/customer/offers'],
  ['/dealer', '.navitem:has-text("Customers")', '/dealer/customers'],
  ['/dealer/marketing/email', '.mtab:has-text("SMS Marketing")', '/dealer/marketing/sms'],
  ['/admin', '.navitem:has-text("Dealer Approvals")', '/admin/approvals'],
  ['/dealer', '.navitem.locked', '/dealer'],
];
let ok = 0;
for (const [from, sel, to] of flows) {
  await page.goto(base + from);
  await page.locator(sel).first().click();
  await page.waitForTimeout(250);
  const path = new URL(page.url()).pathname;
  const pass = path === to;
  ok += pass;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${from}  click ${sel}  -> ${path}${pass ? '' : ' (expected ' + to + ')'}`);
}
console.log(`\nnavigation ${ok}/${flows.length}; console errors/warnings: ${errors.length}`);
errors.slice(0, 20).forEach((e) => console.log('  ', e));
await browser.close();
