<script setup lang='ts'>
import choseCard from './chose-card.vue'
const info = [{
  title: '基础版',
  subTitle: '移动商城+小程序',
  content: '适合单门店商家，满足商品销售、推广营销等基础经营需求',
  price: 3800,
  desc: '/年',
}, {
  title: '定制版',
  subTitle: '移动商城+小程序+22个营销应用',
  content: '适合成长型、电商，满足推广获客、成交转化、复购增购、分享裂变等核心经营需求',
  price: 5000,
  desc: '起',
}]
const title = '不同商家，针对选择'
</script>

<template>
  <div class="otherchose-container" flex="~ col" items-center>
    <h1>{{ title }}</h1>
    <div
      mt-57px
      flex="~ col" gap-36px
    >
      <template v-for="item in info" :key="item.title">
        <chose-card
          :title="item.title"
          :sub-title="item.subTitle"
          :content="item.content"
          :price="item.price"
          :desc="item.desc"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.otherchose-container{
  width: 80%;
  margin: 50px auto 0 auto;
  h1{
    color: rgba(29,33,41,1);
    font: 500 36px "PingFang SC";
  }
}
</style>
