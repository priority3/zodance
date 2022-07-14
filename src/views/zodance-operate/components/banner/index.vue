<script setup lang='ts'>
import { ref } from 'vue'
import baseModal from '@/components/base-modal.vue'
const modal = ref<MODAL | null>(null)
function handleToShowModal() {
  modal.value && modal.value.setShowModal()
}
const modalInfo = {
  title: 'HI,我是你的首席私域运营官',
  desc: '扫码加微信，送你专属大礼包',
  avator: 'avator',
  src: '/src/assets/xiaoling-code.png',
}
</script>

<template>
  <div
    h-640px w-full relative
    class="banner-container"
    flex items-start justify-center
  >
    <div
      absolute bottom-42px left-25px
    >
      <n-image
        preview-disabled
        src="/src/assets/operate/operate-logo.png"
      />
    </div>
    <div
      flex="~ col" justify-center items-center
      mt-160px
    >
      <h1>一个小零，五个运营</h1>
      <p mt-4px>
        小零同学让企业数字经营更简单
      </p>
      <self-button
        mt-60px
        :text-style="{
          color: 'rgba(2,126,228,1)',
          font: '400 20px PingFang SC',
        }"
        :style="{
          'border': '1px solid rgba(208,211,214,1)',
          'border-radius': '8px',
          'height': '48px',
          'width': '240px',
        }"
        @click="handleToShowModal"
      >
        免费咨询
      </self-button>
    </div>
    <base-modal
      ref="modal"
      :avator="modalInfo.avator"
      :src="modalInfo.src"
      :title="modalInfo.title"
      :desc="modalInfo.desc"
    />
  </div>
</template>

<style scoped lang='scss'>
.banner-container{
  background: linear-gradient(180deg, rgba(240,253,255,1) 0%, rgba(240,253,255,1) 81%, rgba(232,245,255,1) 91%, rgba(232,245,255,1) 100%);
  h1{
    font:900 80px "OPPOSans";
    background-image:-webkit-linear-gradient(bottom left,#007BE4,#44DAF5);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    background-clip: text;
  }
  p{
    color: rgba(48,190,247,1);
    font: 400 36px "OPPOSans";
  }
}
</style>
