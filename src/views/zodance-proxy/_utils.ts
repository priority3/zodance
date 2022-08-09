import type { InjectionKey, Ref } from 'vue'
import { HomeMall, MobileModal } from '@/enums/modal'
import type { Emitter } from '@/utils/mitt'
import { createContext, useContext } from '@/hooks/useContext'

export function getModalCodeInfo() {
  const clientWidth = document.documentElement.clientWidth
  if (clientWidth < 768)
    return MobileModal
  return HomeMall
}

// 创建context 配合mitt 在跟组件provide一个emitter 子组件inject emit 触发事件
export interface SimpleProxyModalContextProps {
  proxyModalEmitter: Emitter
  activeName: Ref<string | number>
}
export const key: InjectionKey<SimpleProxyModalContextProps> = Symbol('unique-key')

export function createProxyModalContext(context: SimpleProxyModalContextProps) {
  return createContext<SimpleProxyModalContextProps>(context, key, { readonly: false, native: true })
}

export function useProxyModalContext(): SimpleProxyModalContextProps {
  return useContext<SimpleProxyModalContextProps>(key)
}
