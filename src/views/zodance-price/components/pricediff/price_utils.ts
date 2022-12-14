import type { Ref } from 'vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

import type { versionType } from '../../constants/type'
import { versionMap } from '../../constants/index'
interface StyleOptions {
  type: versionType
  isTop: Ref<boolean>
  isActive: boolean
  clientWidth?: Ref<number>
}

export function useStyle(options: StyleOptions) {
  const { type, isTop, isActive } = options
  const getinfoPara = computed(() => {
    let res = ''
    // TODO 内容会做更改 暂不做逻辑优化
    type !== 'start' && (res = `联合运营${versionMap[type]}的一切，加上`)
    type === 'plus' && (res = `联合运营${versionMap.major}的一切，加上`)
    return res
  })

  const getTitlePara = computed(() => {
    let res = 'rgba(134,144,156,1)'
    type === 'plus' && (res = 'rgba(255,209,123,1)')
    return res
  })
  const getTitlecolor = computed(() => {
    let res = 'rgba(29,33,41,1)'
    type === 'plus' && (res = 'rgba(255,209,123,1)')
    return res
  })
  const getselfBtnStyle = computed(() => {
    let res = 'rgba(0,0,0,.2)'
    type === 'plus' && (res = 'rgba(255,209,123,1)')
    return {
      color: getTitlecolor,
      width: isTop.value ? '60%' : '80%',
      height: isTop.value ? '26px' : '38px',
      margin: '0 auto',
      borderColor: res,
    }
  })
  function getVersionType(type: string) {
    const res = type
    return res
  }
  const getTitleBoxWidth = computed(() => {
    let res = '100%'
    if (isTop.value) {
      res = '292px'
      // isActive && (res = `${(clientWidth.value * 0.20 * 0.90) + 5}px`)
      isActive && (res = `${292 - 5}px`)
    }
    return res
  })
  const getCommonTitleTop = computed(() => {
    let res = ''
    if (isActive)
      res = '25px'
    else
      res = '30px'
    if (isTop.value)
      res = '5px'
    if (isTop.value && isActive)
      res = '0'

    return res
  })
  const getTitleHeight = (() => {
    let res = '220px'
    if (isActive)
      res = '215px'
    return res
  })()
  return {
    getselfBtnStyle,
    getVersionType,
    getTitleBoxWidth,
    getCommonTitleTop,
    getTitlecolor,
    getinfoPara,
    getTitlePara,
    getTitleHeight,
    // getBorderTopColor,
  }
}

export const isBorT = reactive({
  isTop: false,
  isBottom: false,
})
let scrollTop = 0
let containerBottom = 0 // 310
let containerTop = 0 // 2818
const headerContainer = ref<HTMLElement | null>(null)
function handleScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  isBorT.isTop = scrollTop > containerTop
  isBorT.isBottom = scrollTop >= containerBottom
  // 在显示区间
  if (~~isBorT.isBottom ^ ~~isBorT.isTop)
    headerContainer.value?.classList.add('display-none')
  else
    headerContainer.value?.classList.remove('display-none')
}
export function setupHandleScroll(boxContainer: Ref<HTMLElement | null>, headerDom: Ref<HTMLElement | null>) {
  onMounted(() => {
    headerContainer.value = headerDom.value
    containerTop = boxContainer.value?.offsetTop || 0
    containerBottom = (boxContainer.value?.offsetHeight || 500) - 500
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  return {
    isBorT,
  }
}
