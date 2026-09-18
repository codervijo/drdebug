---
project: drdebug.dev
prd_version: 1
project_version: v1.E
status: planned
owner: Vijo
last_updated: 2026-09-17
---

# drdebug.dev — PRD

## 1. Problem

<1-2 sentence problem statement — fill in: what user-facing problem
does this site solve? Who has it? Why does it matter?>

## 2. Users

<who uses this — target user, what they care about, rough audience size>

## 3. Goals & non-goals

**Goals:**
- <fill in>

**Non-goals:**
- <fill in>

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | landing page + `/fix/` error-fix library | waitlist capture live; verified `/fix/` pages indexed, drafts `noindex` |

## 5. Phases

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | landing page | tanstack-start → Astro port; one-screen pitch + waitlist form | ✅ |
| **v1.B** | `/fix/` library | typed `errors` collection, `/fix/[platform]/[slug]/` routes, `verified` gate (`noindex` + draft banner), sourced Lindy/n8n drafts | ✅ |
| **v1.C** | Lindy verified | 3 Lindy drafts verified live → indexed | ✅ |
| **v1.D** | on-page SEO hardening | OG image, JSON-LD + visible FAQ, `/privacy` + `/contact`, sitemap excludes drafts, real 404, canonical fixes, IndexNow key, text-only fix pages | ✅ |
| **v1.E** | keyword research | map moment-of-breakage queries to `/fix/` pages; prioritize next entries by volume × intent — see `docs/keyword-research.md` (proxy data; Ahrefs re-run pending) | ✅ |
| **v1.F** | n8n verified | verify 3 n8n drafts against live n8n → indexed | planned |
| **v1.G** | Relay content | Relay.app shut down (free 2026-08-15, paid 2026-09-14): shutdown news on `/fix/relay/` ✅; verbatim error strings uncapturable now — placeholder stays | 🚧 |

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
