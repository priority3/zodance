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
</template>

<style scoped lang='scss'>

</style>
