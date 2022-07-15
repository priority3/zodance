import Vue from '@vitejs/plugin-vue'

export function setupVuePlugin() {
  return Vue({
    // $ 语法糖
    reactivityTransform: true,
  })
}
