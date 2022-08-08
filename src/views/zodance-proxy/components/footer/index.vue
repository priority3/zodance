<script setup lang="ts">
import { ref } from 'vue'
const modal = ref<MODAL>()
</script>

<template>
  <div
    w-full h-60px md="h-310px min-w-1440px"
    fcc class="footer-container"
  >
    <h1
      text="white 18px" font-500
      md="text-60px"
    >
      携手零一 合作共赢
    </h1>

    <div mt-40px hidden md:block>
      <self-button
        class="btn"
        @click="modal && modal.setShowModal()"
      >
        立即咨询
      </self-button>
    </div>
    <base-modal
      ref="modal"
    />
  </div>
  <div
    h-38px class="footer-box"
    fc text-10px md="text-14px h-60px"
  >
    <p>@2022 - 零一跃动科技 - 蜀ICP备19087564号 - 1 版权所有</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  background: url('@/assets/proxy/footer-section.png') no-repeat;
  background-size: 100% 100%;
  .btn {
    border-radius: 8px;
    opacity: 1;
    border: 1px solid rgba(255,255,255,1);
    background: rgba(255,255,255,1);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.12);
    color: rgba(61,61,61,1);
  }
}

@media (min-width:768px) {
  .btn {
    font-size: 32px;
    width: 248px;
    height: 53px;
  }
}
.footer-box{
  border: 1px solid rgba(218,218,218,1);
  background: rgba(255,255,255,1);
}
</style>
