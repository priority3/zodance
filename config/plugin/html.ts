import { createHtmlPlugin } from 'vite-plugin-html'

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
  })
}
