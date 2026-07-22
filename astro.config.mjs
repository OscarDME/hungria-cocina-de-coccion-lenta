import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import compress from 'astro-compress';

// Doc §4: configuración que garantiza 100/100 en PageSpeed.
export default defineConfig({
  site: 'https://lassu-fozes.crearis.online',
  output: 'static',
  adapter: vercel({
    imageService: false, // imágenes pre-procesadas por Sharp, NO serverless
    webAnalytics: { enabled: false },
  }),
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
    cssMinify: 'esbuild',
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    compress({
      CSS: false, // ya lo hace esbuild
      Image: false, // ya lo hace Sharp
      HTML: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
});
