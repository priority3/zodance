<script  lang='ts' setup>
import strategySection from './components/strategy-section/index.vue'
import businessSection from './components/business-section/index.vue'
import xiaolingSection from './components/xiaoling-section/index.vue'
import digitSection from './components/digit-section/index.vue'
import allcoverSection from './components/allcover-section/index.vue'
import baseCarousel from './components/base-carousel.vue'
import footerSection from './components/footer-section/index.vue'
import { setupHandleScroll } from '@/hooks/useAnimation'
setupHandleScroll()
</script>

<template>
  <base-header />
  <base-carousel />
  <div flex justify-center flex-wrap>
    <strategy-section />
    <xiaoling-section />
    <digit-section />
    <allcover-section />
    <business-section />
    <footer-section />
  </div>
  <base-footer />
</template>

<style scoped lang='scss'>
</style>
