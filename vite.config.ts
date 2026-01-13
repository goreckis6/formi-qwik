import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodeAdapter } from "./adapters";

export default defineConfig(() => {
  return {
    plugins: [
      qwikCity({
        adapter: nodeAdapter(),
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
  };
});
