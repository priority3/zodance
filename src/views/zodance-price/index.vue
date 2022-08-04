<script setup lang='ts'>
import { ref } from 'vue'
import allDiff from './components/alldiff/index.vue'
import priceDiff from './components/pricediff/index.vue'
import { setupHandleScroll } from './components/pricediff/_utils'
import priceLogo from '@/assets/price/price-logo.png'
const info = {
  title: '专业的数字化团队服务',
  subTitle: '一个普通员工的薪资就能拥有整个数字化运营团队',
}
const headerContainer = ref<HTMLElement | null>(null)
const priceContainer = ref<HTMLElement | null>(null)
setupHandleScroll(priceContainer, headerContainer)
</script>

<template>
  <div ref="headerContainer">
    <base-header />
  </div>
  <div class="price-container">
    <div
      class="price-title-box"
      fcc w-full pb-58px pt-120px
      relative
    >
      <self-image
        :src="priceLogo"
        absolute left-60px
      />
      <h1 m0 class="title-linear">
        {{ info.title }}
      </h1>
      <h2 m0>
        {{ info.subTitle }}
      </h2>
    </div>

    <div ref="priceContainer" class="price-diff-box">
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
  width: 1440px;
  .price-title-box {
    &::after{
      content: "";
      position: absolute;
      right: 19px;
      top: 180px;
      width: 294px;
      height: 294px;
      border-radius: 100%;
      background: linear-gradient(201.1deg, rgba(237,251,255,1) 0%, rgba(235,250,255,1) 100%);
    }
  }
  h1{
    font: 400 68px "PingFang SC";
    background-image:-webkit-linear-gradient(right,#7CBCFF,#005EBF);
    background-clip:text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
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
