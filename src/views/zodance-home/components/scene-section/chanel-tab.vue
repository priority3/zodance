<script setup lang='ts'>
import common from './common.vue'
const info = [{
  url: '/src/assets/home/tab-chanel1.png',
  title: '公众号',
}, {
  url: '/src/assets/home/tab-chanel2.png',
  title: '视频号',
}, {
  url: '/src/assets/home/tab-chanel3.png',
  title: '小程序',
}, {
  url: '/src/assets/home/tab-chanel4.png',
  title: '企业微信',
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
