import { defineConfig, loadEnv } from 'vite'
import { configVitePlugin } from './config/plugin'
import { wrapperEnv } from './config/utils'
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  return {
    plugins: configVitePlugin(viteEnv),
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
  }
})
