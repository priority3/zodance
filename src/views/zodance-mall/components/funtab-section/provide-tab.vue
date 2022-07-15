<script setup lang='ts'>
import common from './common.vue'
import providetab from '@/assets/mall/provide-tab.png'
const info = {
  title: '玩转社交裂变营销',
  descArr: ['社区团购', '互动小游戏', '刮分裂变红包', '秒杀促销'],
  image: providetab,
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
