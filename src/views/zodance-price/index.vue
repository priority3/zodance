<script setup lang='ts'>
import priceDiff from './components/pricediff/index.vue'
import { getTestApi } from '@/api'
const info = {
  title: '专业的数字化团队服务',
  subTitle: '服务简介语，例如：一个普通员工的薪资就能拥有',
}
getTestApi().then((res) => {
  console.log(res)
})
</script>

<template>
  <div class="price-container">
    <div
      class="price-title-box"
      flex="~ col" justify-center items-center
      mt-48px
    >
      <h1 m0>
        {{ info.title }}
      </h1>
      <h2 m0>
        {{ info.subTitle }}
      </h2>
    </div>

    <div class="price-diff-box" mt-58px>
      <price-diff />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.price-container{
  width: 90%;
  margin: 0 auto;
  h1{
    font: 400 80px "YouSheBiaoTiHei";
  }
  h2{
    color: rgba(134,144,156,1);
    font: 400 30px "PingFang SC";
  }
}
</style>
