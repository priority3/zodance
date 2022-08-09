import type { InjectionKey, Ref } from 'vue'
import type { Emitter } from '@/utils/mitt'
import { createContext, useContext } from '@/hooks/useContext'

// 创建context 配合mitt 在跟组件provide一个emitter 子组件inject emit 触发事件
export interface SimpleSaasModalContextProps {
  saasModalEmitter: Emitter
  activeName: Ref<string | number>
}
export const key: InjectionKey<SimpleSaasModalContextProps> = Symbol('unique-key')

export function createSaasModalContext(context: SimpleSaasModalContextProps) {
  return createContext<SimpleSaasModalContextProps>(context, key, { readonly: false, native: true })
}

export function useSaasModalContext(): SimpleSaasModalContextProps {
  return useContext<SimpleSaasModalContextProps>(key)
}
