<script setup lang='ts'>
import type { StrategyInfo } from '../../type'
const { info } = defineProps<{
  info: StrategyInfo
}>()
</script>

<template>
  <div class="item-box" :style="{ marginTop: info.mt }">
    <div
      flex items-center justify-center gap-5 class="box-title"
    >
      <!-- <self-svgicon :name="info.icon" text-3xl /> -->
      <div
        w-40px h-40px flex-none rounded-full
        class="title-icon" text-center leading-40px
      >
        {{ info.icon }}
      </div>
      <h1>{{ info.title }}</h1>
    </div>
    <div
      class="box-content"
    >
      <p mt-10px>
        {{ info.content }}
      </p>
      <ul
        flex justify-between flex-wrap items-center gap-10px
        pl-10px
      >
        <li v-for="item in info.arrayFun" :key="item" mt-13px>
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
  padding-bottom:78px ;
  .box-title{
    width: max-content;
    margin: 0 auto;
    .title-icon{
      color:#48A7D7;
      font-size: 32px;
      font-weight: 500;
      border: 2px solid;
    }
    h1{
      margin: 0;
      color: rgba(11,123,178,1);
      font: 500 32px  "PingFang SC";
      width: 100%;
      min-width: 160px;
    }
  }
  .box-content{
    margin: 0 40px;
    p{
      color: rgba(0,0,0,1);
      font: 300 16px "PingFang SC";
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
        background-color: #000;
        position:absolute;
        left: -10px;
        top: 8px;
      }
    }
  }

}
</style>
