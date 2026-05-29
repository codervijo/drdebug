// src/content.config.ts
//
// Content collection for the programmatic-SEO "error fix" pages under /fix/.
// Each entry is one JSON data file in src/content/errors/ describing a single
// platform error and its plain-language fix. The route, indexes, and meta tags
// are all generated from this schema — fill in the fields and a page appears.
//
// Platforms are a closed set (lindy / n8n / relay). To add a platform, extend
// the `platform` enum here AND the PLATFORMS map in src/lib/platforms.ts.
//
// NOTE: do NOT invent real error text/causes/fixes in the data files. The
// schema is the scaffolding; verified content gets filled in by the operator.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const PLATFORMS = ["lindy", "n8n", "relay"] as const;
const FREQUENCIES = ["common", "sometimes", "rare"] as const;

const errors = defineCollection({
  // Data entries (no Markdown body). Filenames are conventionally
  // `<platform>-<slug>.json` but the route is built from the schema fields,
  // so the filename is just for human browsing.
  loader: glob({ pattern: "**/*.json", base: "./src/content/errors" }),
  schema: z.object({
    // Which no-code platform this error belongs to.
    platform: z.enum(PLATFORMS),

    // The exact error text as the user sees it in the platform UI. Rendered
    // verbatim (monospace) at the top of the page.
    errorMessage: z.string(),

    // URL slug — becomes /fix/<platform>/<slug>. Lowercase, hyphenated.
    slug: z.string(),

    // 1–2 sentence plain-language explanation. Drives the callout box AND the
    // page meta description.
    plainLanguageMeaning: z.string(),

    // Possible causes, ranked at render time by `frequency` (common first).
    causes: z
      .array(
        z.object({
          title: z.string(),
          explanation: z.string(),
          frequency: z.enum(FREQUENCIES),
        }),
      )
      .default([]),

    // Numbered, ordered repair steps. `screenshot` is an optional path under
    // /public (convention: /screenshots/<platform>-<slug>-step-<n>.png).
    fixSteps: z
      .array(
        z.object({
          step: z.number().int().positive(),
          instruction: z.string(),
          screenshot: z.string().optional(),
        }),
      )
      .default([]),

    // Optional longer "why does this happen" explanation (expandable section).
    whyItHappens: z.string().optional(),

    // Slugs of related error entries. Plain strings (NOT reference()) on
    // purpose: a related page may not exist yet while you're filling content
    // in, and we don't want that to break the build. The template resolves
    // each slug against the collection at render time and links the ones that
    // exist, silently skipping the rest.
    relatedErrors: z.array(z.string()).default([]),

    // ── Verification gate ───────────────────────────────────────────────
    // Entries default to UNVERIFIED drafts. The template shows a "draft"
    // banner and emits <meta name="robots" content="noindex"> so drafts can't
    // rank before a human confirms them. Flip `verified` to true ONLY after
    // checking against the live platform, and set `lastVerified` at the same
    // time. Index pages tag drafts with a "draft" pill.
    verified: z.boolean().default(false),

    // Self-rated confidence of the (unverified) draft. Helps you prioritize
    // what to verify first. Drop/ignore once verified.
    confidence: z.enum(["high", "medium", "low"]).optional(),

    // What a human still needs to confirm against the live platform. Shown in
    // the draft banner so the reviewer knows exactly what to check.
    verificationNote: z.string().optional(),

    // Source URLs the draft was built from (docs / forum threads). Rendered in
    // the page footer to make verification fast.
    sources: z.array(z.string()).default([]),

    // When the content was last verified against the live platform. Required
    // in spirit once `verified` is true; omitted for drafts.
    lastVerified: z.coerce.date().optional(),
  }),
});

export const collections = { errors };
