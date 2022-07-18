<script setup lang='ts'>
import { ref } from 'vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
const info = [{
  icon: 'dailyoperate1',
  title: '低成本获客',
  desc: '建立企业全域导流路径，定制化开发裂变工具，实现企业私域池客户数从0到1，从1到多的低成本获客',
}, {
  icon: 'dailyoperate3',
  title: '精细化运营',
  desc: '通过scrm系统对用户进行分层，建立3级社群运营体系，朋友圈内容定时，定量，定人发送，实现企业千人千面的客户',
}, {
  icon: 'dailyoperate2',
  title: '高效率转化',
  desc: '根据多触点，多场景结合企业自有特色，策划专属转化活动，去激发客户消费欲望',
}, {
  icon: 'dailyoperate4',
  title: '持续性复购',
  desc: '通过会员权益体系，积分体系，专属福利活动等，提升客户在企业整个生命周期内的购买频次',
}]

//
const cards = ref(null)
useAnimation(cards)
</script>

<template>
  <div
    class="dailyoperate-container w-9/10"
    flex="~ col" justify-center items-center
    mx-auto my-0 mt-48px pb-96px
  >
    <h1>
      日常经营，你可能会需要这些
    </h1>
    <p mt-6px>
      私域运营已经成为企业经营的标配
    </p>
    <div
      flex flex-wrap justify-center gap-24px
      mt-60px
    >
      <div
        v-for="({ icon, title, desc }) in info" :key="title"
        ref="cards" w-600px class="show-init"
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
  p{
    color: rgba(167,167,167,1);
    font: 400 24px "PingFang SC";
  }
}
</style>
