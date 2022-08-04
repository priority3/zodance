<script setup lang='ts'>
import type { StrategyInfo } from '../../type'
const { info } = defineProps<{
  info: StrategyInfo
}>()
</script>

<template>
  <div
    class="item-box" absolute
    :style="{
      left: `${info.left}px`,
      top: `${info.top}px`,
    }"
    pt-16px
  >
    <div
      fc gap-5 class="box-title"
    >
      <h1>
        {{ info.title }}
      </h1>
    </div>
    <div
      class="box-content"
    >
      <p mt-6px mx-20px>
        {{ info.content }}
      </p>
      <ul
        flex justify-between flex-wrap items-center
        w-full pl-25px
      >
        <li
          v-for="item in info.arrayFun" :key="item" mt-13px
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.item-box{
  box-sizing: border-box;
  width: 240px;
  height: 260px;
  background: rgba(255,255,255,1);
  box-shadow: 0 0px 10px 0px rgba(0,123,255,0), 0px 0px 9px 0px rgba(0,123,255,0.01), 0px 0px 8px 0px rgba(0,123,255,0.03), 0px 0px 6px 0px rgba(0,123,255,0.04), 0px 0px 3px 0px rgba(0,123,255,0.05), 0px 0px 0px 0px rgba(0,123,255,0.05);
  border-radius: 12px;
  .box-title{
    width: max-content;
    margin: 0 auto;
    h1{
      margin: 0;
      color:#3183F4;
      font: 500 32px  "PingFang SC";
    }
  }
  .box-content{
    p{
      color: rgba(0,0,0,0.5);
      font: 400 14px "PingFang SC";
      line-height: 28px;
      // height: 140px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
    }
    li{
      font:400 18px "PingFang SC";
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
        background-color: #3183F4;
        position:absolute;
        left: -10px;
        top: 8px;
      }
    }
  }

}
</style>
