import type { InjectionKey, Ref } from 'vue'
import type { Emitter } from '@/utils/mitt'
import { createContext, useContext } from '@/hooks/useContext'

// 创建context 配合mitt 在跟组件provide一个emitter 子组件inject emit 触发事件
export interface SimplePriceModalContextProps {
  priceModalEmitter: Emitter
  activeName: Ref<string | number>
}
export const key: InjectionKey<SimplePriceModalContextProps> = Symbol('unique-key')

export function createPriceModalContext(context: SimplePriceModalContextProps) {
  return createContext<SimplePriceModalContextProps>(context, key, { readonly: false, native: true })
}

export function usePriceModalContext(): SimplePriceModalContextProps {
  return useContext<SimplePriceModalContextProps>(key)
}
