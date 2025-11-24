import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    hmr: {
      host: 'anas.local',
      protocol: 'ws',
    },
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
    },
  },
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
