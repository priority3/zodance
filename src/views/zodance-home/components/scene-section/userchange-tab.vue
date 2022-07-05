<script setup lang='ts'>
import common from './common.vue'
const info = [{
  url: '/src/assets/home/tab-userchange1.png',
  title: '限时秒杀',
}, {
  url: '/src/assets/home/tab-userchange2.png',
  title: '优惠劵',
}, {
  url: '/src/assets/home/tab-userchange3.png',
  title: '朋友圈种草',
}, {
  url: '/src/assets/home/tab-userchange4.png',
  title: '直播运营',
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
