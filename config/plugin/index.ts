import type { Plugin } from 'vite'
// import { setupAutoimport } from './auto-import'
import { setupUnoCSS } from './unocss'
import { setupVuePlugin } from './vue'
import { setupVueComponents } from './vue-components'
import { setupConfigMock } from './mock'
import { setupSvgBuilder } from './svgBuilder'
import { setupPluginHtml } from './html'
export function configVitePlugin(viteEnv: ImportMetaEnv) {
  // TODO isbuild
  const vitePlugins: (Plugin | Plugin[])[] = [
    setupVuePlugin(),
    setupVueComponents(),
    setupConfigMock(false),
    setupSvgBuilder(),
    // setupAutoimport(),
    setupUnoCSS(),
    setupPluginHtml(viteEnv),
  ]
  return vitePlugins
}
