# Dealer90.com platform

Production codebase for Dealer90.com. **Hard rule: the UI is the finalized Claude Design canvas, unchanged.**

## How UI fidelity is enforced
- `design/boards/*.dc.html` — snapshot of every finalized canvas board (source of truth).
- `tools/convert_boards.py` — transliterates each board 1:1 into a React screen (`apps/web/src/screens/`): same markup, classes, inline styles and CSS (scoped per screen). It adds routing only.
- `tools/gen_fonts.py` — self-hosted Fraunces / Work Sans declared exactly as each board loads them from Google Fonts.
- `apps/web/visual/compare.mjs` — screenshots every route and its board and pixel-diffs them. Phase 1 result: **41/41 screens, 0 pixels different.**
- `apps/web/visual/smoke.mjs` — every route renders with 0 console errors; key navigation paths click through.

When a board changes on the canvas: re-export it into `design/boards/`, run the converter, run the diff.

## Run it
```bash
cd apps/web && npm install
npm run dev                      # http://localhost:5173 (includes the "Screens" tester menu)
npx vite build                   # production build -> dist/  (static, deploy anywhere)
npx vite build --mode preview    # single-file shareable preview -> dist-preview/
```
Visual check: `python3 tools/build_harness.py`, serve `apps/web` on :4180 and `vite preview` on :4173, then
`node visual/compare.mjs http://localhost:4173 http://localhost:4180/visual/harness`.

## Deploy (Vercel)
`vercel.json` at the repo root builds `apps/web` and serves it as a single-page app. Import the GitHub repo in
Vercel with the default settings (no root directory or framework changes needed). Every push to `main` deploys
production; every pull request gets its own preview URL.

## Phases
1. **UI shell** (done) — all 41 screens as routes, navigation wired, pixel-parity proof.
2. **Backend foundation** — NestJS API + PostgreSQL/Prisma, roles (customer, dealer, provider, admin), login/activation, dealer approval + feature/tab access, property listings (public Properties page and dealer Add Property on live data).
3. **Installments** — plan creation, schedules, payments, reminders; customer My Properties / statements; dealer Customers.
4. **Demand → offers** — Property Advisor / Invest by ROI requests, dealer Buyer Requests & offer builder, customer compare & accept, resale / transfer approvals, broadcast offers.
5. **Build services** — estimator, build requests routed to providers, quote builder, customer Build Project, credibility scoring.
6. **Marketing & admin AI** — email/SMS templates + AI editor, contact import, AI scraper onboarding, AI provider settings, credibility oversight, customer-data oversight.
7. **Production launch** — hosting, CI (visual diff gate), security hardening, monitoring, SMS/email/WhatsApp providers.
