<script  lang='ts' setup>
import { reactive } from 'vue'
import strategySection from './components/strategy-section.vue'
const bannerInfo = reactive<Array<BannerInfo>>([
  {
    image: {
      url: '/src/assets/banner1.png',
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
    button: {
      text: '免费咨询',
      type: 'primary',
      top: 276,
    },
  },
  {
    image: {
      url: '/src/assets/banner2.png',
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
              line-height: 120px;
              background-image:-webkit-linear-gradient(bottom,#7CBCFF,#005EBF); 
              -webkit-background-clip:text; 
              -webkit-text-fill-color:transparent; `,
    },
    button: {
      text: '免费咨询',
      top: 276,
    },
  },
])
</script>

<template>
  <base-header />
  <!--  -->
  <base-carousel :banner-info="bannerInfo" />
  <div>
    <strategy-section />
  </div>
</template>

<style scoped lang='scss'>
</style>
