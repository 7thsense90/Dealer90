// Visual regression: every app route must render pixel-identical to its canvas board.
// Usage: node visual/compare.mjs <appBaseUrl> <harnessBaseUrl> [screenId ...]
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'node:fs';
import path from 'node:path';

const [appBase, harnessBase, ...only] = process.argv.slice(2);
const manifest = JSON.parse(fs.readFileSync(new URL('../../../design/screen-manifest.json', import.meta.url)));
const outDir = new URL('./out/', import.meta.url).pathname;
fs.mkdirSync(path.join(outDir, 'app'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'design'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'diff'), { recursive: true });

const canvas = JSON.parse(fs.readFileSync(new URL('../../../design/boards/canvas.json', import.meta.url)));
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const contexts = {};
async function ctxFor(width) {
  contexts[width] ??= await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  return contexts[width];
}

async function shot(url, file, waitSel, width = 1440) {
  const page = await (await ctxFor(width)).newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(url, { waitUntil: 'networkidle' });
  if (waitSel) await page.waitForSelector(waitSel);
  await page.evaluate(async () => { await document.fonts.ready; });
  await page.waitForTimeout(150);
  await page.screenshot({ path: file, fullPage: true });
  await page.close();
  return errors;
}

const results = [];
for (const m of manifest) {
  if (only.length && !only.includes(m.id)) continue;
  const a = path.join(outDir, 'app', `${m.id}.png`);
  const d = path.join(outDir, 'design', `${m.id}.png`);
  // Compare at the board's own canvas width (most are 1440; login/activation boards are 1200).
  const width = canvas.boards[`${m.id}.dc.html`]?.w ?? 1440;
  const appErrors = await shot(appBase + m.route, a, `.pg-${m.id.toLowerCase()}`, width);
  await shot(`${harnessBase}/${m.id}.html`, d, undefined, width);
  const A = PNG.sync.read(fs.readFileSync(a));
  const D = PNG.sync.read(fs.readFileSync(d));
  let diff = null;
  if (A.width === D.width && A.height === D.height) {
    const out = new PNG({ width: A.width, height: A.height });
    diff = pixelmatch(A.data, D.data, out.data, A.width, A.height, { threshold: 0.1 });
    if (diff) fs.writeFileSync(path.join(outDir, 'diff', `${m.id}.png`), PNG.sync.write(out));
  }
  const r = { id: m.id, route: m.route, app: `${A.width}x${A.height}`, design: `${D.width}x${D.height}`, diffPixels: diff, appErrors };
  results.push(r);
  console.log(`${diff === 0 ? 'PASS' : 'FAIL'}  ${m.id.padEnd(34)} ${r.app.padEnd(10)} vs ${r.design.padEnd(10)} diff=${diff}${appErrors.length ? '  errors=' + appErrors.length : ''}`);
}
fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(results, null, 2));
await browser.close();
const failed = results.filter((r) => r.diffPixels !== 0);
console.log(`\n${results.length - failed.length}/${results.length} screens pixel-identical to the canvas.`);
process.exit(failed.length ? 1 : 0);
