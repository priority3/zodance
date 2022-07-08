<script setup lang='ts'>
import type { StrategyInfo } from '../../type'
import strategyItem from './strategy-item.vue'
const info: StrategyInfo[] = [{
  title: '销售数字化',
  content: '首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
  icon: 'i-carbon-chart-column-target',
}, {
  title: '经营数字化',
  content: '其次，借助销售数字化的势能，打通企业采购、仓储、物流、生产和办公等其他经营环节，帮助企业低成本实现全面数字化。',
  arrayFun: ['采购渠道', '生产制造', '物流配送', '办公财务'],
  icon: 'i-carbon-thumbnail-preview',
}, {
  title: '经营智能化',
  content: '最后，在数字化的基础上，挖掘利用全量企业经营数据，打造企业数据驱动经营能力，助力企业成为面向未来的智能商业体。',
  arrayFun: ['数据采集', '数据分析', '数据整合', '数据洞察'],
  icon: 'i-carbon-data-1',
}]
const title = '三步走战略，加速企业向数智化转变'
</script>

<template>
  <div flex="~ col" items-center class="section-box" h-840px>
    <h1>{{ title }}</h1>
    <div flex justify-around w-full>
      <template v-for="ind in 3" :key="ind">
        <strategy-item :info="info[ind - 1]" />
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.section-box{
  width: 80%;
  padding-top: 84px;
  h1{
    margin: 0;
    color: rgba(29,33,41,1);
    font:500 44px "PingFang SC";
  }
}
</style>
