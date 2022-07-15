import type { Ref } from 'vue'
import { computed } from 'vue'
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
    let res = type
    if (isTop.value && type !== 'plus')
      res = `运营${res}`
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
  return {
    getselfBtnStyle,
    getVersionType,
    getTitleBoxWidth,
    getCommonTitleTop,
    getTitlecolor,
    getinfoPara,
    getTitlePara,
  }
}
