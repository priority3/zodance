<script setup lang='ts'>
import { ref } from 'vue'
import baseBannerlink from './base-bannerlink.vue'
import { HomeMall, ModalXiaoLing } from '@/enums/modal'
import banner1 from '@/assets/home/banner1.png'
import banner2 from '@/assets/home/banner2.png'
const linkInfo = [
  {
    title: '零一商城',
    desc: '更高端的品牌形象店',
    link: '/zodance-mall',
  }, {
    title: '小零运营',
    desc: '更高效的数字经营模式',
    link: '/zodance-operate',
  }, {
    title: 'SaaS定制',
    desc: '更全面的SaaS解决方案',
    link: '/zodance-saas',
  },
]
const bannertHrefMap = {
  0: HomeMall,
  1: ModalXiaoLing,
}
const curModalInfo = ref<ModalTypeInfo>(HomeMall)
const modal = ref<MODAL | null>(null)
const isAutoPlay = ref(true)
function handleToClickBtn() {
  isAutoPlay.value = false
  modal.value && modal.value.setShowModal()
}
function handleToGetCur(curInd: number) {
  curModalInfo.value = bannertHrefMap[curInd]
}
function afterLeave() {
  isAutoPlay.value = true
}
// TODO 轮播图 autoplay
</script>

<template>
  <div relative w-full bg="#FBFBFD" h-1106px>
    <n-carousel
      :autoplay="isAutoPlay"
      :interval="7000"
      @update:current-index="handleToGetCur"
    >
      <div
        class="first-banner banner" flex="~ col" items-center
      >
        <div fc gap-32px text-48px font-500>
          <span>中小企业一站式</span>
          <span>数字化升级服务商</span>
        </div>
        <p text="#154C8B 24px" font-500 mt-36px>
          全场景SaaS + 私域联合运营，助力企业成功
        </p>

        <div mt-150px>
          <self-image
            :src="banner1"
            width="906px"
          />
        </div>
        <div
          class="dou-color" absolute top="50%" left="50%"
          w-450px h-200px z--1000 translate-x="-50%"
        />
      </div>
      <div class="second-banner banner" flex="~ col" items-center>
        <h1>你的首席私域运营官</h1>
        <div mt-183px>
          <self-image
            :src="banner2"
          />
        </div>
      </div>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
    <!-- banner link -->
    <div
      z-100 gap-44px w-full
      absolute bottom-20px fc
    >
      <template v-for="item in linkInfo" :key="item.title">
        <base-bannerlink
          :title="item.title"
          :desc="item.desc"
          :link="item.link"
        />
      </template>
    </div>
    <!-- button -->
    <div fc gap-20px mt-32px absolute top-300px left="50%" translate-x="-50%">
      <self-button
        class="banner-btn1 btn"
        :text-style="{ color: '#fff', fontSize: '18px' }"
        style="border:0"
        @click="handleToClickBtn()"
      >
        免费咨询
      </self-button>
      <self-button
        class="banner-btn2 btn"
        @click="$router.push('/zodance-price')"
      >
        查看价格
      </self-button>
    </div>
    <base-modal
      ref="modal"
      :modal-info="curModalInfo"
      :after-leave="afterLeave"
    />
  </div>
</template>

<style scoped lang='scss'>
.banner{
  height: 1106px;
  width: 1440px;
  padding-top: 140px;
  margin: 0 auto;
}
.first-banner{
  background: url("../../../assets/home/banner1bg.png") no-repeat ;
  background-position: 50% 70%;
  .dou-color {
    background: linear-gradient(to right,rgba(173,0,254,1),rgba(0,224,238,1));
    filter: blur(360px);
  }
}
.second-banner{
  background: url('../../../assets/home/banner2-middle.png') no-repeat ;
  background-position: 50% 87%;
  position: relative;
  &::before {
    content: "";
    width: 250px;
    height: 250px;
    position: absolute;
    top: 40%;
    left: 5%;
    z-index: -1;
    background: url("../../../assets/home/banner2-left.png");
  }
  &::after {
    content: "";
    width: 250px;
    height: 250px;
    position: absolute;
    top: 30%;
    right: 15%;
    background: url("../../../assets/home/banner2-right.png");
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    background-image:-webkit-linear-gradient(bottom,#7CBCFF,#005EBF);
    background-clip:text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  }
}
.btn {
    width: 168px;
    height: 36px;
    border-radius: 5px;
    opacity: 1;
}
.banner-btn1{
  background: linear-gradient(225deg, rgba(138,180,227,1) 0%, rgba(87,142,204,1) 100%);
  box-shadow: 0 0px 10px 0px rgba(0,123,255,0), 0px 0px 9px 0px rgba(0,123,255,0.01), 0px 0px 8px 0px rgba(0,123,255,0.03), 0px 0px 6px 0px rgba(0,123,255,0.04), 0px 0px 3px 0px rgba(0,123,255,0.05), 0px 0px 0px 0px rgba(0,123,255,0.05);
  color: rgba(255,255,255,1) !important;
  font-size: 18px;
  font-weight: 400;
}
.banner-btn2{
  border: 1px solid rgba(237,237,237,1);
  background: rgba(255,255,255,1);
  box-shadow: 0 0px 10px 0px rgba(0,123,255,0), 0px 0px 9px 0px rgba(0,123,255,0.01), 0px 0px 8px 0px rgba(0,123,255,0.03), 0px 0px 6px 0px rgba(0,123,255,0.04), 0px 0px 3px 0px rgba(0,123,255,0.05), 0px 0px 0px 0px rgba(0,123,255,0.05);
  color: rgba(29,33,41,1);
  font-size: 18px;
  font-weight: 400;
}
.custom-dots {
  z-index: 100;
  display: flex;
  padding: 0;
  // width: 80%;
  // margin: 0 auto;
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  li {
    display: inline-block;
    width: 60px;
    height: 5px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: rgba(231,231,231,1);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  li.is-active{
    background: rgba(87,142,204,1);
  }
}
.carousel-content{
  width: 70%;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 127px;
}
</style>
