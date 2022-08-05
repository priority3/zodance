<script setup lang="ts">
import bannerSection from './components/banner/index.vue'
import headerSection from './components/header/index.vue'
import togeSection from './components/toge-section/index.vue'
import tabSection from './components/tab-section/index.vue'
import needSection from './components/need-section/index.vue'
</script>

<template>
  <header-section />
  <div pb-44px md="pt-60px pb-0" mx-auto>
    <banner-section />
    <toge-section />
    <tab-section />
    <need-section />
  </div>
  <div block md:hidden w-full h-60px bg-blue class="box" />
</template>

<style lang="scss" scoped>
.box{
  position: fixed;
  bottom: 0;
}
</style>
