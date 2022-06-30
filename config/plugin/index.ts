import type { Plugin } from 'vite'
// import { setupAutoimport } from './auto-import'
import { setupUnoCSS } from './unocss'
import { setupVuePlugin } from './vue'
import { setupVueComponents } from './vue-components'
export function configVitePlugin() {
  // TODO isbuild
  const vitePlugins: Plugin[] = [
    setupVuePlugin(),
    setupVueComponents(),
    // setupAutoimport(),
    setupUnoCSS(),
  ]
  return vitePlugins
}
