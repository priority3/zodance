<script setup lang='ts'>
import operateCard from './operate-card.vue'
const info = [{
  title: '品牌构建',
  isLine: false,
  icon: 'selfoperate1',
  contentInfo: [{
    subTitle: '品牌VI设计',
    desc: ['品牌标识Logo', '品牌标语Slogan', 'IP形象'],
  }, {
    subTitle: '品牌营销素材设计',
    desc: ['营销海报', '品牌故事', '产品图册', '微信红包封面', '品牌表情包'],
  }],
}, {
  title: '渠道构建',
  isLine: true,
  icon: 'selfoperate2',
  contentInfo: [{
    subTitle: '公域渠道构建',
    desc: ['抖音&快手', '小红书&微博', '百度&今日头条'],
  }, {
    subTitle: '私域渠道构建',
    desc: ['微信公众号', '微信视频号', '企业微信', '小程序'],
  }],
}, {
  title: '用户增长',
  isLine: true,
  icon: 'selfoperate3',
  contentInfo: [{
    subTitle: '公域增长',
    desc: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名优化', '其它信息流广告投放'],
  }, {
    subTitle: '公域导私域',
    desc: ['包裹卡导流', '短信导流', '1V1私发导流', '门店物料导流', '限时活动导流', '一物一码导流'],
  }, {
    subTitle: '私域增长',
    desc: ['助力裂变', '抽奖裂变', '红包裂变', '游戏裂变', '任务裂变'],
  }],
}, {
  title: '用户运营',
  isLine: true,
  icon: 'selfoperate4',
  contentInfo: [{
    subTitle: 'IP号运营',
    desc: ['1V1问答', '节日问答', '活动提醒'],
  }, {
    subTitle: '朋友圈运营',
    desc: ['每日触达', '产品种草', '活动发布'],
  }, {
    subTitle: '社区运营',
    desc: ['知识分享', '互动游戏', '产品推介'],
  }, {
    subTitle: '活动运营',
    desc: ['增长活动运营', '促活活动运营', '转化活动运营'],
  }],
}, {
  title: '用户转化',
  isLine: true,
  icon: 'selfoperate5',
  contentInfo: [{
    subTitle: '用户分层',
    desc: ['用户标签', '用户画像', '精准营销'],
  }, {
    subTitle: '转化触达',
    desc: ['短信群发', '企微群发', '朋友圈种草', '直播种草'],
  }, {
    subTitle: '转化活动',
    desc: ['拼团购', '秒杀购', '加价购', '套餐购', '专属购'],
  }, {
    subTitle: '转化活动',
    desc: ['会员身份', '会员折扣', '会员储值', '会员积分'],
  }],
}, {
  title: '数据驱动',
  isLine: true,
  icon: 'selfoperate6',
  contentInfo: [{
    subTitle: '数据整合',
    desc: [],
  }, {
    subTitle: '数据分析',
    desc: [],
  }, {
    subTitle: '数据报告',
    desc: [],
  }, {
    subTitle: '数据大屏',
    desc: [],
  }],
}]

info.forEach((item) => {
  item.contentInfo.forEach((it) => {
    it.desc.sort((a, b) => a.length - b.length)
  })
})
</script>

<template>
  <div
    class="selfoperate-container"
    flex="~ col" items-center justify-center
  >
    <h1>私域运营全景图</h1>
    <p>六大运营板块全面覆盖私域范畴</p>
    <div
      mt-25px flex gap-22px
    >
      <div
        v-for="{ title, isLine, icon, contentInfo } in info" :key="title"
      >
        <operate-card
          :title="title" :is-line="isLine" :icon="icon" :content-info="contentInfo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.selfoperate-container{
  height: 960px;
  background-color:rgba(245,253,255,1);
  h1{
    color: rgba(29,33,41,1);
    font: 400 52px "PingFang SC";
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 24px "PingFang SC";
  }
}
</style>
