import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Use "/" if deploying on the main GitHub Pages domain (vandrasiajay.github.io)
});
