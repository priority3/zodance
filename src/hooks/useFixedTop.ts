import type { Ref } from 'vue'
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
interface fixedTopRes {
  // 是否到达浏览器视图顶部
  isTop: boolean
  // 并且是否需要固定
  isFixed: boolean
  // 页面可是的宽度
  clientWidth: number
}

/**
 *
 * @param containerBox 需要固定容器的父盒子
 * @param fixedBox 需要固定的盒子
 * @param contentInfo 用于取消固定盒子确定的高度的盒子
 * @param isSelfClientWidth 视图的宽度
 * @returns
 */
export function useFixedTop(
  containerBox: Ref<HTMLElement | null>,
  fixedBox: Ref<HTMLElement | null>,
  contentInfo: Ref<HTMLElement | null>,
  isSelfClientWidth?: boolean,

): fixedTopRes {
  // 页面滚动条的高度
  const scrollTop = ref<number>(0)
  // 距离顶部的高度 以需要固定元素的父元素 决定，因为固定元素的父元素可能存在border会影响固定的位置有误差
  const titleBoxTop = ref<number>(0)
  // 需要固定的元素以及下面可能存在的元素之和的高度 用来固定元素什么时候取消固定
  const titleBoxBottom = ref<number>(0)
  // 需要固定元素的高度
  const titleBoxHeight = ref<number>(0)
  // 需要固定元素的宽度
  const titleBoxWidth = ref<number>(0)
  // 视图宽度
  const clientWidth = ref<number>(0)
  function handleScroll() {
    scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  }
  function handleResize() {
    clientWidth.value = window.pageXOffset || document.documentElement.clientWidth || document.body.clientWidth
  }
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    isSelfClientWidth && window.addEventListener('resize', handleResize)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    isSelfClientWidth && window.removeEventListener('resize', handleResize)
  })
  nextTick(() => {
    titleBoxTop.value = containerBox.value?.getBoundingClientRect().top || 0
    titleBoxHeight.value = fixedBox.value?.clientHeight || 0
    titleBoxWidth.value = fixedBox.value?.clientWidth || 0
    titleBoxBottom.value
    = (containerBox.value?.getBoundingClientRect().top || 0) + (contentInfo.value?.clientHeight || 0 + titleBoxTop.value || 0)
  })
  const isTop = computed<boolean>(() => {
    return scrollTop.value > (titleBoxTop.value || 0)
  })
  const isFixed = computed<boolean>(() => {
    return isTop.value && scrollTop.value < (titleBoxBottom.value || 0)
  })

  return {
    isTop: isTop.value,
    isFixed: isFixed.value,
    clientWidth: clientWidth.value,
  }
}
