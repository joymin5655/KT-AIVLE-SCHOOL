import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/KT-AIVLE-SCHOOL/dashboard/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // GitHub Pages를 위한 최적화
    rollupOptions: {
      output: {
        // 파일명 안정성 확보
        entryFileNames: '[name].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]'
      }
    }
  },
})
