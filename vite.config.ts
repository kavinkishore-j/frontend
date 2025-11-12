import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ Very important — tells Vite to use root-relative paths
  plugins: [react()],
  build: {
    outDir: 'dist', // default, but we make it explicit
  },
});
