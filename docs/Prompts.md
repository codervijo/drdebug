# Prompt History — drdebug.dev

<!-- Append new prompts at the bottom, newest last. Format:

## YYYY-MM-DD [optional title]
> <prompt text or short summary>

The dated H2 (`## YYYY-MM-DD`) is what `portfolio project check` parses
to surface "last AI prompt" per project. Keep entries append-only.
-->

## 2026-05-28 — scaffolded via portfolio new bootstrap

> Created project skeleton. Stack chosen, scaffolding written, git initialized.

## 2026-05-28 — programmatic SEO error-fix scaffold

> Build the templating + content pipeline (no content) for a programmatic-SEO
> "AI agent error fix" section: an `errors` content collection with a Zod
> schema (platform enum lindy/n8n/relay, errorMessage, slug,
> plainLanguageMeaning, causes[], fixSteps[], whyItHappens?, relatedErrors[],
> lastVerified); a dynamic route `/fix/[platform]/[slug]` rendered for the
> panicked-operator skim (error + platform badge, meaning callout,
> frequency-ranked causes, numbered fix steps with screenshot slots,
> expandable "why", related links, repeated waitlist CTA); `/fix/` index with
> search + platform filter and per-platform `/fix/[platform]/` indexes; three
> obviously-fake placeholder entries (one per platform); per-page meta tags
> ("[Error] — [Platform] error fix | Doctor Debug", description from the plain
> meaning) + sitemap integration; `public/screenshots/` README with the
> `[platform]-[error-slug]-step-[n].png` naming convention. Reuse the existing
> waitlist component; no backend; do not invent error text/causes/fixes.

## 2026-05-28 — real error-fix drafts + verification gate

> Move from scaffold to real content via "I research + draft, you verify":
> added a verification gate to the schema (verified default false, confidence,
> verificationNote, sources, optional lastVerified) — drafts show a "do not
> ship" banner, emit noindex, and get a "draft" pill in the indexes. Researched
> real, sourced errors from public docs/forums and drafted 6 entries (3 n8n
> high-confidence, 3 Lindy medium-confidence); kept Relay as a placeholder
> since no verbatim Relay error strings were findable publicly. Documented the
> /fix/ route structure, content schema, and "how to add a new error page" in
> AI_AGENTS.md.

## 2026-05-28 — track /fix/ todos in lamill.toml

> Record the shipped + outstanding /fix/ error-fix work as [[todo]] entries in
> lamill.toml (3 done, 5 open with priorities — verify Lindy/n8n drafts live,
> capture real Relay strings, GSC sitemap submit, decide on pnpm-lock.yaml).

## 2026-07-06 — on-page SEO hardening (OG image, structured data, footer pages)

> Improve on-page SEO for the landing site: real 1200x630 OG image referenced in
> og:image/twitter:image sitewide; expand homepage JSON-LD to Organization
> (logo + sameAs [VERIFY]) + WebSite + SoftwareApplication (pre-launch) + FAQPage
> driven from a shared src/lib/faq.ts that also renders a visible FAQ section
> (so schema matches on-page content); real /privacy and /contact pages
> replacing footer "#" links; crawlable homepage→/fix/ link; meta description
> trimmed to 140 chars; sitemap filter excluding noindex drafts. Reconciled the
> requested /fixes/ content layer with the existing /fix/ library (kept it as-is
> per operator — no new invented pages, respecting the verify-before-index gate).

## 2026-07-06 — GSC sitemap submit + close todo

