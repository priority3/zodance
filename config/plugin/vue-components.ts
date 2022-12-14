import Components from 'unplugin-vue-components/vite'
// import {
//   AntDesignVueResolver,
// } from 'unplugin-vue-components/resolvers'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export function setupVueComponents() {
  return Components({
    resolvers: [
      NaiveUiResolver(),
    ],
    dts: true,
  })
}
