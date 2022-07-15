<script setup lang='ts'>
import common from './common.vue'
import livetab from '@/assets/mall/live-tab.png'
const info = {
  title: '直播风口引爆销量',
  descArr: ['主播讲解展示', '在线互动氛围', '分享裂变吸粉', '直接下单转化'],
  image: livetab,
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
