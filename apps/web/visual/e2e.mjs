// End-to-end: real API + real database (freshly seeded demo data), real clicks. Saves screenshots.
// Usage: node visual/e2e.mjs http://localhost:4173
import { chromium } from 'playwright';
import fs from 'node:fs';

const base = process.argv[2];
const out = new URL('./out/e2e/', import.meta.url).pathname;
fs.mkdirSync(out, { recursive: true });
const PW = 'Dealer90!demo';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
let pass = 0, fail = 0;
const errors = [];
function check(name, ok, detail = '') {
  ok ? pass++ : fail++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : '  ' + detail}`);
}
async function newPage() {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(String(e)));
  // Expected 4xx responses (wrong password, validation) are logged by Chrome as resource errors - ignore those.
  page.on('console', (m) => { if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errors.push(m.text()); });
  return page;
}
const shot = (page, name, full = false) => page.screenshot({ path: `${out}${name}.png`, fullPage: full });
const path = (page) => new URL(page.url()).pathname;
async function login(page, email, password = PW) {
  await page.goto(base + '/login');
  await page.fill('#login-identifier', email);
  await page.fill('#login-password', password);
  await page.click('button:has-text("Log In")');
}

// 1. Public listings from the database
{
  const page = await newPage();
  await page.goto(base + '/properties');
  await page.waitForSelector('text=See Offer →');
  const count = await page.locator('.pg-properties .card:has-text("See Offer")').count();
  check('Properties shows the first 6 live listings', count === 6, `got ${count}`);
  check('Result count reflects the database', await page.locator('text=Showing 8 listings from 5 verified dealers').count() === 1);
  await shot(page, '01-properties-live', true);
  await page.click('text=Load More Listings');
  await page.waitForFunction(() => document.querySelectorAll('.pg-properties .card').length >= 8 + 3);
  check('Load More appends the rest', await page.locator('.pg-properties .card:has-text("See Offer")').count() === 8);
  await page.click('.pg-properties .chip:has-text("Karachi")');
  await page.waitForTimeout(400);
  const cities = await page.locator('.pg-properties .card:has-text("See Offer") >> text=/, (Lahore|Karachi|Islamabad)$/').allTextContents();
  check('City filter keeps only Karachi listings', cities.length > 0 && cities.every((c) => c.endsWith('Karachi')), cities.join(' | '));
  await shot(page, '02-properties-karachi');
  await page.context().close();
}

// 2. Sign-in errors and role redirects
{
  const page = await newPage();
  await page.goto(base + '/dealer');
  await page.waitForURL(/\/login/);
  check('Portal pages require sign-in', path(page) === '/login');
  await login(page, 'admin@dealer90.pk', 'wrong-password');
  await page.waitForSelector('[role=alert]');
  check('Wrong password shows a clear message', (await page.textContent('[role=alert]')).includes("don't match"));
  await shot(page, '03-login-error');
  await login(page, 'saima@gvr.pk');
  await page.waitForSelector('[role=alert]');
  check('Unapproved dealer is told the account is under review', (await page.textContent('[role=alert]')).includes('under review'));
  await page.context().close();
}

// 3. Admin approves Green Valley Realty with Marketing locked
{
  const page = await newPage();
  await login(page, 'admin@dealer90.pk');
  await page.waitForURL(/\/admin$/);
  check('Admin lands on the admin portal', path(page) === '/admin');
  await page.click('.navitem:has-text("Dealer Approvals")');
  await page.waitForSelector('text=Green Valley Realty');
  await shot(page, '04-admin-approvals', true);
  await page.click('tr:has-text("Green Valley Realty") >> text=Approve & Set Access');
  await page.waitForURL(/feature-access\?dealer=/);
  await page.waitForSelector('text=Dealer Approvals / Green Valley Realty');
  await page.click('[role=switch][aria-label="Marketing (Email & SMS)"]');
  check('Switching Marketing off updates the live sidebar preview', await page.locator('.navitem.locked:has-text("Marketing")').count() === 1);
  await shot(page, '05-admin-feature-access', true);
  await page.click('button:has-text("Save & Approve Dealer")');
  await page.waitForURL(/\/admin\/approvals$/);
  await page.waitForSelector('tr:has-text("Green Valley Realty")');
  check('Green Valley Realty now shows as Approved', await page.locator('tr:has-text("Green Valley Realty") >> text=Approved').count() === 1);
  await page.context().close();
}

// 4. The newly approved dealer: locked tab + Add Property -> live on the portal
{
  const page = await newPage();
  await login(page, 'saima@gvr.pk');
  await page.waitForURL(/\/dealer$/);
  check('Approved dealer can sign in', path(page) === '/dealer');
  const locked = page.locator('.navitem.locked:has-text("Marketing")');
  await locked.waitFor({ timeout: 5000 }).catch(() => {});
  check('Marketing tab is locked for this dealer', await locked.count() === 1);
  await locked.hover();
  await page.waitForTimeout(250);
  await shot(page, '06-dealer-locked-marketing');
  await page.goto(base + '/dealer/marketing/email');
  await page.waitForURL(/\/dealer$/);
  check('Typing a locked URL sends the dealer back to the dashboard', path(page) === '/dealer');

  await page.click('.navitem:has-text("Properties")');
  await page.waitForURL(/\/dealer\/properties\/new$/);
  await page.fill('#property-title', '10 Marla House — Canal Road');
  await page.click('.pg-dealer-addproperty .chip:has-text("Residential")');
  await page.fill('#property-location', 'Canal Road, Faisalabad');
  await page.fill('#property-size', '10 Marla');
  await page.fill('#property-description', 'Double-storey house, 5 bed, near Canal Road.');
  await page.fill('#property-price', '21000000');
  await page.fill('#property-downPayment', '4200000');
  await page.fill('#property-projected1y', '23100000');
  await page.fill('#property-months', '24');
  check('Money inputs are grouped as typed', (await page.inputValue('#property-price')) === '21,000,000');
  const inst = await page.inputValue('.pg-dealer-addproperty input[disabled]');
  check('Installment is calculated (16.8M / 24 = 700,000)', inst === '700,000', inst);
  await page.click('button:has-text("Publish Property")');
  await page.waitForSelector('[role=status]');
  check('Publishing without confirming estimates is refused', (await page.textContent('[role=status]')).includes('Confirm the estimates'));
  await page.click('.pg-dealer-addproperty [role=checkbox]');
  await shot(page, '07-dealer-add-property', true);
  await page.click('button:has-text("Publish Property")');
  await page.waitForSelector('[role=status]:has-text("Published")');
  check('Listing is published', true);
  await page.context().close();

  const pub = await newPage();
  await pub.goto(base + '/properties');
  await pub.waitForSelector('text=See Offer →');
  await pub.click('text=Load More Listings');
  await pub.waitForSelector('text=10 Marla House');
  check('New listing appears on the public Properties page', await pub.locator('text=Green Valley Realty').count() >= 1);
  await pub.locator('text=10 Marla House').scrollIntoViewIfNeeded();
  await shot(pub, '08-properties-new-listing');
  await pub.context().close();
}

// 5. Roles never mix; every portal can sign out
{
  const page = await newPage();
  await page.goto(base + '/');
  await page.click('text=Dealer Login');
  await page.waitForURL(/\/login$/);
  check('"Dealer Login" opens the sign-in screen', path(page) === '/login');
  await login(page, 'usman@example.pk');
  await page.waitForURL(/\/customer$/);
  check('Customer lands on the customer portal', path(page) === '/customer');
  await page.waitForSelector('.pg-customer-portal');
  check('Sidebar shows the signed-in customer', await page.locator('text=Usman Tariq').count() >= 1);
  for (const url of ['/dealer', '/admin', '/provider', '/dealer/properties/new']) {
    await page.goto(base + url);
    await page.waitForURL(/\/customer$/);
    check(`Customer is kept out of ${url}`, path(page) === '/customer');
  }
  await page.goto(base + '/login');
  await page.waitForURL(/\/customer$/);
  check('Signed-in user opening /login goes to their own portal', path(page) === '/customer');
  await page.click('text=Log out');
  await page.waitForURL(/\/login/);
  await page.goto(base + '/customer');
  await page.waitForURL(/\/login/);
  check('Customer can log out (portal locked again)', path(page) === '/login');
  await page.context().close();
}
{
  const page = await newPage();
  await login(page, 'fatima@skyline.pk');
  await page.waitForURL(/\/dealer$/);
  await page.waitForSelector('.pg-dealer-dashboard');
  check('Dealer dashboard greets the signed-in dealer', await page.locator('text=Welcome back, Skyline Properties').count() === 1);
  check('No "Marketing restricted" pill for a dealer with Marketing on', await page.locator('text=Marketing restricted by Admin').count() === 0);
  check('Dealer sidebar shows the signed-in person', await page.locator('text=Fatima Sheikh').count() === 1);
  for (const url of ['/admin', '/customer', '/provider']) {
    await page.goto(base + url);
    await page.waitForURL(/\/dealer$/);
    check(`Dealer is kept out of ${url}`, path(page) === '/dealer');
  }
  await page.goto(base + '/dealer/properties/new');
  await page.click('text=Properties / Add New');
  await page.waitForURL(/\/dealer$/);
  check('Add Property (no sidebar on the board) links back to the dashboard', path(page) === '/dealer');
  await shot(page, '09-dealer-logout-visible');
  await page.click('text=Log out');
  await page.waitForURL(/\/login/);
  check('Dealer can log out', path(page) === '/login');
  await page.context().close();
}
{
  const page = await newPage();
  await login(page, 'admin@dealer90.pk');
  await page.waitForURL(/\/admin$/);
  await page.goto(base + '/dealer');
  await page.waitForURL(/\/admin$/);
  check('Admin is kept out of the dealer portal', path(page) === '/admin');
  await page.click('text=Log out');
  await page.waitForURL(/\/login/);
  check('Admin can log out', path(page) === '/login');
  await page.context().close();
}

await browser.close();
console.log(`\n${pass}/${pass + fail} checks passed; browser errors: ${errors.length}`);
errors.slice(0, 10).forEach((e) => console.log('  ', e));
process.exit(fail || errors.length ? 1 : 0);
