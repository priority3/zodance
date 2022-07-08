<script setup lang="ts">
/**
   * 名称：SvgIcon
   * @param name String required
   * @param color String
   * 依赖：src/plugins/svgBuilder.js 需要在 vite中配置
   * 使用方式：
   * 在 template 中使用 <svg-icon name="bug"/>
   */
import { computed } from 'vue'
interface Props {
  name: string
  color?: string
  className?: string
}
/* data */
const props = defineProps<Props>()

// 获取props defineProps<{ msg: string }>()
const iconName = computed((): string => `#icon-${props.name}`)
const svgClass = computed((): string => {
  if (props.className)
    return `svg-icon icon-${props.name}`

  else
    return 'svg-icon'
})
</script>

<template>
  <svg :class="svgClass" aria-hidden="true" :style="{ color: props.color }" v-on="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
