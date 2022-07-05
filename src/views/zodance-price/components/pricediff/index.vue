<script setup lang='ts'>
import allDiff from '../alldiff/index.vue'
import common from './common.vue'
const info = [
  {
    title: '小零同学联合运营',
    type: 'start',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['微信公众号', '企业微信', '包裹卡导流', '包裹卡导流'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信小程序'],
        }],
      },
      {
        title: '用户增长',
        infoContext: [{
          subTitle: '用户增长策略',
          text: ['微信公众号'],
        }, {
          subTitle: '用户增长策略',
          text: ['微信小程序'],
        }],
      },
    ],
  }, {
    title: '小零同学联合运营',
    type: 'basic',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['微信公众号'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信小程序'],
        }],
      },
    ],
  }, {
    title: '小零同学联合运营',
    type: 'major',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['微信公众号'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信小程序'],
        }],
      },
    ],
  }, {
    title: '小零同学联合运营',
    type: 'plus',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['微信公众号'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信小程序'],
        }],
      },
    ],
  },
]
</script>

<template>
  <div
    class="price-diff-container"
    flex justify-around gap-30px flex-wrap
  >
    <template
      v-for="item in info"
      :key="item.type"
    >
      <common
        :title="item.title"
        :price="item.price"
        :is-active="item.isActive"
        :content-info="item.contentInfo"
        :type="item.type"
        :title-cont="item.titleCont"
      />
    </template>
    <self-button
      type="small"
      style="height: 48px;min-width:224px;width:15%;"
      text-style="font: 500 24px 'OPPSSans'"
    >
      立即咨询
    </self-button>
  </div>
  <all-diff />
</template>

<style scoped lang='scss'>
</style>
