<script setup lang="ts">
import { ref } from 'vue'
import bannerSection from './components/banner/index.vue'
import headerSection from './components/header/index.vue'
import togeSection from './components/toge-section/index.vue'
import tabSection from './components/tab-section/index.vue'
import needSection from './components/need-section/index.vue'
import applySection from './components/apply-section/index.vue'
import footerSection from './components/footer/index.vue'
import { MobileModal } from '@/enums/modal'
import { setupHandleScroll } from '@/hooks/useAnimation'
import { isIosMobile } from '@/utils'
setupHandleScroll()
const modal = ref<MODAL>()
</script>

<template>
  <header-section />
  <div
    :class="isIosMobile() ? 'pb-60px' : 'pb-44px'"
    md="pt-60px pb-0" mx-auto
  >
    <banner-section />
    <toge-section />
    <tab-section />
    <need-section />
    <apply-section />
    <footer-section />
  </div>
  <div
    block md:hidden w-full h-44px
    class="box" :style="{ height: `${isIosMobile() ? '60px' : '44px'}` }"
  >
    <self-button
      class="btn"
      :text-style="{ color: 'white' }"
      text-16px font-500 fc
      @click="modal && modal.setShowModal()"
    >
      立即咨询
    </self-button>
  </div>
  <!-- TODO  -->
  <base-modal
    ref="modal"
    is-reactive
    :modal-info="MobileModal"
  />
</template>

<style lang="scss" scoped>
.box{
  position: fixed;
  bottom: 0;
  .btn {
    width: 100%;
    height: 100%;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%);
    box-shadow: 0 -2px 4px 0 rgba(0,0,0,0.06);
    border: 0 !important;
  }
}
</style>
