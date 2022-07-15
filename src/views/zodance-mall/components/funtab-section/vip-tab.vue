<script setup lang='ts'>
import common from './common.vue'
import viptab from '@/assets/mall/vip-tab.png'
const info = {
  title: '精细化会员管理',
  descArr: ['智能客户画像', '搭建会员体系', '激活客户互动', '沉淀不断复购'],
  image: viptab,
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
