import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { nodeServerAdapter } from "@builder.io/qwik-city/adapters/node-server/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [
    qwikCity({
      adapter: nodeServerAdapter({
        ssg: null, // Wyłącz SSG, tylko SSR
      }),
    }),
    qwikVite(),
    tsconfigPaths(),
  ],
}));
