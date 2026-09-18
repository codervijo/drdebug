// src/lib/platforms.ts
//
// Single source of truth for the closed set of supported platforms and how
// each is presented (display label + badge classes). Keep this in sync with
// the `platform` enum in src/content.config.ts.

export type Platform = "lindy" | "n8n" | "relay";

export const PLATFORM_ORDER: Platform[] = ["lindy", "n8n", "relay"];

interface PlatformMeta {
  /** Human-facing name as the vendor brands it. */
  label: string;
  /** Tailwind classes for the small platform badge (semantic tokens only). */
  badgeClass: string;
  /** Optional dated platform news, shown as a notice on /fix/<platform>/. */
  news?: PlatformNews;
}

interface PlatformNews {
  /** ISO date the news item was written (YYYY-MM-DD). */
  date: string;
  headline: string;
  body: string[];
  sources: { label: string; url: string }[];
}

export const PLATFORMS: Record<Platform, PlatformMeta> = {
  lindy: {
    label: "Lindy",
    badgeClass: "bg-accent text-accent-foreground",
  },
  n8n: {
    label: "n8n",
    badgeClass: "bg-secondary text-secondary-foreground",
  },
  relay: {
    label: "Relay",
    badgeClass: "bg-primary/10 text-primary",
    news: {
      date: "2026-09-17",
      headline: "Relay.app has shut down",
      body: [
        "Relay.app wound down in 2026: free accounts closed on August 15, 2026 and paying customers on September 14, 2026. New signups were turned off during the wind-down.",
        "Per Relay, customer content and product data not exported before the end of the wind-down window is permanently deleted. Relay's export covered workflows, sequences and MCP servers as JSON plus AI prompts, and run history and tables as CSV.",
      ],
      sources: [{ label: "Relay.app shutdown announcement", url: "https://relay.app/" }],
    },
  },
};

/** Display label for a platform key, falling back to the raw key. */
export function platformLabel(p: string): string {
  return PLATFORMS[p as Platform]?.label ?? p;
}

// Frequency ordering for ranking causes (common first → rare last).
export const FREQUENCY_RANK: Record<string, number> = {
  common: 0,
  sometimes: 1,
  rare: 2,
};

export const FREQUENCY_LABEL: Record<string, string> = {
  common: "Common",
  sometimes: "Sometimes",
  rare: "Rare",
};

/** Tailwind classes for a frequency pill. */
export const FREQUENCY_CLASS: Record<string, string> = {
  common: "bg-destructive/10 text-destructive",
  sometimes: "bg-accent text-accent-foreground",
  rare: "bg-muted text-muted-foreground",
};
