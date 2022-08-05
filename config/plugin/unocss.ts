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
    shortcuts: {
      fc: 'flex justify-center items-center',
      fcc: 'flex flex-col justify-center items-center',
      fic: 'flex flex-col items-center',
    },
  })
}
