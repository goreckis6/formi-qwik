import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity, nodeAdapter } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [
    qwikCity({
      adapter: nodeAdapter(),   // 🔥 włącza SSR w 1.7
    }),
    qwikVite(),
    tsconfigPaths(),
  ],
}));
