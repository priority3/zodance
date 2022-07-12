<script setup lang='ts'>
import commonTitle from '../common-title.vue'
import actImg from './act-img.vue'
const title = '活动带动转化，提升成交总额'
const srcArr = [
  {
    src: '/src/assets/operate/activi-item4.png',
    left: 209,
    top: 145,
  },
  {
    src: '/src/assets/operate/activi-item2.png',
    left: 282,
    top: 419,
  },
  {
    src: '/src/assets/operate/activi-item3.png',
    left: 1036,
    top: 67,
  },
  {
    src: '/src/assets/operate/activi-item1.png',
    left: 497,
    top: -22,
  },
  {
    src: '/src/assets/operate/activi-item5.png',
    left: 565,
    top: 270,
  },
  {
    src: '/src/assets/operate/activi-item6.png',
    left: 888,
    top: 391,
  },
]
</script>

<template>
  <div
    class="activi-container w-1440px my-0 mx-auto"
    mt-46px
  >
    <common-title :title="title" />
    <div
      class="content-box" relative
      flex justify-center items-center mt-40px
    >
      <n-image
        preview-disabled
        src="/src/assets/operate/activi-bgc.png"
      />
      <div>
        <act-img
          v-for="{ src, left, top } in srcArr" :key="src"
          :src="src" :left="left" :top="top"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.content-box{
  &::after{
    content: "";
    z-index: -1;
    position: absolute;
    right: 196px;
    top: -45px;
    width: 400px;
    height: 400px;
    border-radius: 100%;
    background-image: linear-gradient(120.4deg, rgba(115,205,255,1) 0%, rgba(181,228,254,1) 100%);
  }
}
</style>
