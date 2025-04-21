import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isBuild = command === 'build';

  return {
    base: '/resportfolio/',
    plugins: [react()],
    server: {
      port: 3000,   // 👨‍💻 Local dev server port
      open: true,   // 🔓 Opens browser automatically
    },
    build: {
      outDir: 'dist',    // 📦 Output folder for production build
      sourcemap: true,   // 🧭 Helpful for debugging
    },
  };
});
