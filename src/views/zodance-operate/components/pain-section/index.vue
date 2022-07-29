<script setup lang='ts'>
import { ref } from 'vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
const info = [{
  icon: 'pain-icon1',
  title: '缺人才',
  desc: '缺少运营人才，不懂搭建团队',
}, {
  icon: 'pain-icon2',
  title: '缺工具',
  desc: '裂变、转化、管理等缺少高效工具',
}, {
  icon: 'pain-icon3',
  title: '缺方法',
  desc: '缺少私域方法论，运营无法落地',
}, {
  icon: 'pain-icon4',
  title: '拓客难',
  desc: '私域获客难，获客成本高',
}, {
  icon: 'pain-icon5',
  title: '运营难',
  desc: '运营难度大，转化效果差',
}, {
  icon: 'pain-icon6',
  title: '持续难',
  desc: '缺乏数据支撑，不能持续迭代',
}]

//
const cards = ref(null)
useAnimation(cards)
</script>

<template>
  <div
    class="dailyoperate-container"
    flex="~ col" items-center
    mx-auto my-0 mt-40px h-560px
  >
    <h1>
      私域运营的痛点
    </h1>
    <div
      flex flex-wrap justify-center gap-32px
      mt-60px w-1250px items-start
    >
      <div
        v-for="({ icon, title, desc }, index) in info" :key="title"
        ref="cards" class="show-init" :class="[`show-delay-${(index % 3) + 1}`]"
      >
        <card
          :icon="icon" :title="title"
          :desc="desc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.dailyoperate-container{
  h1{
    color: rgba(29,33,41,1);
    font: 400 52px "PingFang SC";
  }
}
</style>
