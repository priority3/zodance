<script setup lang='ts'>
import common from './common.vue'
import selltab from '@/assets/mall/sell-tab.png'
const info = {
  title: '0基础搭建高颜值商城',
  descArr: ['50+行业模板', '在线客服', '数据看板', '店铺管理'],
  image: selltab,
}
</script>

<template>
  <div class="quicktab-containier">
    <common
      :title="info.title"
      :desc-arr="info.descArr"
      :image="info.image"
    />
  </div>
</template>

<style scoped lang='scss'>
.quicktab-containier{
  background-color: rgba(249,252,255,1);
  height: 528px;
  overflow: hidden;

}
</style>
