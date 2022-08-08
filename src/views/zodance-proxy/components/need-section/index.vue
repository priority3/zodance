<script setup lang="ts">
import { ref } from 'vue'
import { useAnimation } from '@/hooks/useAnimation'
const cards = [{
  icon: 'proxy-needicon1',
  title: '拥有客户资源',
  desc: '拥有当地丰富的企业资源，或线下门店资源',
}, {
  icon: 'proxy-needicon2',
  title: '认可零一跃动文化',
  desc: '认可零一跃动产品价值和文化理念，愿意和零一跃动长期合作',
}, {
  icon: 'proxy-needicon3',
  title: '具有行业背景',
  desc: '具有互联网背景，对电商、SaaS行业有了解',
}]
const cardsRef = ref<HTMLElement | null>(null)
useAnimation(cardsRef)
</script>

<template>
  <div
    fic w-full pt-24px md="min-w-1440px pt-40px"
    h-430px md:h-430px
  >
    <h1
      text="#1D2129 18px" font-500
      md="text-36px"
    >
      零一需要这样的合伙人
    </h1>
    <div
      w-full fcc pt-20px md="fc flex-row pt-40px"
      gap-20px md:gap-80px
    >
      <div
        v-for="({ icon, title, desc }, index) in cards" :key="title"
        ref="cardsRef" w-235px md:w-325px fcc class="show-init" :class="`show-delay-${index + 1}`"
      >
        <self-svgicon
          :name="icon"
          class-name="need-icon"
        />
        <h2
          text-14px mt-8px md="text-28px font-500"
          class="item-title"
        >
          {{ title }}
        </h2>
        <p
          text-12px mt-12px font-500
          text="#3D3D3D center" md="text-20px mt-32px leading-46px"
        >
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .need-icon{
    width: 70px;
    height: 70px;
  }
}
@media (max-width: 768px) {
  .need-icon{
    width: 30px;
    height: 30px;
  }
}
.item-title {
  background:linear-gradient(90deg,#0380E5 56%,#42D7F4 168.75%,#42D7F4 168.75%);
  background-clip: text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>
