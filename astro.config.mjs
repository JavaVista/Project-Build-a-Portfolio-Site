import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://techno-logic.us',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/scrumble': '/scrumble/index.html',
  },
});
