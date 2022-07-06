import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
export function setupUnoCSS() {
  return UnoCSS({
    presets: [
      presetUno(),
      presetAttributify(),
      // 暂定
      presetIcons(),
    ],
  })
}
