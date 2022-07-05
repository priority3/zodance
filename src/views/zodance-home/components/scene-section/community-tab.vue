<script setup lang='ts'>
import common from './common.vue'
const info = [{
  url: '/src/assets/home/tab-community1.png',
  title: '知识分享',
}, {
  url: '/src/assets/home/tab-community2.png',
  title: '福利活动',
}, {
  url: '/src/assets/home/tab-community3.png',
  title: '产品贴士',
}, {
  url: '/src/assets/home/tab-community4.png',
  title: '日常促活',
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
