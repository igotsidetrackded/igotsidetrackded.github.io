// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.schauermayhew.com',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    '/projects': '/',
    '/photo': '/',
    '/about': '/',
    '/contact': '/',
    '/bry-resume': '/resume',
  },
});
