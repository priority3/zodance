<script setup lang="ts">
import { ref } from 'vue'
import togeImg from '@/assets/proxy/toge-section.png'
import { useAnimation } from '@/hooks/useAnimation'
const cards = [{
  title: '0加盟费',
  desc: '阶梯奖金',
  icon: '',
}, {
  title: '阶梯奖金',
  desc: '根据签单量设置合伙人等级和等级奖励',
  icon: 'icon-UP',
}, {
  title: '冲单奖金',
  desc: '达成目标单量获得奖金激励',
  icon: 'icon-UP',
}, {
  title: '阶梯奖金',
  desc: '向年度优秀合伙人发放丰厚奖金',
  icon: 'icon-UP',
}]
const modal = ref<MODAL>()
const imgRef = ref<HTMLElement | null>(null)
const cardsRef = ref<HTMLElement | null>(null)
useAnimation(cardsRef)
useAnimation(imgRef, 'fade')
</script>

<template>
  <div
    flex="~ col" items-center w-full
    pt-32px
    md="h-750px w-1440px mx-auto pt-80px"
  >
    <!-- title -->
    <h1 hidden md:block text="#1D2129 36px" font-36px>
      做零一合伙人，门槛低、收益高、返利快
    </h1>
    <div block md:hidden>
      <div fcc gap-20px text="#1D2129 18px">
        <h1>做零一合伙人</h1>
        <h1>门槛低、收益高、返利快</h1>
      </div>
    </div>

    <!-- cards -->
    <div
      px-13px fc w-full mt-24px
      md="px-120px flex justify-between items-center mt-64px"
    >
      <div
        fc flex-wrap gap-11px w-375px
        md="w-850px gap-32px"
      >
        <template v-for="{ title, desc, icon } in cards" :key="title">
          <div
            ref="cardsRef" w-160px h-86px flex="~ col"
            items-center
            pt-12px
            md="w-400px h-150px pt-24px" class="card show-init"
          >
            <div fc>
              <h2
                class="card-title"
                text-14px font-500
                md="text-26px "
              >
                {{ title }}
              </h2>
              <self-svgicon
                v-if="icon"
                :name="icon"
                :style-name="{ width: '32px', height: '20px' }"
              />
            </div>
            <p
              text="#3D3D3D 10px center" mt-8px
              md="text-18px font-500 mt-28px"
            >
              {{ desc }}
            </p>
          </div>
        </template>
      </div>
      <div ref="imgRef" class="fade-init">
        <self-image
          hidden md:block
          :src="togeImg"
          width="340px"
        />
      </div>
    </div>

    <self-button
      type="primary"
      class="btn"
      mt-24px md:mt-80px
      @click="modal && modal.setShowModal()"
    >
      立即咨询
    </self-button>
  </div>
  <base-modal ref="modal" is-reactive />
</template>

<style lang="scss" scoped>
@media (min-width: 768px){
  .btn {
    width: 202px;
    height: 56px;
    border-radius: 5px;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
    color: white;
    font-size: 28px;
  }
}
@media (max-width: 768px){
  .btn {
    width: 96px;
    height: 36px;
    border-radius: 5px;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
    color: white;
    font-size: 14px;
  }
}
.card{
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 16px 0px rgba(208,208,208,0.18);
}
.card-title {
  background:linear-gradient(90deg,#0380E5 56%,#42D7F4 168.75%,#42D7F4 168.75%);
  background-clip: text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>
