import UnoCSS from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'
export function setupUnoCSS() {
  return UnoCSS({
    shortcuts: {},
    presets: [
      presetUno(),
      presetAttributify(),
      // 暂定
      // presetIcons(),
    ],
  })
}
