import Autoimport from 'unplugin-auto-import/vite'

export function setupAutoimport() {
  return Autoimport({
    imports: [
      'vue',
      'vue/macros',
      '@vueuse/core',
    ],
    // TODO 自定义的自动引入
    dirs: [],
    // vue template 直接引用变量
    vueTemplate: true,
  })
}
