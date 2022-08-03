<script setup lang='ts'>
import { ref } from 'vue'
import mallbanner from '@/assets/mall/mall-banner.png'
import { ModalMall } from '@/enums/modal'
const info = {
  title: '零一商城',
  subTitle: '快速拥有适合自己的小程序商城，获取流量销量双增长',
  bannerFun: [{
    icon: 'mall-tag1',
    text: '个性定制',
  }, {
    icon: 'mall-tag2',
    text: '快速开发',
  }, {
    icon: 'mall-tag3',
    text: '极佳体验',
  }, {
    icon: 'mall-tag4',
    text: '持续护航',
  }],
}
const modal = ref<MODAL | null>(null)
</script>

<template>
  <div class="banner-container" relative>
    <div class="banner-info-box" relative pl-120px>
      <div class="info-title">
        <h1 mt127px>
          {{ info?.title || '' }}
        </h1>
        <h2 mt32px>
          {{ info?.subTitle || '' }}
        </h2>
      </div>
      <div class="banner-fun-box" mt31px flex gap-40px>
        <template v-for="item in info.bannerFun" :key="item">
          <div
            flex items-center gap-12px
          >
            <self-svgicon :name="item.icon" text-30px />
            <div>
              {{ item.text }}
            </div>
          </div>
        </template>
      </div>
      <div
        flex gap-20px mt-102px
      >
        <self-button
          :style="{
            width: '168px',
            height: '36px',
            borderRadius: '5px',
            background: 'linear-gradient(180deg, rgba(92,178,254,1) 0%, rgba(23,144,250,1) 100%)',
            border: '0',
          }"
          :text-style="{
            color: 'rgba(255,255,255,1)',
            font: '500 18px OPPOSans',
          }"
          @click="modal && modal.setShowModal()"
        >
          免费申领
        </self-button>
        <self-button
          :style="{
            width: '168px',
            height: '36px',
            borderRadius: '5px',
            border: '1px solid rgba(193,193,193,1)',
          }"
          :text-style="{
            color: 'rgba(29,33,41,1)',
            font: '500 18px OPPOSans',
          }"
          @click="modal && modal.setShowModal()"
        >
          立即咨询
        </self-button>
      </div>
      <div absolute right-60px top-0>
        <n-image
          preview-disabled
          :src="mallbanner"
          width="620"
        />
        <!-- <img :src="mallbanner" alt=""> -->
      </div>
    </div>
    <base-modal
      ref="modal"
      :modal-info="ModalMall"
    />
  </div>
</template>

<style scoped lang='scss'>
.banner-container{
  width: 100%;
  height: 601px;
  background: linear-gradient(180deg, rgba(235,245,255,1) 0%, rgba(235,241,255,0) 100%);
  overflow: hidden;
  .banner-info-box{
    width: 1440px;
    margin: 0 auto;
    h1{
      color: rgba(29,33,41,1);
      font: 500 52px "PingFang SC";
    }
    h2{
      color: rgba(61,61,61,1);
      font: 400 20px "PingFang SC";
    }
    .banner-fun-box{
      color: rgba(61,61,61,1);
      font: 300 20px "PingFang SC";
    }
  }

}
</style>
