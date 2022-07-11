<script setup lang='ts'>
import advanceCard from './advance-card.vue'
const info = [{
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(11,139,250,1)',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(18,147,249,1);',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(18,147,249,1);',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(43,183,247,1)',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(55,200,247,1)',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(70,220,246,1)',
}, {
  icon: 'saas-advance1',
  desc: '前期沟通',
  dotbgc: 'rgba(71,222,246,1)',
  isLast: true,
}]
</script>

<template>
  <div flex="~ col" justify-center items-center mt-60px>
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
      :style="{ backgroundColor: 'rgba(51,136,255,1)', width: '112px', height: '25px', border: 0 }"
      border="false" mt-90px
      :text-style="{ font: '500 12px PingFang SC' }"
    >
      立即定制
    </self-button>
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
