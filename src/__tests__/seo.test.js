// src/__tests__/seo.test.js
// Technical-SEO regression check for the homepage. Reads src/pages/index.astro
// in full (meta tags live in the template body; the JSON-LD graph is built in
// the frontmatter and injected via set:html), and asserts the SEO baseline
// tags + structured-data types remain present.

import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const raw = readFileSync(join(process.cwd(), 'src', 'pages', 'index.astro'), 'utf8');

describe('SEO baseline (src/pages/index.astro)', () => {
  it('has a <title>', () => {
    expect(raw).toMatch(/<title>/);
  });

  it('has <meta name="description">', () => {
    expect(raw).toMatch(/<meta\s+name="description"/);
  });

  it('has <link rel="canonical">', () => {
    expect(raw).toMatch(/<link\s+rel="canonical"/);
  });

  it('has Open Graph tags', () => {
    expect(raw).toMatch(/property="og:title"/);
    expect(raw).toMatch(/property="og:url"/);
  });

  it('has an OG + Twitter share image', () => {
    expect(raw).toMatch(/property="og:image"/);
    expect(raw).toMatch(/name="twitter:image"/);
  });

  it('has Twitter card meta', () => {
    expect(raw).toMatch(/name="twitter:card"/);
  });

  it('has favicon link', () => {
    expect(raw).toMatch(/<link\s+rel="icon"[^>]*href="\/favicon\.svg"/);
  });

  it('emits JSON-LD with Organization + WebSite + SoftwareApplication + FAQPage', () => {
    expect(raw).toMatch(/application\/ld\+json/);
    expect(raw).toMatch(/"Organization"/);
    expect(raw).toMatch(/"WebSite"/);
    expect(raw).toMatch(/"SoftwareApplication"/);
    expect(raw).toMatch(/"FAQPage"/);
  });
});

describe('Social share image asset', () => {
  it('public/og-image.png exists (referenced by og:image / twitter:image)', () => {
    expect(existsSync(join(process.cwd(), 'public', 'og-image.png'))).toBe(true);
  });
});
