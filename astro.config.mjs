// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://drdebug.dev';

// Unverified error drafts render with <meta robots noindex> (see the `verified`
// gate in src/content.config.ts). Keep those non-indexable URLs OUT of the
// sitemap so it only lists real, indexable pages — otherwise Search Console
// flags "Submitted URL marked noindex". Computed by reading the same JSON the
// content collection loads, so any draft is auto-excluded until it's verified.
const errorsDir = new URL('./src/content/errors/', import.meta.url);
const draftUrls = new Set(
  readdirSync(errorsDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(readFileSync(new URL(f, errorsDir), 'utf8')))
    .filter((e) => e && e.verified !== true && e.platform && e.slug)
    .map((e) => `${SITE}/fix/${e.platform}/${e.slug}/`),
);

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({ filter: (page) => !draftUrls.has(page) }),
    react(),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
