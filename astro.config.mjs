// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.schauermayhew.com",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      allowedHosts: true,
    },
  },
  redirects: {
    "/bry-resume": "/resume",
  },
  integrations: [sitemap()],
});
