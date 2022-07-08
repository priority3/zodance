<script setup lang='ts'>
import type { StrategyInfo } from '../../type'
const { info } = defineProps<{
  info: StrategyInfo
}>()
</script>

<template>
  <div class="item-box">
    <div flex items-center justify-center gap-5 class="box-title">
      <div :class="info.icon" class="icon-font" text-2xl mt2 />
      <h1>{{ info.title }}</h1>
    </div>
    <div class="box-content">
      <p mt38px>
        {{ info.content }}
      </p>
      <ul
        flex justify-between flex-wrap items-center gap-10px
        pl-10px
      >
        <li v-for="item in info.arrayFun" :key="item" mt13px>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.item-box{
  box-sizing: border-box;
  width: 320px;
  min-width: 320px;
  border-radius: 12px;
  background: rgba(249,252,255,1);
  box-shadow: 0 4px 20px 0 rgba(86,140,196,0.2);
  margin-top: 76px;
  padding-bottom:78px ;
  .box-title{
    width: max-content;
    margin: 0 auto;
    margin-top: 40px;
    h1{
      margin: 0;
      color: rgba(61,61,61,1);
      font: 500 2rem  "PingFang SC";
      width: 100%;
      min-width: 160px;
    }
  }
  .box-content{
    margin: 0 40px;
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
      font:400 20px "PingFang SC";
      width: 35%;
      min-width: 100px;
      list-style: none;
      position: relative;
      height: 25px;
      line-height: 25px;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: center;
      &::after{
        content:'';
        display: block;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: #000;
        position:absolute;
        left: -10px;
        top: 8px;
      }
    }
  }

}
</style>
