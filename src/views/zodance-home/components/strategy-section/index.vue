<script setup lang='ts'>
import type { StrategyInfo } from '../../type'
import strategyItem from './strategy-item.vue'
const info: StrategyInfo[] = [{
  title: '销售数字化',
  content: '首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
  icon: '1',
  mt: '50px',
}, {
  title: '经营数字化',
  content: '其次，借助销售数字化的势能，打通企业采购、仓储、物流、生产和办公等其他经营环节，帮助企业低成本实现全面数字化。',
  arrayFun: ['采购渠道', '生产制造', '物流配送', '办公财务'],
  icon: '2',
  mt: '220px',
}, {
  title: '经营智能化',
  content: '最后，在数字化的基础上，挖掘利用全量企业经营数据，打造企业数据驱动经营能力，助力企业成为面向未来的智能商业体。',
  arrayFun: ['数据采集', '数据分析', '数据整合', '数据洞察'],
  icon: '3',
  mt: '424px',
}]
const title = '三步走战略'
const subTitle = '中小企业数字化的最优路径'
</script>

<template>
  <div class="section-box" h-840px relative w-full>
    <div class="section-title title-linear" absolute right-60px top-60px text-right>
      <h1>{{ title }}</h1>
      <h2 mt-10px>
        {{ subTitle }}
      </h2>
    </div>
    <div absolute bottom-0>
      <n-image
        preview-disabled
        src="/src/assets/home/strategy-bgc.png"
      />
    </div>
    <div
      h-full class="w-4/5" mx-auto my-0
      flex items-start justify-start gap-115px
    >
      <template v-for="ind in 3" :key="ind">
        <strategy-item :info="info[ind - 1]" />
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.section-box{
  .section-title{
    h1{
      font: 700 56px "PingFang SC";
    }
    h2{
      font:700 36px "PingFang SC";
    }
  }

}
</style>
