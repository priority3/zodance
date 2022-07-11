<script setup lang='ts'>
import comeCard from './come-card.vue'
const info = {
  title: '你想要的，都能帮你实现',
  contPara1: '零一拥有专业的互联网软件开发团队，基于强大的研发能力',
  contPara2: '为你提供个性化高品质的互联网软件定制开发服务，帮助品牌企业一站式解决移动零售业务问题',
  cardArr: [
    {
      position: 'start',
      title: '全套页面自定义',
      content: '不论是小程序商城还是H5活动，都可以帮你实现个性化定制界面，让你的品牌直击人心',
      src: '/src/assets/saas/saas-card1.png',
    }, {
      position: 'end',
      title: '企业内部系统无缝打通',
      content: '对接企业已有的第三方系统，打通商家后端运营系统接口，降低运营成本，实现全渠道经营',
      src: '/src/assets/saas/saas-card2.png',
    }, {
      position: 'start',
      title: '分销系统定制',
      content: '直销、分销、众筹、代理发货、店中店分销、020分销等各种模式的分销玩法，通过分销+信任经济模式，绑定关系更牢固',
      src: '/src/assets/saas/saas-card3.png',
    }, {
      position: 'end',
      title: '小程序定制',
      content: '为你带来更多客户的会员+支付体系定制小程序，简化开发，提升效率；满足电商、餐饮、O2O等多场景定制化需求',
      src: '/src/assets/saas/saas-card4.png',
    }, {
      position: 'start',
      title: 'PC端B2C商城定制',
      content: '为品牌商零售商构建个性化B2C一站式购物的网上商城系统，树立行业品牌形象；',
      subContent: '全渠道场景的线上零售商城，打造全渠道会员互动及数据中心',
      src: '/src/assets/saas/saas-card5.png',
    }, {
      position: 'end',
      title: '一站式服务和资源',
      content: '专业诊断运营方案、面对面深度指导，从需求到上线，一站式服务支持；还提供大号推送绿色通道、DSP广告推广等专属资源自持',
      src: '/src/assets/saas/saas-card6.png',
    },
  ],
}
</script>

<template>
  <div flex="~ col" items-center justify-center gap-10px class="come-title" mt-89px>
    <h1>{{ info.title }}</h1>
    <p>{{ info.contPara1 }}</p>
    <p>{{ info.contPara2 }}</p>
  </div>
  <div
    flex="~ col" mt-100px
    class="w-7/10" mx-auto my-0 gap-20px
  >
    <come-card
      v-for="{ position, title, content, src, subContent } in info.cardArr"
      :key="title"
      :position="position"
      :title="title"
      :content="content"
      :src="src"
      :sub-content="subContent"
    />
  </div>
</template>

<style scoped lang='scss'>
.come-title{
  font-family: "PingFang SC";
  font-weight: 400;
  h1{
    color: rgba(29,33,41,1);
    font-size: 28px;
  }
  p{
    color: rgba(78,78,78,1);
    font-size: 15px;
  }
}
</style>
