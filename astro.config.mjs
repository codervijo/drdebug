// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://drdebug.dev',
  integrations: [sitemap()],
  output: 'static',
});
