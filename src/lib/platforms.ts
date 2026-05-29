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
