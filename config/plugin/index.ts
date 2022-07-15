import type { Plugin } from 'vite'
// import { setupAutoimport } from './auto-import'
import { setupUnoCSS } from './unocss'
import { setupVuePlugin } from './vue'
import { setupVueComponents } from './vue-components'
import { setupConfigMock } from './mock'
import { setupSvgBuilder } from './svgBuilder'

export function configVitePlugin() {
  // TODO isbuild
  const vitePlugins: (Plugin | Plugin[])[] = [
    setupVuePlugin(),
    setupVueComponents(),
    setupConfigMock(false),
    setupSvgBuilder(),
    // setupAutoimport(),
    setupUnoCSS(),
  ]
  return vitePlugins
}
