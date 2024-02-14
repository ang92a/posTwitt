import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },

      '/image': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/profileImg': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
});
