<script setup lang="ts">
const { width, height, src, className } = defineProps<{
  height?: string
  width?: string
  src: string
  className?: string
}>()
</script>

<template>
  <div
    :style="{
      width,
      height,
    }"
    :class="className"
  >
    <n-image
      preview-disabled
      :src="src"
    />
  </div>
</template>
