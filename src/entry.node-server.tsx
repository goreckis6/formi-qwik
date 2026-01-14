/*
 * WHAT IS THIS FILE?
 *
 * It's the entry point for the Express HTTP server when building for production.
 *
 * Learn more about Node.js server integrations here:
 * - https://qwik.dev/docs/deployments/node/
 *
 */
import { createQwikCity } from "@builder.io/qwik-city/middleware/node";
import qwikCityPlan from "@qwik-city-plan";
import render from "./entry.ssr";
import { createServer } from "node:http";
import { join } from "node:path";

// Allow for dynamic port
const PORT = process.env.PORT ?? 3004;

// Create the Qwik City express middleware
const { router, notFound, staticFile } = createQwikCity({
  render,
  qwikCityPlan,
  // Base path for static assets - CRITICAL for correct URL generation
  base: "/",
  static: {
    // Use absolute path from current working directory (Docker WORKDIR is /app)
    root: join(process.cwd(), "dist"),
    cacheControl: "public, max-age=31536000, immutable",
    mimeTypes: {
      ".xml": "application/xml",
      ".xsl": "application/xml",
    },
  },
});

const server = createServer();

server.on("request", (req, res) => {
  staticFile(req, res, () => {
    router(req, res, () => {
      notFound(req, res, () => {});
    });
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Node server listening on http://localhost:${PORT}`);
});
