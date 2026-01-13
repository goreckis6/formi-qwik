import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity, nodeAdapter } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [
    qwikCity({
      adapter: nodeAdapter(), // ← Wymagane w Qwik 1.7+ dla SSR
    }),
    qwikVite(),
    tsconfigPaths(),
  ],
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
  server: {
    port: 5173,
  },
}));
