# Keyword research — /fix/ library (v1.E)

Run 2026-09-17. Purpose: decide which `/fix/` entries to write/verify next.

## Data sources — and what's missing

| Source | Status | What it gives |
|---|---|---|
| Ahrefs Keywords Explorer | ✗ blocked — trial workspace has 0 API units | would give volume / KD / traffic potential |
| GSC (`sc-domain:drdebug.dev`, 90d) | ✓ pulled — 0 clicks, 4 impressions, all on `/`, no query rows | no demand signal yet |
| Google autocomplete | ✓ pulled (`suggestqueries.google.com`) | confirms a query is *typed*; no volume |
| community.n8n.io (Discourse) | ✓ pulled — topic count + summed views of top-15 matching threads | real, citable demand **proxy** |

**No search volumes appear below.** Forum views are a proxy for how many
people hit an error, not Google search volume. They are noisy: Discourse
full-text search matches post bodies, so some "top thread" hits are unrelated
(noted where so). Topic count caps at 50. Rank order, not magnitudes, is the
signal. Re-run with Ahrefs units before committing to a large content batch.

## Platform findings

- **Relay — shut down; kept in the platform set** (operator decision
  2026-09-17). Shutdown news added to `/fix/relay/`. Relay.app shut down (free: 2026-08-15, paid: 2026-09-14;
  [docs.relay.app](https://docs.relay.app/),
  [Zapier migration post](https://zapier.com/blog/relay-alternatives/)). No
  live workspace exists to capture error strings from.
- **Lindy — near-zero error search.** Autocomplete for `lindy ai error`
  returns nothing; the only error-shaped suggestion is `lindy ai not working`.
  Lindy searches are navigational/commercial (`login`, `pricing`, `reviews`,
  `alternatives`). The 3 verified Lindy pages are fine to keep; don't expand.
- **n8n — where the demand is.** Error queries autocomplete densely
  (`n8n webhook not registered`, `n8n error failed to receive response`,
  `n8n 401 unauthorized`, `n8n 429 too many requests`, `n8n webhook 404`,
  `n8n ai agent not working`, `ai agent stopped due to max iterations`).
- **Adjacent (not in platform set):** Zapier and Make.com both autocomplete
  error queries (`zapier error 500`, `make com error 400 redirect_uri_mismatch`).
  Recorded only — adding a platform is a scope decision.

## Existing n8n drafts (v1.F verify order)

| Entry | Autocomplete | Forum (topics / views top-15) | Verdict |
|---|---|---|---|
| `webhook-not-registered` | ✓ `n8n webhook not registered` | 50 / 29,087 | verify first |
| `resource-could-not-be-found-404` | ✓ `n8n 404`, `n8n webhook 404` | 50 / 21,641 | verify second |
| `chat-model-sub-node-must-be-connected` | — | 0 / 0 (exact phrase) | lowest; recheck wording |

## Next n8n entries — ranked candidates

Verbatim error strings to confirm live before drafting (per the verify gate).

| Rank | Error string (search phrase) | Autocomplete | Forum topics / views | Note |
|---|---|---|---|---|
| 1 | `Bad request - please check your parameters` | — | 50 / 41,540 | top thread is exact match (18,198) |
| 2 | `Authorization failed - please check your credentials` (401) | ✓ `n8n 401 unauthorized` | 50 / 14,421 | pairs with 401 queries |
| 3 | `The service is receiving too many requests from you` (429) | ✓ `n8n 429 too many requests` | 50 / 24,612 | |
| 4 | `Failed to receive response` | ✓ `n8n error failed to receive response` | 19 / 12,882 | AI-agent / chat-trigger context |
| 5 | `Workflow could not be activated` | — | 50 / 15,685 | top thread is exact match (6,586) |
| 6 | `connect ECONNREFUSED` | — | 50 / 62,407 | mostly self-hosting/proxy — skews technical |
| 7 | `Referenced node is unexecuted` | — | 27 / 31,152 | noisy — top thread unrelated |
| 8 | `Connection lost` | — | 50 / 24,396 | mostly self-hosting |
| 9 | `Max iterations` (AI Agent) | ✓ `ai agent stopped due to max iterations` | 0 (phrase `Maximum iterations`) | recheck exact n8n wording |

ICP filter: ranks 1–5 and 9 hit the no-code operator wiring an agent;
ECONNREFUSED / Connection lost skew toward self-hosters (engineers), so they
rank below their raw view counts.

## Recommended sequence

1. v1.F — verify `webhook-not-registered` and `resource-could-not-be-found-404` live.
2. Draft n8n ranks 1–5 (unverified, `noindex`), then verify.
3. Re-run with Ahrefs units to replace proxies with volumes.

## Reproduce

Scripts were throwaway (session scratchpad): Google autocomplete via
`https://suggestqueries.google.com/complete/search?client=firefox&q=<seed>`;
forum via `https://community.n8n.io/search.json?q="<phrase>"` then
`/t/<id>.json` → `views` for the first 15 topics; GSC via
`portfolio.gsc.query_with_dims(..., dimensions=["query"|"page"])`.
