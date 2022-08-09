import { readonly as defineReadonly, inject, provide, reactive } from 'vue'
import type { InjectionKey } from 'vue'

interface CreateContextOptions {
  readonly?: boolean
  createProvider?: boolean
  native?: boolean
}
export function createContext<T>(
  context: any,
  key: InjectionKey<T> = Symbol('unique-key'),
  options: CreateContextOptions = {},
) {
  /**
   * @description
   * readonly : 只读，不可修改
   * createProvider : 是否创建provider
   * native : 是否使用原生的context
   */
  const { readonly = true, createProvider = true, native = false } = options
  const state = reactive(context)
  const providerData = readonly ? defineReadonly(state) : state
  createProvider && provide(key, native ? state : providerData)
  return {
    state,
  }
}

export function useContext<T>(
  key: InjectionKey<T> = Symbol('unique-key'),
  defaultValue?: any,
) {
  return inject(key, defaultValue || {})
}
