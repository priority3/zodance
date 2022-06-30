<script setup lang='ts'>
import type { StrategyInfo } from '../type'
const { info } = defineProps<{
  info: StrategyInfo
}>()
</script>

<template>
  <div class="item-box">
    <div>
      <h1>{{ info.title }}</h1>
    </div>
    <p mt38px>
      {{ info.content }}
    </p>
    <ul flex justify-between flex-wrap p0 pl15px mt32px>
      <li v-for="item in info.arrayFun" :key="item" mt13px>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang='scss'>
.item-box{
  box-sizing: border-box;
  width: 25%;
  height: 440px;
  border-radius: 12px;
  background: rgba(249,252,255,1);
  box-shadow: 0 4px 20px 0 rgba(86,140,196,0.2);
  margin-top: 76px;
  padding:50px 49px 81px 48px;
  h1{
    margin:0;
    color: rgba(61,61,61,1);
    font: 500 32px  "PingFang SC";
    display: block;
    width: max-content;
    margin: 0 auto;
  }
  p{
    color: rgba(61,61,61,1);
    font: 300 20px "PingFang SC";
    // height: 140px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  li{
    font:400 1.1rem "PingFang SC";
    width: 35%;
    list-style: none;
    position: relative;
    height: 25px;
    line-height: 25px;
    &::after{
      content:'';
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 100%;
      background-color: #000;
      position:absolute;
      left: -15px;
      top: 7.5px;
    }
  }
}
</style>
