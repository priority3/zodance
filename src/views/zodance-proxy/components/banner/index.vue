<script setup lang="ts">
import { useProxyModalContext } from '../../_utils'
import banner from '@/assets/proxy/banner.png'
const { proxyModalEmitter } = useProxyModalContext()
</script>

<template>
  <div class="banner-container" md:min-w-1440px w-full>
    <div
      flex justify-around items-center md:w-1440px md:px-120px h-400px md:h-600px
      mx-auto
    >
      <div flex="~ col" items-center md:items-start>
        <h1
          text="white 22px" font-500
          md:text="#1D2129 46px" md:font-500
        >
          零一跃动招募100名优质合伙人
        </h1>
        <p
          text="white 16px"
          md:text="#86909C 25px"
          mt-16px md:mt-36px
        >
          携手零一，共拓企业数字化万亿市场
        </p>
        <self-button
          type="primary"
          class="banner-btn"
          mt-75px md:mt-100px
          @click="proxyModalEmitter.emit('show-modal')"
        >
          立即咨询
        </self-button>
      </div>
      <div hidden md:block>
        <self-image
          :src="banner"
          width="470"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 768px){
  .banner-container {
    background: linear-gradient(152.4deg, rgba(184,241,255,0) 0%, rgba(168,233,255,1) 100%);
  }
  .banner-btn {
    width: 202px;
    height: 56px;
    border-radius: 5px;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
    color: white;
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .banner-container{
    background: url('@/assets/proxy/mo-banner.png') no-repeat ;
    background-size: 100% 100%;
    .banner-btn {
      width: 144px;
      height: 38px;
      border-radius: 2px;
      opacity: 1;
      background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
      color: white;
      font-size: 16px;
      font-weight: 500;
    }
}
}
</style>
