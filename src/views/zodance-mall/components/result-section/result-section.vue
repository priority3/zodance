<script setup lang='ts'>
import { NImage } from 'naive-ui'
const info = {
  title: '做小程序商城的6大理由',
  leftRes: [{
    contTitle: '开发门槛低',
    contPara: '小程序开发投入少周期段、速度快、推广易',
  }, {
    contTitle: '各大平台亿万流量',
    contPara: '微信/支付宝/百度等平台官方 扶持聚焦消费者，为小程序导流更容易',
  }, {
    contTitle: '购物体验好',
    contPara: '小程序无需安装与卸载打开即用，用户即走',
  }],
  rightRes: [],
}
</script>

<template>
  <div class="result-container">
    <div class="result-box" flex="~ col" items-center>
      <h1>
        {{ info?.title }}
      </h1>
      <div class="result-content" flex justify-center mt63px gap-39px>
        <div class="content-left" flex="~ col" gap-70px>
          <template v-for="item in info.leftRes" :key="item.conTitle">
            <div text-right>
              <!-- TODO 布局 段落换行 -->
              <h3>{{ item.contTitle }}</h3>
              <h4>{{ item.contPara }}</h4>
            </div>
          </template>
        </div>
        <n-image
          src="/src/assets/mall/result-section.png"
          width="414"
          preview-disabled
        />
        <div class="content-left" flex="~ col" gap-70px>
          <template v-for="item in info.leftRes" :key="item.conTitle">
            <div text-left>
              <h3>{{ item.contTitle }}</h3>
              <h4>{{ item.contPara }}</h4>
            </div>
          </template>
        </div>
      </div>
      <self-button
        type="primary"
        style="margin-top: 48px;width:224px;height:50px"
      >
        立即咨询
      </self-button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.result-container{
  width: 80%;
  height: 601px;
  margin: 0 auto;
  background: #fff;
  .result-box{
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  h1{
    color: rgba(61,61,61,1);
    font: 500 36px "PingFang SC";
  }
  .result-content{
    h3{
      color: rgba(29,33,41,1);
      font: 500 20px "PingFang SC";
    }
    h4{
      color: rgba(134,144,156,1);
      font: 400 16px "PingFang SC";
      height: 44px;
    }
  }

}
</style>
