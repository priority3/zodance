import { defineConfig } from 'vite'
import { configVitePlugin } from './config/plugin'
// https://vitejs.dev/config/

export default defineConfig({
  plugins: configVitePlugin(),
  resolve: {
    alias: {
      '@/': '/src/',
    },
  },
  build: {
    assetsDir: './src/assets',
  },
  base: './',
  server: {
    host: '::',
    cors: true,
  },
})
