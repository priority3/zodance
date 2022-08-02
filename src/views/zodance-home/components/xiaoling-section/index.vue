<script setup lang='ts'>
import { ref } from 'vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
import xiaolingSection from '@/assets/home/xiaoling-section.png'
import xiaolingBgc from '@/assets/home/home-xiaolingbgc.svg'
const leftInfo = {
  title: '销售数字化',
  subTitle: '帮助企业低成本实现销售数字化',
  subscribe: '小零同学，帮助企业构建增长、运营、转化于一体的私域运营体系',
  src: xiaolingSection,
}
const cardInfo = [{
  icon: 'xiaoling-card1',
  contentInfo: [{
    subTitle: '私域增长',
    desc: ['助力裂变', '抽奖裂变', '游戏裂变', '红包裂变'],
  }, {
    subTitle: '公域导私域',
    desc: ['一物一码导流', '门店物料导流', '包裹卡导流', '短信导流'],
  }, {
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }],
}, {
  icon: 'xiaoling-card2',
  contentInfo: [{
    subTitle: 'IP号运营',
    desc: ['1V1问答', '节日问答', '活动提醒'],
  }, {
    subTitle: '公域增长',
    desc: ['每日触达', '产品种草', '活动发布'],
  }, {
    subTitle: '社群运营',
    desc: ['知识分享', '互动游戏', '产品推介'],
  }, {
    subTitle: '活动运营',
    desc: ['增长活动', '促活活动', '转化活动'],
  }],
}, {
  icon: 'xiaoling-card3',
  contentInfo: [{
    subTitle: '转化活动',
    desc: ['拼团购', '秒杀购', '套餐购', '加价购'],
  }, {
    subTitle: '会员体系',
    desc: ['会员身份', '会员折扣', '会员储值', '会员积分'],
  }, {
    subTitle: '转化触达',
    desc: ['短信群发', '企微群发', '直播种草', '朋友圈种草'],
  }, {
    subTitle: '用户分层',
    desc: ['用户标签', '用户画像', '精准营销'],
  }],
}]
cardInfo.forEach((item) => {
  item.contentInfo.forEach((it) => {
    it.desc.sort((a, b) => a.length - b.length)
  })
})
function getWidth(num: number) {
  let res = ''
  switch (num) {
    case 0:{
      res = '590px'
      break
    }
    case 1:{
      res = '670px'
      break
    }
    case 2:{
      res = '750px'
      break
    }
    default:
      break
  }
  return res
}
const cards = ref(null)
useAnimation(cards)
</script>

<template>
  <div
    h-870px w-full
    gap-174px items-center justify-between
    class="xiaoling-container" relative
  >
    <div>
      <div
        flex="~ col" items-center justify-center
        gap-10px class="title-box" mt-60px
      >
        <h1
          class="title-linear"
        >
          {{ leftInfo.title }}
        </h1>
        <!-- <h2
          class="title-linear"
        >
          {{ leftInfo.subTitle }}
        </h2> -->
        <h3>{{ leftInfo.subscribe }}</h3>
      </div>
      <div mt-114px absolute left-80px bottom-150px>
        <n-image
          preview-disabled
          :src="leftInfo.src"
          width="447"
        />
      </div>
    </div>
    <div
      class="card-box" ml-250px mt-74px
      flex="~ col" items-center justify-center
    >
      <div
        absolute z--100
        top-190px
        left-380px
      >
        <n-image
          preview-disabled
          :src="xiaolingBgc"
          width="500"
          height="500"
        />
      </div>
      <div
        v-for="({ icon, contentInfo }, index) in cardInfo" :key="icon"
        ref="cards" class="show-init" :class="`show-delay-${index}`"
      >
        <card
          :icon="icon"
          :content-info="contentInfo"
          :width="getWidth(index)"
          :style="index === 2 ? { height: '180px' } : ''"
        />
      </div>
      <div
        absolute z--100
        bottom--20px
        right-150px
      >
        <n-image
          preview-disabled
          :src="xiaolingBgc"
          width="500"
          height="500"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.xiaoling-container{
  width: 1440px;
  margin: 0 auto;
}
.title-box{
  h1{
    font: 700 64px "PingFang SC";
  }
  h2{
    font: 700 36px "PingFang SC";
  }
  h3{
    color: rgba(134,144,156,1);
    font: 400 24px "Noto Sans SC";
  }
}
</style>
