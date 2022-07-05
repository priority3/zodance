<script setup lang='ts'>
import { NCollapse, NCollapseItem } from 'naive-ui'
const info = [
  {
    title: '定制微信小程序商城',
    funArr: [
      {
        text: '商城风格定制',
        subText: '品牌标识LOGO',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '商品管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '订单管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '基础营销',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '定制微信小程序商城',
    funArr: [
      {
        text: '商城风格定制',
        subText: '品牌标识LOGO',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '商品管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '订单管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '基础营销',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '定制微信小程序商城',
    funArr: [
      {
        text: '商城风格定制',
        subText: '品牌标识LOGO',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '商品管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '订单管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '基础营销',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '定制微信小程序商城',
    funArr: [
      {
        text: '商城风格定制',
        subText: '品牌标识LOGO',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '商品管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '订单管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '基础营销',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
]
</script>

<template>
  <div>
    <n-collapse arrow-placement="right">
      <template v-for="({ title, funArr }, idx) in info" :key="title">
        <n-collapse-item :name="idx + 1">
          <template #header>
            <div class="n-coltitle" pl-24px>
              {{ title }}
            </div>
          </template>
          <template v-for="{ text, subText, isAccord } in funArr" :key="text">
            <div flex h-70px justify-center items-center flex-auto>
              <div
                class="coll-item-title"
                flex-none flex justify-around items-center
              >
                <div
                  class="coll-item-text"
                >
                  {{ text }}
                </div>
                <div
                  class="coll-item-subtext"
                >
                  {{ subText }}
                </div>
              </div>
              <template v-for="(accord, idx) in isAccord" :key="idx">
                <div class="coll-item-cont" flex justify-center items-center>
                  <div v-if="accord" i-carbon-checkmark :idx="idx" text-2xl text-green-700 />
                  <div v-else i-carbon-close text-2xl text-red-700 />
                </div>
              </template>
            </div>
          </template>
        </n-collapse-item>
      </template>
    </n-collapse>
  </div>
</template>

<style scoped lang='scss'>
.n-coltitle{
  color: rgba(29,33,41,1);
  font:400 20px "PingFang SC";
}
.coll-item-title{
  width: 24%;
  // min-width: 360px;
  color: rgba(30,34,48,1);
  font: 400 14px "PingFang SC";
  .coll-item-text{
    width: 40%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .coll-item-subtext{
    width: 60%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.coll-item-cont{
  // min-width: 160px;
  width: 19%;
}
:deep(.n-collapse .n-collapse-item:not(:first-child)){
  border: 0;
}
:deep(.n-collapse-item__header){
  height: 40px;
  box-sizing: border-box;
  background: rgba(247,249,255,1);
  box-shadow: 0 4px 10px 0 rgba(21,76,139,0.1);
  padding: 6px 0 !important;
  border-radius: 8px;
}
</style>
