<script setup lang="ts">
const { width, height, src } = defineProps<{
  height?: string
  width?: string
  src: string
}>()
</script>

<template>
  <div
    :style="{
      width,
      height,
    }"
  >
    <n-image
      preview-disabled
      :src="src"
    />
  </div>
</template>
