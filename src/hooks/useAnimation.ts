// fade
import type { Ref } from 'vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import { isArray } from '@/utils/is'
// import { isArray } from '@/utils/is'

type DomRef = Map<Ref<HTMLElement | HTMLElement[]>, string>
const scrollTop = ref(0)
const domRef = ref<DomRef>(new Map())
// tip:全局放一个 ref 当追加show时 去computed 判断当前的值是否显示到了页面
const isComputed = ref(false)

function traversalDom(el: Ref<DomRef>) {
  if (domRef.value?.size) {
    for (const [key, value] of el.value) {
      // console.log(isArray(key.value))
      const dom = key.value
      if (isArray(dom)) {
        (dom as HTMLElement[]).forEach((item) => {
          useShow(item, value)
        })
      }
      else {
        useShow(dom as HTMLElement, value)
      }
    }
  }
}
function useShow(dom: HTMLElement, type: string) {
  if (!dom)
    return
  const boxTop = dom.getBoundingClientRect().top
  if (boxTop < scrollTop.value) {
    dom.classList.add(type)
    isComputed.value = true
  }
  else {
    dom.classList.remove(type)
    isComputed.value = false
  }
}
function hasSetRefDom(dom: Ref, type: string) {
  let isExist = false
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [key, _] of domRef.value) {
    if (key === dom) {
      isExist = true
      return dom
    }
  }
  !isExist && domRef.value.set(dom, type)
}

function throttle(func: Function, wait: number) {
  let previous = 0
  return function (this: any, ...args: any[]) {
    const now = Date.now()
    if (now - previous > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}

// 单个页面上 多个组件 但是保证只需要一个滚动就可以了 所以需要在当前页面的根组件上挂载监听
export function setupHandleScroll() {
  function handleScroll() {
    scrollTop.value = (window.innerHeight / 5) * 4.8
    traversalDom(domRef as Ref<DomRef>)
  }
  // 每次页面加载清楚掉上级页面监听的dom
  domRef.value.clear()
  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', throttle(handleScroll, 100))
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
/**
 *
 * @param dom 需要添加的节点
 * @param type 类型
 */
export function useAnimation(dom: Ref, type = 'show') {
  // 动效叠加 之后考虑
  hasSetRefDom(dom, type)
  return {
    // 手动响应滚动
    traversalDom,
    // 是否到了页面显示区域，tip:数组dom不做是否显示 处理永远为false
    isShow: !isArray(dom.value) && computed(() => isComputed.value && dom.value.classList.contains(type)),
  }
}
