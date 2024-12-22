// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'page/about.html'),
        contact: resolve(__dirname, 'page/contact.html'),
        single: resolve(__dirname, 'page/single.html'),
        work: resolve(__dirname, 'page/work.html'),
        works: resolve(__dirname, 'page/works.html'),
      }
    }
  }
});