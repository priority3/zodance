<script setup lang='ts'>
import { ref } from 'vue'
import type { StrategyInfo } from '../../type'
import strategyItem from './strategy-item.vue'
import { useAnimation } from '@/hooks/useAnimation'
import stragybgc from '@/assets/svg/home-stragybgc.svg'
// import stragybgc from '@/assets/home/stragybgc.png'
const info: StrategyInfo[] = [{
  title: '销售数字化',
  content: '首先，以销售环节为突破口，完成企业用户增长、运营、转化的体系构建，协助企业获得稳定现金流。',
  arrayFun: ['渠道建设', '用户增长', '品牌建设', '用户运营'],
  icon: '1',
  left: 80,
  top: 303,
}, {
  title: '经营数字化',
  content: '其次，借助销售数字化的势能，打通企业采购、仓储、物流、生产和办公等其他经营环节，帮助企业低成本实现全面数字化。',
  arrayFun: ['采购仓储', '生产制造', '物流配送', '办公财务'],
  icon: '2',
  left: 600,
  top: 147,
}, {
  title: '经营智能化',
  content: '最后，在数字化的基础上，挖掘利用全量企业经营数据，打造企业数据驱动经营能力，助力企业成为面向未来的智能商业体。',
  arrayFun: ['数据采集', '数据分析', '数据整合', '数据洞察'],
  icon: '3',
  left: 1120,
  top: 0,
}]
const title = '三步走战略'
const subTitle = '中小企业数字化的最优路径'
const cards = ref(null)
useAnimation(cards)
</script>

<template>
  <div class="section-box" relative h-870px border-box w-full>
    <div relative w-1440px mx-auto my-0 pt-80px h-full of-hidden>
      <div class="section-title " fcc>
        <h1>{{ title }}</h1>
        <h2 mt-10px>
          {{ subTitle }}
        </h2>
      </div>
      <div
        v-for="ind in 3" :key="ind" ref="cards"
        class="show-init" :class="(ind - 1) ? `show-delay-${ind - 1}` : ''"
      >
        <strategy-item :info="info[ind - 1]" />
      </div>
      <div class="img-box">
        <self-image
          :src="stragybgc"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.section-box{
  .section-title{
    h1{
      font: 700 64px "OPPOSans";
      background-image:-webkit-linear-gradient(180deg,#588ECC,#2B65A5);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip: text;
    }
    h2{
      color: rgba(134,144,156,1);
      font: 500 24px "OPPOSans";
    }
  }
  .img-box {
    position: absolute;
    top:450px;
    right:-1500px;
    animation: rotation 80s linear infinite;
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
  }

}
</style>
