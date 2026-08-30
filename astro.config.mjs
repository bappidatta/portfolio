// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/config.ts";

export default defineConfig({
  site: "https://bappidatta.github.io",
  base: "/portfolio",
  integrations: [sitemap()],
});
