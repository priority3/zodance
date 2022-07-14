<script setup lang='ts'>
import { ref } from 'vue'
import advanceCard from './advance-card.vue'
const info = [{
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(11,139,250,1)',
}, {
  icon: 'saas-advance2',
  desc: '需求评估',
  dotbgc: 'rgba(18,147,249,1);',
}, {
  icon: 'saas-advance3',
  desc: '确定方案',
  dotbgc: 'rgba(18,147,249,1);',
}, {
  icon: 'saas-advance4',
  desc: '签订协议',
  dotbgc: 'rgba(43,183,247,1)',
}, {
  icon: 'saas-advance5',
  desc: '项目开发',
  dotbgc: 'rgba(55,200,247,1)',
}, {
  icon: 'saas-advance6',
  desc: '上线交付',
  dotbgc: 'rgba(70,220,246,1)',
}, {
  icon: 'saas-advance7',
  desc: '售后服务',
  dotbgc: 'rgba(71,222,246,1)',
  isLast: true,
}]
const modal = ref<null | MODAL >(null)
function handleToshowModal() {
  modal.value && modal.value.setShowModal()
}
</script>

<template>
  <div
    flex="~ col" justify-center items-center mt-60px
    class="advance-container"
  >
    <div>
      <h1>我们的优势，不只是专业</h1>
    </div>
    <div flex="~ col" items-center>
      <div
        mt-48px w-1082px
        flex justify-between items-center
      >
        <advance-card
          v-for="{ icon, desc, dotbgc, isLast } in info" :key="desc"
          :icon="icon" :desc="desc" :dotbgc="dotbgc" :is-last="isLast"
          z-100
        />
      </div>
      <div class="border-dashed" mt--10px />
    </div>
    <self-button
      type="small"
      :style="{ backgroundColor: 'rgba(51,136,255,1)', width: '112px', height: '25px', borderRadius: '4px' }"
      border="false" mt-90px
      :text-style="{ font: '500 12px PingFang SC' }"
      @click="handleToshowModal"
    >
      立即定制
    </self-button>
    <base-modal ref="modal" />
  </div>
</template>

<style scoped lang='scss'>
h1{
  color: rgba(0,0,0,1);
  font-size: 32px;
  font-weight: 500;
  font-family: "PingFang SC";
}
.border-dashed{
  border-bottom: 4px dashed #ECF4FF;
  width: 960px;
}
</style>
