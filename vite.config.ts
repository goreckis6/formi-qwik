import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    qwikCity({
      // Static Site Generation (SSG) configuration
      // Prerender these routes at build time for better SEO
      staticGenerate: {
        origin: 'https://formipeek.com',
        // Maximum number of workers for parallel prerendering
        maxWorkers: 4,
        // List of routes to prerender
        routes: [
          '/',
          '/converters',
          '/viewers',
          '/compress',
          '/samples',
          '/convert/heic-to-pdf',
          // Home pages for all languages
          '/pl/',
          '/de/',
          '/es/',
          '/fr/',
          '/it/',
          '/pt/',
          '/ru/',
          '/ja/',
          '/zh/',
          '/ko/',
          '/ar/',
          '/hi/',
          '/id/',
          '/tr/',
          '/nl/',
          '/sv/',
          // HEIC converter for all languages
          '/pl/convert/heic-to-pdf',
          '/de/convert/heic-to-pdf',
          '/es/convert/heic-to-pdf',
          '/fr/convert/heic-to-pdf',
          '/it/convert/heic-to-pdf',
          '/pt/convert/heic-to-pdf',
          '/ru/convert/heic-to-pdf',
          '/ja/convert/heic-to-pdf',
          '/zh/convert/heic-to-pdf',
          '/ko/convert/heic-to-pdf',
          '/ar/convert/heic-to-pdf',
          '/hi/convert/heic-to-pdf',
          '/id/convert/heic-to-pdf',
          '/tr/convert/heic-to-pdf',
          '/nl/convert/heic-to-pdf',
          '/sv/convert/heic-to-pdf',
        ],
      },
    }),
    qwikVite(),
    tsconfigPaths()
  ],
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
  server: {
    port: 5173,
  },
});
