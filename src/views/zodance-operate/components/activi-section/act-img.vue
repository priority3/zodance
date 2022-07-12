<script setup lang='ts'>
const { src } = defineProps<{
  src: string
  top?: number
  left?: number
  right?: number
  bottom?: number
}>()
</script>

<template>
  <div
    absolute
    :style="{
      top: `${top}px`,
      left: `${left}px`,
      right: `${right}px`,
      bottom: `${bottom}px`,
    }"
  >
    <n-image
      preview-disabled
      :src="src"
    />
  </div>
</template>

<style scoped lang='scss'>
</style>
