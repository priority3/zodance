<script setup lang='ts'>
import banner from './components/banner/index.vue'
import PainSection from './components/pain-section/index.vue'
import FisstabSection from './components/fisstab-section/index.vue'
import SelfoperateSection from './components/selfoperate-section/index.vue'
import ChoseSection from './components/chose-section/index.vue'
// import ActiviSection from './components/activi-section/index.vue'
import FootSection from './components/foot-section/index.vue'
import ServiceSection from './components/service-section/index.vue'
import { setupHandleScroll } from '@/hooks/useAnimation'
setupHandleScroll()
</script>

<template>
  <div min-w-1440px mx-auto>
    <base-header />
    <banner />
    <pain-section />
    <fisstab-section />
    <selfoperate-section />
    <chose-section />
    <service-section />
    <!-- <activi-section /> -->
    <foot-section />
    <base-footer />
  </div>
</template>

<style scoped lang='scss'>
@font-face {
  font-family: "YouSheBiaoTiHei";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  // unicode-range: U+000-5FF;
  src: url('../../assets/font/UISDC-BiaoTiHei.ttf')  format('truetype'),;
}
</style>
