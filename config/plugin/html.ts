import { createHtmlPlugin } from 'vite-plugin-html'
import type { Plugin } from 'vite'
export function setupPluginHtml(viteEnv: ImportMetaEnv) {
  const { VITE_GLOBAL_TITLE } = viteEnv
  return createHtmlPlugin({
    inject: {
      data: {
        title: VITE_GLOBAL_TITLE,
      },
      tags: [
        {
          injectTo: 'body-prepend',
          tag: 'div',
          attrs: {
            id: 'tag1',
          },
        },
      ],
    },
  }) as Plugin[]
}
