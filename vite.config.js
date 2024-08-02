// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      // Make sure to add 'aos' to the external array
      external: ['aos']
    }
  }
});
