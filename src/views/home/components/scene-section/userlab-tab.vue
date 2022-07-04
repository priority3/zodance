<script setup lang='ts'>
import common from './common.vue'
const info = [{
  url: '/src/assets/home/tab-user1.png',
  title: '精准发送',
}, {
  url: '/src/assets/home/tab-user2.png',
  title: '精准发送',
}, {
  url: '/src/assets/home/tab-user3.png',
  title: '精准发送',
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
