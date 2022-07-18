<script setup lang='ts'>
import { NCollapse, NCollapseItem } from 'naive-ui'
const info = [
  {
    title: '定制微信小程序商城',
    funArr: [
      {
        subText: '商城风格定制',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '商品管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '订单管理',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '基础营销',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '分销推广',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '在线客服',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '数据看板',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '品牌构建',
    funArr: [
      {
        text: '品牌VI设计',
        subText: '品牌标识LOGO',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '品牌标语Slogan',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: 'IP形象',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '品牌营销素材设计',
        subText: '营销海报',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '',
        subText: '品牌故事',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '',
        subText: '产品图册',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '',
        subText: '微信红包封面',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '',
        subText: '品牌表情包',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '渠道构建',
    funArr: [
      {
        text: '公域渠道构建',
        subText: '抖音&快手',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '小红书&微博',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '百度&今日头条',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '私域渠道构建',
        subText: '微信公众',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '',
        subText: '微信视频号',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '',
        subText: '企业微信',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '',
        subText: '小程序',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '用户增长',
    funArr: [
      {
        text: '公域增长',
        subText: '朋友圈广告投放',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '抖音/快手广告投放',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '搜索引擎排名优化',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '其它信息流广告投放',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '公域导私域',
        subText: '包裹卡导流',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '短信导流',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '1V1私发导流',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '门店物料导流',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '限时活动导流',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '一物一码导流',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '私域增长',
        subText: '助力裂变',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '抽奖裂变',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '红包裂变',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '游戏裂变',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '任务裂变',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '用户运营',
    funArr: [
      {
        text: 'IP号运营',
        subText: '1V1问答',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '节日问答',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '活动提醒',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '朋友圈运营',
        subText: '每日触达',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '产品种草',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '活动发布',
        isAccord: [1, 1, 1, 1],
      },
      {
        text: '社区运营',
        subText: '知识分享',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '互动游戏',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '产品推介',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '活动运营',
        subText: '增长活动运营',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '促活活动运营',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '转化活动运营',
        isAccord: [1, 1, 1, 1],
      },
    ],
  },
  {
    title: '用户转化',
    funArr: [
      {
        text: '用户分层',
        subText: '用户标签',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '用户画像',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '精准营销',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '转化触达',
        subText: '短信群发',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '企微群发',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '朋友圈种草',
        isAccord: [1, 1, 1, 1],
      },
      {
        subText: '直播种草',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '转化活动',
        subText: '拼团购',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '秒杀购',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '加价购',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '套餐购',
        isAccord: [0, 1, 1, 1],
      },
      {
        subText: '专属购',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '会员体系',
        subText: '会员身份',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '会员折扣',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '会员储值',
        isAccord: [0, 0, 1, 1],
      },
      {
        subText: '会员积分',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
  {
    title: '数据驱动',
    funArr: [
      {
        text: '',
        subText: '数据整合',
        isAccord: [0, 0, 1, 1],
      },
      {
        text: '',
        subText: '数据分析',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '',
        subText: '数据报告',
        isAccord: [0, 1, 1, 1],
      },
      {
        text: '',
        subText: '数据大屏',
        isAccord: [0, 0, 1, 1],
      },
    ],
  },
]
</script>

<template>
  <div>
    <n-collapse arrow-placement="right">
      <template v-for="({ title, funArr }, idx) in info" :key="title">
        <n-collapse-item :name="idx + 1">
          <template #header>
            <div class="n-coltitle" pl-24px>
              {{ title }}
            </div>
          </template>
          <template v-for="{ text, subText, isAccord } in funArr" :key="text">
            <div flex h-70px justify-center items-center flex-auto>
              <div
                class="coll-item-title"
                flex-none flex justify-around items-center
              >
                <div
                  class="coll-item-text"
                >
                  {{ text }}
                </div>
                <div
                  class="coll-item-subtext"
                >
                  {{ subText }}
                </div>
              </div>
              <template v-for="(accord, idx) in isAccord" :key="idx">
                <div class="coll-item-cont" flex justify-center items-center>
                  <div v-if="accord" i-carbon-checkmark :idx="idx" text-2xl text-green-700 />
                  <div v-else i-carbon-close text-2xl text-red-700 />
                </div>
              </template>
            </div>
          </template>
        </n-collapse-item>
      </template>
    </n-collapse>
  </div>
</template>

<style scoped lang='scss'>
.n-coltitle{
  color: rgba(29,33,41,1);
  font:400 20px "PingFang SC";
}
.coll-item-title{
  width: 24%;
  // min-width: 360px;
  color: rgba(30,34,48,1);
  font: 400 14px "PingFang SC";
  .coll-item-text{
    width: 40%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .coll-item-subtext{
    width: 60%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}
.coll-item-cont{
  // min-width: 160px;
  width: 19%;
}
:deep(.n-collapse .n-collapse-item:not(:first-child)){
  border: 0;
}
:deep(.n-collapse-item__header){
  height: 40px;
  box-sizing: border-box;
  background: rgba(247,249,255,1);
  box-shadow: 0 4px 10px 0 rgba(21,76,139,0.1);
  padding: 6px 0 !important;
  border-radius: 8px;
}
</style>
