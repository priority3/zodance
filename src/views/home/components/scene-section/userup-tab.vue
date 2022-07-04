<script setup lang='ts'>
import common from './common.vue'
const info = [{
  url: '/src/assets/home/tab-userup1.png',
  title: '短信召回',
}, {
  url: '/src/assets/home/tab-userup2.png',
  title: '裂变获客',
}, {
  url: '/src/assets/home/tab-userup3.png',
  title: '线下导流活动',
}, {
  url: '/src/assets/home/tab-userup4.png',
  title: '公域投放',
}]
</script>

<template>
  <div flex justify-around>
    <template v-for="item in info" :key="item.url">
      <common
        :title="item.title"
        :src="item.url"
      />
    </template>
  </div>
</template>

<style scoped lang='scss'>
</style>
