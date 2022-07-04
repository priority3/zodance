<script setup lang='ts'>
const info = defineProps<{
  title?: string
  subTitle?: string
  bannerFun?: Array<any>
}>()
</script>

<template>
  <div class="banner-container" relative>
    <div>
      <h1>{{ info?.title || '' }}</h1>
      <h2>{{ info?.subTitle || '' }}</h2>
    </div>
    <div class="banner-fun-box">
      <template v-for="item in bannerFun">
        {{ item }}
      </template>
    </div>
    <self-button />
  </div>
</template>

<style scoped lang='scss'>
</style>
