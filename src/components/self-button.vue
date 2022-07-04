<script setup lang='ts'>
import type { Type } from 'naive-ui/es/button/src/interface'
const props = defineProps<{
  style?: Object
  class?: string
  type?: Type
  color?: string
}>()
// interface BtnType {
// }
// TODO 颜色取整了？
const btnType = {
  primary: 'background:linear-gradient(225deg, rgba(151,202,255,1) 0%, rgba(62,156,255,1) 100%)',
  default: 'border:1px solid rgba(0,0,0,0.2)',
  middle: '',
}
const textType = {
  primary: 'color:#fff;font:500 28px OPPOSans',
  default: 'color: rgba(29,33,41,1);font: 500 28px "OPPOSans";',
  middle: '',
}
</script>

<template>
  <div
    class="btn-container" :class="[props.class]"
    :style="[btnType[props.type || 'default'], props.style]"
    w-240px h-56px cursor-pointer
    flex justify-center items-center
    border="~ rounded-5px 0"
  >
    <span :style="textType[props.type || 'default']">
      <slot />
    </span>
  </div>
</template>

<style scoped lang='scss'>
.btn-container:hover{
  box-shadow: 1px 1px 5px rgba(151, 151, 151, 0.2);
}
</style>
