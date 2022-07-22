<script setup lang='ts'>
import allDiff from './components/alldiff/index.vue'
import priceDiff from './components/pricediff/index.vue'

// import { getTestApi } from '@/api'
const info = {
  title: '专业的数字化团队服务',
  subTitle: '一个普通员工的薪资就能拥有整个数字化运营团队',
}
// getTestApi().then((res) => {
//   console.log(res)
// })
</script>

<template>
  <base-header />
  <div class="price-container">
    <div
      class="price-title-box"
      flex="~ col" justify-center items-center
      mt-48px
    >
      <h1 m0 class="title-linear">
        {{ info.title }}
      </h1>
      <h2 m0>
        {{ info.subTitle }}
      </h2>
    </div>

    <div class="price-diff-box" mt-58px>
      <price-diff />
    </div>
    <div class="price-all-box">
      <all-diff />
    </div>
  </div>

  <base-footer mt-100px />
</template>

<style scoped lang='scss'>
.price-container{
  margin: 0 auto;
  h1{
    font: 400 80px "YouSheBiaoTiHei";
  }
  h2{
    color: rgba(134,144,156,1);
    font: 400 30px "PingFang SC";
  }
  .price-all-box{
    width: 1080px;
    margin: 0 auto;
  }

}
</style>
