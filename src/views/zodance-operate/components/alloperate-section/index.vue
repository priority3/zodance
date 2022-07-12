<script setup lang='ts'>
// import collapse from './collapse.vue'
import commonTitle from '../common-title.vue'
import collapse from './collapse.vue'
import card from './card.vue'
const info = [{
  title: '专人专项跟进，保障运营质量',
  icon: 'allcard1',
  desc: '这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介',
}, {
  title: '各环节数据统计，精准掌握用户动态',
  icon: 'allcard2',
  desc: '这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介',
}, {
  title: '全域自动化工具部署，充分节省人力',
  icon: 'allcard3',
  desc: '这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介这是一段简介',
}]
const title = '全局操盘运营，培养忠实客户群'
</script>

<template>
  <div flex="~ col" justify-center items-center class="alloperate-container" mt-60px>
    <common-title :title="title" />
    <div
      class="w-3/5 mx-auto my-0"
    >
      <collapse />
    </div>
    <div class="vertical-line" w-2px h-90px />
    <div flex gap-100px mt-20px>
      <card
        v-for="{ title, icon, desc } in info"
        :key="title" :title="title" :icon="icon" :desc="desc"
      />
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
