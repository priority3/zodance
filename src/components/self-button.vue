<script setup lang='ts'>
import type { Type } from 'naive-ui/es/button/src/interface'
const props = defineProps<{
  style?: Object
  class?: string
  type?: Type
  color?: string
  textStyle?: Object
}>()
// interface BtnType {
// }
// TODO 颜色取整了？
const btnType = {
  primary: 'background:linear-gradient(225deg, rgba(151,202,255,1) 0%, rgba(62,156,255,1) 100%)',
  default: 'border:1px solid rgba(0,0,0,.2)',
  middle: 'border: 1px solid rgba(143, 199, 255, 1)',
  small: 'background: rgba(60,132,205,1)',
  info: 'border:1px solid rgba(0,0,0,.2)',
}
const textType = {
  primary: 'color:#fff;font:500 28px OPPOSans',
  default: 'color:rgba(29,33,41,1);font: 500 28px "OPPOSans";',
  middle: 'color:rgba(60,132,205,1);font: 500 24px "PingFang SC";',
  small: 'color:rgba(255,255,255,1);font: 400 12px "PingFang SC";',
  info: 'font:400 16px "PingFang SC',
}
</script>

<template>
  <button
    w-240px h-56px cursor-pointer
    flex justify-center items-center
    border="~  0"

    class="btn-container" :class="[props.class]"
    :style="[btnType[props.type || 'default'], props.style]"
  >
    <span :style="[textType[props.type || 'default'], props.textStyle]">
      <slot>
        免费咨询
      </slot>
    </span>
  </button>
</template>

<style scoped lang='scss'>
.btn-container:hover{
  box-shadow: 1px 1px 5px rgba(151, 151, 151, 0.2);
}
</style>
