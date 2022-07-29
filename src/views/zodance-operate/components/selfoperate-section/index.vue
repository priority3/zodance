<script setup lang='ts'>
import operateCard from './operate-card.vue'
const info = [{
  title: '品牌构建',
  isLine: false,
  icon: 'selfoperate1',
  contentInfo: [{
    subTitle: '品牌VI设计',
    desc: ['品牌Logo', '品牌Slogan', 'IP形象'],
  }, {
    subTitle: '营销素材',
    desc: ['营销海报', '品牌故事', '产品图册', '微信红包封面', '品牌表情包'],
  }],
}, {
  title: '渠道构建',
  isLine: true,
  icon: 'selfoperate2',
  contentInfo: [{
    subTitle: '公域渠道',
    desc: ['抖音', '快手', '小红书', '微博', '百度', '今日头条'],
  }, {
    subTitle: '私域渠道',
    desc: ['社群', '小程序', '公众号', '视频号', '企业微信'],
  }],
}, {
  title: '用户增长',
  isLine: true,
  icon: 'selfoperate3',
  contentInfo: [{
    subTitle: '公域投放',
    desc: ['信息流', '微信/百度', '抖音/快手', '微博/小红书'],
  }, {
    subTitle: '私域导流',
    desc: ['公众号', '包裹卡', '门店活动', '一物一码', '短信/外呼'],
  }, {
    subTitle: '裂变增长',
    desc: ['助力裂变', '抽奖裂变', '红包裂变', '游戏裂变', '任务裂变'],
  }],
}, {
  title: '用户运营',
  isLine: true,
  icon: 'selfoperate4',
  contentInfo: [{
    subTitle: 'IP号',
    desc: ['1V1问答', '节日问答', '活动提醒'],
  }, {
    subTitle: '社群',
    desc: ['知识分享', '游戏互动', '产品推介'],
  }, {
    subTitle: '活动',
    desc: ['增长活动', '促活活动', '转化活动'],
  }, {
    subTitle: '朋友圈',
    desc: ['每日触达', '产品种草', '活动发布'],
  }],
}, {
  title: '用户转化',
  isLine: true,
  icon: 'selfoperate5',
  contentInfo: [{
    subTitle: '用户分层',
    desc: ['用户标签', '用户画像', '精准营销'],
  }, {
    subTitle: '用户触达',
    desc: ['直播', '朋友圈', 'AI外呼', '短信群发', '企微社群', '1V1私聊'],
  }, {
    subTitle: '用户转化',
    desc: ['新人购', '拼团购', '秒杀购', '满减购', '专属购'],
  }],
}, {
  title: '用户管理',
  isLine: true,
  icon: 'selfoperate6',
  contentInfo: [{
    subTitle: '用户管理',
    desc: ['会员体系', '生命周期', '回访提醒', '群组管理', '在职继承', '离职继承'],
  }, {
    subTitle: '数据驱动',
    desc: ['数据提炼', '数据分析', '数据大屏', '数据驱动'],
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
    <div
      mt-75px flex gap-22px
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
    font: 400 40px "PingFang SC";
  }
}
</style>
