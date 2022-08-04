<script setup lang="ts">
import { ref } from 'vue'
import footerImage from '@/assets/home/footer-bgc.png'
import { HomeMall } from '@/enums/modal'
const modal = ref<MODAL | null>(null)
</script>

<template>
  <div
    h-720px class="footer-container" w-full pt-160px
    flex="~ col" items-center text-72px font-900
  >
    <h1 class="title-linear">
      加速企业向数智化转变
    </h1>
    <self-button
      class="btn" mt-197px z-100
      :text-style="{ color: '#3183F4', fontSize: '32px', fontWeight: '700' }"
      @click="modal && modal.setShowModal()"
    >
      联系我们
    </self-button>
    <div absolute bottom-0 w-full>
      <img
        w-full h-360px
        :src="footerImage"
      >
    </div>
    <base-modal
      ref="modal" :modal-info="HomeMall"
    />
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  background: linear-gradient(180deg, rgba(242,249,255,1) 0%, rgba(197,224,255,1) 77%);
  position: relative;
  .btn {
    width: 220px;
    height: 68px;
    border-radius: 12px;
    opacity: 1;
    background: rgba(255,255,255,1);
    box-shadow: 0 0px 10px 0px rgba(0,62,128,0), 0px 0px 9px 0px rgba(0,62,128,0.03), 0px 0px 8px 0px rgba(0,62,128,0.1), 0px 0px 6px 0px rgba(0,62,128,0.17), 0px 0px 3px 0px rgba(0,62,128,0.2), 0px 0px 0px 0px rgba(0,62,128,0.2);
  }
}
</style>
