<script setup lang='ts'>
import type { StrategyInfo } from '../type'
import strategyItem from './strategy-item.vue'
const info: StrategyInfo[] = [{
  title: '销售数字化',
  content: '.首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
}, {
  title: '销售数字化',
  content: '.首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
}, {
  title: '销售数字化',
  content: '.首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
}]
const title = '三步走战略，加速企业向数智化转变'
</script>

<template>
  <div flex="~ col" items-center>
    <h1>{{ title }}</h1>
    <div flex>
      <template v-for="ind in 3" :key="ind">
        <strategy-item :info="info[ind - 1]" />
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
