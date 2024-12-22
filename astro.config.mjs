// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Add your domain here
  site: 'https://sharonbee.com',
  integrations: [svelte(), sitemap()]
});