// fade
import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { isArray } from '@/utils/is'
// import { isArray } from '@/utils/is'

type DomRef = Map<Ref<HTMLElement | HTMLElement[]>, string>
const scrollTop = ref(0)
const domRef = ref<DomRef>(new Map())

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
  if (boxTop < scrollTop.value)
    dom.classList.add(type)
  else
    dom.classList.remove(type)
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
// 单个页面上 多个组件 但是保证只需要一个滚动就可以了 所以需要在当前页面的根组件上挂载监听
export function setupHandleScroll() {
  function handleScroll() {
    scrollTop.value = (window.innerHeight / 5) * 4
    traversalDom(domRef as any)
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // domRef.value = new Map()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
/**
 *
 * @param dom 需要添加show的组件
 * @param delay 是否需要延迟显示
 */
export function useAnimation(dom: Ref, type = 'show') {
  // 动效叠加 之后考虑
  hasSetRefDom(dom, type)
}
