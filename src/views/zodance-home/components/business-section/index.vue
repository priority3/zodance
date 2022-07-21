<script setup lang='ts'>
import { NImage } from 'naive-ui'
import businessSection from '@/assets/home/business-section.png'
const info = {
  title: '先进企业的选择',
  src: businessSection,
}
</script>

<template>
  <div class="business-container">
    <h1 m0 mb77px>
      {{ info.title }}
    </h1>
    <n-image
      preview-disabled
      :src="info.src"
      width="870"
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
