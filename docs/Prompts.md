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
