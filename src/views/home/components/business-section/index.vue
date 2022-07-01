<script setup lang='ts'>
import { ref } from 'vue'
import { NImage } from 'naive-ui'
const title = ref('先进企业的选择')
</script>

<template>
  <div class="business-container">
    <h1 m0>
      {{ title }}
    </h1>
    <n-image
      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
    />
  </div>
</template>

<style scoped lang='scss'>
.business-container{
  width: 80%;
  height: 840px;
  text-align: center;
  h1{
    color: rgba(29,33,41,1);
    font: 500 40px "PingFang SC";
    margin-top: 155px;
  }
}
</style>
