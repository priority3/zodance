<script  lang='ts' setup>
import { reactive } from 'vue'
import strategySection from './components/strategy-section/index.vue'
import businessSection from './components/business-section/index.vue'
import xiaolingSection from './components/xiaoling-section/index.vue'
import digitSection from './components/digit-section/index.vue'
import allcoverSection from './components/allcover-section/index.vue'
import { setupHandleScroll } from '@/hooks/useAnimation'
import banner1 from '@/assets/home/banner1.png'
import banner2 from '@/assets/home/xiaoling-logo.png'
const bannerInfo = reactive<Array<BannerInfo>>([
  {
    image: {
      url: banner1,
      right: 0,
    },
    title: {
      desc: '中小企业一站式数字化升级服务商',
      style: `color: rgba(29,33,41,1);
              font-size: 48px;
              font-weight: 700;
              font-family: "PingFang SC";
              line-height: 72px;`,
    },
    subTitle: {
      desc: '全场景SaaS+私域联合运营，助力企业成功',
      style: `color: rgba(134,144,156,1);
              font-size: 32px;
              font-weight: 400;
              font-family: "PingFang SC";
              line-height: 64px;
              margin-top: 24px;`,
    },
    button: [{
      text: '免费咨询',
      type: 'primary',
      style: {
        'margin-top': '116px',
        'width': '168px',
        'height': '36px',
        'border-radius': '5px',
        'background': 'linear-gradient(224.4deg, rgba(104,186,254,1) 0%, rgba(69,218,246,1) 100%)',
      },
      textStyle: {
        'color': ' rgba(255,255,255,1)',
        'font-size': '18px',
        'font-weight': '500',
        'font-family': 'OPPOSans',
      },
      modal: true,
    }],
  },
  {
    image: {
      url: banner2,
      right: 0,
      top: 129,
    },
    title: {
      desc: '小零同学',
      style: `font-size: 40px;
              font-weight: 400;
              font-family: "OPPOSans";
              line-height: 80px;`,
    },
    subTitle: {
      desc: '你的首席私域运营官',
      style: `font-size: 60px;
              font-weight: 700;
              font-family: "PingFang SC";
              background-image:-webkit-linear-gradient(bottom,#7CBCFF,#005EBF); 
              -webkit-background-clip:text; 
              -webkit-text-fill-color:transparent; `,
    },
    button: [{
      text: '免费咨询',
      style: {
        'margin-top': '110px',
        'height': '36px',
        'width': '168px',
        'border-radius': '5px',
        'background': 'rgba(87,142,204,1)',
        'border': '0',
      },
      textStyle: {
        'color': 'rgba(255,255,255,1)',
        'font-size': '18px',
        'font-weight': '500',
        'font-family': 'OPPOSans',
      },
      modal: true,
    }, {
      text: '查看价格',
      style: {
        'margin-top': '110px',
        'height': '36px',
        'width': '168px',
        'border-radius': '5px',
        'border': '1px solid rgba(193,193,193,1)',
      },
      textStyle: {
        'color': 'rgba(29,33,41,1)',
        'font-size': '18px',
        'font-weight': '500',
        ' font-family': 'OPPOSans',
      },
      modal: false,
      link: '/zodance-price',
    }],
  },
])
setupHandleScroll()
</script>

<template>
  <base-header />
  <!--  -->
  <base-carousel :banner-info="bannerInfo" />
  <div flex justify-center flex-wrap>
    <strategy-section />
    <xiaoling-section />
    <digit-section />
    <allcover-section />
    <business-section />
  </div>
  <base-footer />
</template>

<style scoped lang='scss'>
</style>
