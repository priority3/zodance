<script setup lang='ts'>
import common from './common.vue'
import selltab from '@/assets/mall/sell-tab.png'
const info = {
  title: '更多人帮你卖货',
  descArr: ['导购分销', '社群分销', '网红分销', '成为供货商'],
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
