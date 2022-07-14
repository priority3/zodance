<script setup lang='ts'>
import { ref } from 'vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
import xiaolingSection from '@/assets/home/xiaoling-section.png'
const leftInfo = {
  title: '小零同学',
  subTitle: '帮助企业低成本实现销售数字化',
  subscribe: '构建企业增长、运营、转化于一体的私域运营体系',
  src: xiaolingSection,
}
const cardInfo = [{
  title: '增长',
  contentInfo: [{
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }],
}, {
  title: '增长',
  contentInfo: [{
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }],
}, {
  title: '增长',
  contentInfo: [{
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }],
}]
function getWidth(num: number) {
  let res = ''
  switch (num) {
    case 0:{
      res = '670px'
      break
    }
    case 1:{
      res = '710px'
      break
    }
    case 2:{
      res = '750px'
      break
    }
    default:
      break
  }
  return res
}
const cards = ref(null)
useAnimation(cards)
</script>

<template>
  <div
    h-840px w-full
    flex gap-174px items-center justify-between
    class="xiaoling-container"
  >
    <div
      ml-69px mt-104px
    >
      <div
        flex="~ col" gap-10px class="title-box"
      >
        <h1
          class="title-linear"
        >
          {{ leftInfo.title }}
        </h1>
        <h2
          class="title-linear"
        >
          {{ leftInfo.subTitle }}
        </h2>
        <h3>{{ leftInfo.subscribe }}</h3>
      </div>
      <div mt-114px>
        <n-image
          preview-disabled
          :src="leftInfo.src"
        />
      </div>
    </div>
    <div
      class="card-box"
      flex="~ col" items-end justify-center
    >
      <div
        v-for="({ title, contentInfo }, index) in cardInfo" :key="title"
        ref="cards" class="show-init"
      >
        <card
          :title="title"
          :content-info="contentInfo"
          :width="getWidth(index)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.title-box{
  h1{
    font: 700 56px "PingFang SC";
  }
  h2{
    font: 700 36px "PingFang SC";
  }
  h3{
    color: rgba(134,144,156,1);
    font: 400 24px "Noto Sans SC";
  }
}
.card-box{
  position: relative;
  &::after{
    content: "";
    position:absolute;
    left: -36px;
    top: -86px;
    border-radius: 100%;
    width: 537px;
    height: 537px;
    background: linear-gradient(155.7deg, rgba(238,251,255,1) 0%, rgba(218,246,255,1) 100%);
    z-index: -100;
  }
}
</style>
