import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://techno-logic.us',
  output: 'static',
  redirects: {
    '/blog/your-technical-skills-arent-enough': '/blog/technical-communication-prep-framework',
    '/blog/building-better-angular-applications-with-signals': '/blog/angular-control-flow-syntax',
  },
  integrations: [sitemap()],
});
