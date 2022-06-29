import type { Plugin } from 'vite'
import { setupAutoimport } from './auto-import'
import { setupUnoCSS } from './unocss'
import { setupVuePlugin } from './vue'
import { setupVueComponents } from './vue-components'
export function configVitePlugin() {
  // TODO isbuild
  const vitePlugins: Plugin[] = [
    setupAutoimport(),
    setupUnoCSS(),
    setupVuePlugin(),
    setupVueComponents(),
  ]
  return vitePlugins
}
