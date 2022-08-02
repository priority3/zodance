<script setup lang='ts'>
import businessSection from '@/assets/home/business-section.png'
const info = {
  title: '先进企业的选择',
  src: businessSection,
}
const icons = [{
  icon: 'home-fanxiang',
  width: 112,
  height: 61,
}, {
  icon: 'home-niubei',
  width: 38,
  height: 66,
}, {
  icon: 'home-chuannongniu',
  width: 62,
  height: 58,
}, {
  icon: 'home-yiyuan',
  width: 101,
  height: 28,
}, {
  icon: 'home-zangcha',
  width: 45,
  height: 53,
}, {
  icon: 'home-jixiangcha',
  width: 132,
  height: 34,
}, {
  icon: 'home-sandun',
  width: 87,
  height: 63,
}, {
  icon: 'home-meimei',
  width: 102,
  height: 47,
}, {
  icon: 'home-sanguoji',
  width: 118,
  height: 52,
}, {
  icon: 'home-xiongmaojin',
  width: 116,
  height: 39,
}, {
  icon: 'home-shidai',
  width: 115,
  height: 30,
}, {
  icon: 'home-aimasuo',
  width: 92,
  height: 50,
}, {
  icon: 'home-dianmei',
  width: 100,
  height: 47,
}, {
  icon: 'home-caimi',
  width: 80,
  height: 80,
}, {
  icon: 'home-haima',
  width: 45,
  height: 59,
}, {
  icon: 'home-lanmei',
  width: 64,
  height: 64,
}, {
  icon: 'home-yufeng',
  width: 70,
  height: 67,
}, {
  icon: 'home-kaixincheng',
  width: 98,
  height: 50,
}, {
  icon: 'home-luxianlao',
  width: 129,
  height: 36,
}, {
  icon: 'home-kunpengjiche',
  width: 76,
  height: 60,
}]
</script>

<template>
  <div class="business-container" flex="~ col" items-center w-full pt-100px>
    <h1 m0 mb-69px class="title-linear">
      {{ info.title }}
    </h1>
    <div w-1080px flex flex-wrap gap-20px>
      <div
        v-for="{ icon, width, height } in icons" :key="icon"
        class="icon-box" fcc
      >
        <self-svgicon
          :name="icon"
          :style-name="{ width: `${width}px`, height: `${height}px` }"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.business-container{
  height: 840px;
  h1{
    color: rgba(29,33,41,1);
    font: 700 64px "OPPOSans";
  }
  .icon-box{
    width: 200px;
    height: 100px;
    border-radius: 12px;
    opacity: 1;
    background: rgba(255,255,255,1);
    box-shadow: 0 0px 10px 0px rgba(0,62,128,0), 0px 0px 9px 0px rgba(0,62,128,0.03), 0px 0px 8px 0px rgba(0,62,128,0.1), 0px 0px 6px 0px rgba(0,62,128,0.17), 0px 0px 3px 0px rgba(0,62,128,0.2), 0px 0px 0px 0px rgba(0,62,128,0.2);
  }
}
</style>
