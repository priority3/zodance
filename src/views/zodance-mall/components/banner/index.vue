<script setup lang='ts'>
import { NImage } from 'naive-ui'
const info = {
  title: '零一商城',
  subTitle: '快速拥有适合自己的小程序商城，获取流量销量双增长',
  bannerFun: [{
    icon: '',
    text: '快速开发',
  }, {
    icon: '',
    text: '流量风口',
  }, {
    icon: '',
    text: '极佳体验',
  }, {
    icon: '',
    text: '超强粘性',
  }],
}
</script>

<template>
  <div class="banner-container" relative>
    <div class="banner-info-box">
      <div class="info-title">
        <h1 mt127px>
          {{ info?.title || '' }}
        </h1>
        <h2 mt32px>
          {{ info?.subTitle || '' }}
        </h2>
      </div>
      <div class="banner-fun-box" mt56px>
        <template v-for="item in info.bannerFun">
          {{ item.text }}
        </template>
      </div>
      <self-button
        type="middle"
        style="margin-top: 42px;"
      >
        立即咨询
      </self-button>
      <div absolute right-0 top-30>
        <n-image
          preview-disabled
          lazy
          src="/src/assets/mall/mall-banner.png"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.banner-container{
  width: 100%;
  height: 601px;
  background: linear-gradient(180deg, rgba(235,245,255,1) 0%, rgba(235,241,255,0) 100%);
  overflow: hidden;
  .banner-info-box{
    width: 80%;
    margin: 0 auto;
    h1{
      color: rgba(29,33,41,1);
      font: 500 52px "PingFang SC";
    }
    h2{
      color: rgba(61,61,61,1);
      font: 400 20px "PingFang SC";
    }
    .banner-fun-box{
      color: rgba(61,61,61,1);
      font: 300 20px "PingFang SC";
    }
  }

}
</style>
