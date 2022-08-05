<script setup lang='ts'>
import sectionCome from './components/section-come/index.vue'
import banner from './components/banner/index.vue'
import sectionAbility from './components/section-ability/index.vue'
import sectionAdvance from './components/section-advance/index.vue'
import { setupHandleScroll } from '@/hooks/useAnimation'
setupHandleScroll()
</script>

<template>
  <div min-w-1440px mx-auto>
    <base-header />
    <banner />
    <section-come />
    <section-ability />
    <section-advance />
    <base-footer mt-36px />
  </div>
</template>

<style scoped lang='scss'>
</style>
