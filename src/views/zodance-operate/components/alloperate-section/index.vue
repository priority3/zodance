<script setup lang='ts'>
// import collapse from './collapse.vue'
import { ref } from 'vue'
import commonTitle from '../common-title.vue'
import collapse from './collapse.vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
const info = [{
  title: '专人专项跟进，保障运营质量',
  icon: 'allcard1',
}, {
  title: '各环节数据统计，精准掌握用户动态',
  icon: 'allcard2',
}, {
  title: '全域自动化工具部署，充分节省人力',
  icon: 'allcard3',
}]
const title = '多触点运营，占据客户心智'
const cards = ref(null)
useAnimation(cards, 'fade')
</script>

<template>
  <div
    flex="~ col" justify-center items-center
    class="alloperate-container" mt-60px w-full
  >
    <common-title :title="title" />
    <div
      class="w-3/5 mx-auto my-0"
    >
      <collapse />
    </div>
    <div class="vertical-line" w-2px h-90px />
    <div flex gap-100px mt-20px ml-40px>
      <div
        v-for="({ title, icon }) in info" :key="title"
        ref="cards" class="fade-init"
      >
        <card
          :title="title" :icon="icon"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.alloperate-container{
  h1{
    color: rgba(12,140,250,1);
    font: 500 38px "PingFang SC";
  }
}
</style>
