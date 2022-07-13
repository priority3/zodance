<script setup lang='ts'>
import banner from './components/banner/index.vue'
import DailyoperateSection from './components/dailyoperate-section/index.vue'
import FisstabSection from './components/fisstab-section/index.vue'
import AlloperateSection from './components/alloperate-section/index.vue'
import SelfoperateSection from './components/selfoperate-section/index.vue'
import ActiviSection from './components/activi-section/index.vue'
import FootSection from './components/foot-section/index.vue'
import { setupHandleScroll } from '@/hooks/useAnimation'
setupHandleScroll()
</script>

<template>
  <base-header />
  <banner />
  <dailyoperate-section />
  <selfoperate-section />
  <fisstab-section />
  <alloperate-section />
  <activi-section />
  <foot-section />
  <base-footer />
</template>

<style scoped lang='scss'>

</style>
