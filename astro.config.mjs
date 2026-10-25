import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function rehypeExternalLinks() {
  return (tree) => {
    function visit(node) {
      if (!node) return;
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (
          typeof href === 'string' &&
          (href.startsWith('http://') || href.startsWith('https://')) &&
          !href.includes('techno-logic.us')
        ) {
          node.properties.target = '_blank';
          node.properties.rel = ['noopener', 'noreferrer'];
        }
      }
      if (Array.isArray(node.children)) {
        node.children.forEach(visit);
      }
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://techno-logic.us',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
});
