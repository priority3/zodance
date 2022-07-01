<script setup lang='ts'>
import { ref } from 'vue'
import serviceCard from './service-card.vue'
const title = ref('不只是系统，全流程服务为你持续赋能')
const info = [{
  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  infoHeader: '经营选择',
  content: '行业市场及目标人群分析，深挖需求痛点，定制解决方案。',
}, {
  src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
  infoHeader: '经营选择',
  content: '行业市场及目标人群分析，深挖需求痛点，定制解决方案。',
}]
</script>

<template>
  <div w-full class="service-container">
    <div class="service-box">
      <h1 m0 mt100px>
        {{ title }}
      </h1>
      <div flex justify-around mt90px>
        <template v-for="item in info" :key="item.url">
          <service-card
            :src="item.src"
            :info-header="item.infoHeader"
            :content="item.content"
          />
        </template>
      </div>
      <self-button
        type="primary"
        :style="{
          'min-width': '224px',
          'width': '20rem',
          'margin': '0 auto',
          'margin-top': '104px',
        }"
      >
        立即咨询
      </self-button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.service-container{
  width: 100%;
  background-color: rgba(249,252,255,1);
  height: 840px;
  .service-box{
    width: 80%;
    text-align: center;
    margin: 0 auto;
    h1{
      color: rgba(29,33,41,1);
      font: 500 36px "PingFang SC";
    }
  }

}
</style>
