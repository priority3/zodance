<script setup lang='ts'>
import sectionCome from './components/section-come/index.vue'
import banner from './components/banner/index.vue'
import sectionAbility from './components/section-ability/index.vue'
import sectionAdvance from './components/section-advance/index.vue'
</script>

<template>
  <div>
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