> Verified the deploy live, force-resubmitted the updated sitemap
> (https://drdebug.dev/sitemap-index.xml) to the already-verified
> sc-domain:drdebug.dev GSC property via `portfolio settings gsc submit-sitemap
> --force`, and marked the GSC post-deploy todo done in lamill.toml.

## 2026-07-06 — diagnose "missing" /fix/ pages + kill soft-404

> Reported /fix/ pages as missing (soft-404 to homepage at 200) and asked to
> build flat cross-platform hubs (/fix/connection-expired/ etc.) with per-page
> SEO, a real 404, and sitemap/schema hygiene. Diagnosis: the pages were never
> missing — they exist live under the platform-nested model /fix/[platform]/[slug]/
> (e.g. /fix/n8n/webhook-not-registered/); the tested flat slugs never existed and
> fell through the Cloudflare SPA catch-all. Per operator decision, kept the
> existing verify-gated model (no invented flat hubs) and fixed the real bugs:
> switched wrangler not_found_handling "single-page-application" → "404-page",
> added src/pages/404.astro (noindex), and replaced the invalid Organization
> sameAs "[VERIFY…]" placeholder with https://github.com/codervijo. Existing fix
> pages already own their canonical/title/JSON-LD via SeoHead. Build clean, 10
> tests pass. Flagged a pre-existing test-infra gap (jsdom used by vitest.config
> but undeclared in package.json).

## 2026-07-09 — decouple screenshots from /fix/ pages (ship text-only)

> Can't get authentic Lindy screenshots (no login/session; won't fabricate UI),
> so decoupled them: the [slug].astro "Screenshot slot — drop …" placeholder was
> leaking on the live, verified, indexed Lindy pages. Changed it to render only
> on unverified drafts (authoring hint) and nothing on verified pages, so live
> fix pages ship as clean text-only steps. Screenshots are now optional draft-time
> polish, not a visitor-facing dependency. Logged a low-priority lamill todo to
> backfill real Lindy screenshots opportunistically.

## 2026-09-17 — backfill PRD phases table (v0.A–v1.G)

> Feature table showed only the bootstrap scaffold + a `<fill in>` v1.A. Backfilled
> docs/prd.md from git history: v1.A landing page, v1.B /fix/ library + verified
> gate, v1.C Lindy verified, v1.D on-page SEO hardening (all done); v1.E keyword
> research, v1.F n8n verify, v1.G Relay strings (planned, from lamill.toml todos).
> Filled the v1 Versions row; project_version → v1.D.

## 2026-09-17 — v1.E keyword research + Relay shutdown news

> Start v1.E. Ahrefs blocked (trial, 0 API units) and GSC has no query data, so
> ranked /fix/ candidates on labeled proxies (Google autocomplete + n8n community
> forum view counts) in docs/keyword-research.md: n8n is where the demand is,
> Lindy has ~no error search, Relay.app shut down (free 2026-08-15, paid
> 2026-09-14). Operator: "dont drop relay - just update that it is shutting down
> - add news" → optional `news` on PlatformMeta, rendered as a dated notice on
> /fix/relay/ sourced to relay.app. v1.E ✅, v1.G 🚧.

## 2026-09-18 — v1.F verify n8n drafts

> Start v1.F. Verified the 3 n8n drafts against n8n source (2.40.0) and a live
> local n8n 2.39.7 container (webhook 404s reproduced). Corrected before flipping
> verified: current webhook hints, test URL omits method, Publish replaces the
> Active toggle, wrong-method case is a different message; dropped "(404)" from
> the 404 errorMessage; dropped the unsourced copy-paste cause on chat-model.

## 2026-09-18 — v1.H n8n batch 2 (5 entries)

> "commit and start the next n8n entries" → "flip them and commit and push".
> Added 5 n8n /fix/ pages from keyword-research ranks 1–5: bad-request (400),
> authorization-failed (401), too-many-requests (429), failed-to-receive-response,
> workflow-could-not-be-activated. 400/401/429 messages reproduced live on n8n
> 2.39.7 via `n8n execute`; the other two strings confirmed in n8n source. Causes
> and fixes researched from community.n8n.io threads, n8n docs and source by
> parallel agents (every cause cited); UI labels checked against source; unsourced
> fixes cut. Operator approved flipping verified=true.
