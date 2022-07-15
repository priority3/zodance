<script setup lang='ts'>
import { ref } from 'vue'
import commonTitle from '../common-title.vue'
import { useAnimation } from '@/hooks/useAnimation'
import activiItem1 from '@/assets/operate/activi-item1.png'
import activiItem2 from '@/assets/operate/activi-item2.png'
import activiItem3 from '@/assets/operate/activi-item3.png'
import activiItem4 from '@/assets/operate/activi-item4.png'
import activiItem5 from '@/assets/operate/activi-item5.png'
import activiItem6 from '@/assets/operate/activi-item6.png'
const title = '活动带动转化，提升成交总额'
const srcArr = [
  {
    src: activiItem4,
    left: 209,
    top: 145,
  },
  {
    src: activiItem2,
    left: 282,
    top: 419,
  },
  {
    src: activiItem3,
    left: 1036,
    top: 67,
  },
  {
    src: activiItem1,
    left: 497,
    top: -22,
  },
  {
    src: activiItem5,
    left: 565,
    top: 270,
  },
  {
    src: activiItem6,
    left: 888,
    top: 391,
  },
]
const img = ref(null)
useAnimation(img)
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
        <div
          v-for="{ src, left, top } in srcArr" :key="src"
          ref="img"
          absolute
          :style="{
            top: `${top}px`,
            left: `${left}px`,
          }" class="show-init"
        >
          <n-image
            preview-disabled
            :src="src"
          />
        </div>
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
