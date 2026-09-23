# Dealer90.com platform

Production codebase for Dealer90.com. **Hard rule: the UI is the finalized Claude Design canvas, unchanged.**

## How UI fidelity is enforced
- `design/boards/*.dc.html` — snapshot of every finalized canvas board (source of truth).
- `tools/convert_boards.py` — transliterates each board 1:1 into a React screen (`apps/web/src/screens/`): same markup, classes, inline styles and CSS (scoped per screen). It adds routing only.
- `tools/gen_fonts.py` — self-hosted Fraunces / Work Sans declared exactly as each board loads them from Google Fonts.
- `apps/web/visual/compare.mjs` — screenshots every route and its board and pixel-diffs them. Phase 1 result: **41/41 screens, 0 pixels different.**
- `apps/web/visual/smoke.mjs` — every route renders with 0 console errors; key navigation paths click through.

When a board changes on the canvas: re-export it into `design/boards/`, run the converter, run the diff.

## Layout
- `apps/web` — React app (Vite). `src/screens/` are generated from the boards; `src/pages/` are the
  hand-written containers that plug live data into a screen (hook points listed in `tools/bindings.py`).
- `apps/api` — Hono API + PostgreSQL (Drizzle ORM). Runs on Vercel as the function in `api/index.ts`.
- On every deploy the build applies database migrations and, on an empty database, loads demo data.

## Run it locally
```bash
npm install                                   # from the repo root (npm workspaces)
export DATABASE_URL=postgresql://user:pass@localhost:5432/d90
npm run db:migrate -w apps/api                # create tables + demo data
npm run dev -w apps/api                       # API on http://localhost:8787/api
npm run dev -w apps/web                       # app on http://localhost:5173 (proxies /api)
npm test                                      # API tests
```

## Demo accounts (password `Dealer90!demo`)
| Role | Sign in with |
| --- | --- |
| Super admin | admin@dealer90.pk |
| Dealer (Marketing locked) | ahmed@alnoor.pk |
| Dealer (all tabs) | fatima@skyline.pk |
| Dealer awaiting approval | saima@gvr.pk |
| Customer | usman@example.pk or 0333 1234567 |
| Service provider | studio@alfateh.pk |

Before public launch set `SEED_DEMO=false` in Vercel and remove these accounts.

## Checks
Visual check: `python3 tools/build_harness.py`, serve `apps/web` on :4180 and `vite preview` on :4173, then
`node visual/compare.mjs http://localhost:4173 http://localhost:4180/visual/harness`.
End-to-end (fresh demo data): `node visual/e2e.mjs http://localhost:4173`.
Window sizes (no cut-off edges, no side gaps from 390px to 2560px): `node visual/responsive.mjs http://localhost:4173`.

Boards are drawn at 1440px (sign-in screens at 1200px). `src/lib/fit.ts` stretches them to fill wider windows and scales them down to fit narrower ones. Phones get the desktop layout scaled down until mobile layouts are designed.

## Deploy (Vercel)
`vercel.json` at the repo root builds `apps/web` and serves it as a single-page app. Import the GitHub repo in
Vercel with the default settings (no root directory or framework changes needed). Every push to `main` deploys
production; every pull request gets its own preview URL.

## Phases
1. **UI shell** (done) — all 41 screens as routes, navigation wired, pixel-parity proof.
2. **Backend foundation** (done) — Hono API + PostgreSQL/Drizzle, sign-in for all four roles, dealer approval + per-dealer tab access, live property listings (public Properties page, dealer Add Property). 15 API tests, 18 E2E checks, 41/41 screens still pixel-identical.
3. **Installments** — plan creation, schedules, payments, reminders; customer My Properties / statements; dealer Customers.
4. **Demand → offers** — Property Advisor / Invest by ROI requests, dealer Buyer Requests & offer builder, customer compare & accept, resale / transfer approvals, broadcast offers.
5. **Build services** — estimator, build requests routed to providers, quote builder, customer Build Project, credibility scoring.
6. **Marketing & admin AI** — email/SMS templates + AI editor, contact import, AI scraper onboarding, AI provider settings, credibility oversight, customer-data oversight.
7. **Production launch** — hosting, CI (visual diff gate), security hardening, monitoring, SMS/email/WhatsApp providers.
