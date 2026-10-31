// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.schauermayhew.com",
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/bry-resume": "/resume",
  },
  integrations: [sitemap()],
});
