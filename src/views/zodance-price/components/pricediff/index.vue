<script setup lang='ts'>
import { ref } from 'vue'
import common from './common.vue'
const info = [
  {
    title: '小零同学联合运营',
    type: 'start',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        titleIcon: 'brand-tag',
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['营销海报'],
        }],
      },
      {
        titleIcon: 'chanel-build',
        title: '渠道构建',
        infoContext: [{
          subTitle: '私域渠道构建',
          text: ['微信公众号', '微信视频号', '企业微信'],
        }],
      },
      {
        titleIcon: 'user-up',
        title: '用户增长',
        infoContext: [{
          subTitle: '公域导私域',
          text: ['包裹卡导流', '短信导流', '1V1私发导流'],
        }, {
          subTitle: '私域增长',
          text: ['助力裂变', '抽奖裂变'],
        }],
      },
      {
        titleIcon: 'user-operate',
        title: '用户运营',
        infoContext: [{
          subTitle: 'IP号运营',
          text: ['1V1问答', '节日问候', '活动提醒'],
        }, {
          subTitle: '朋友圈运营',
          text: ['每日触达', '产品种草', '活动发布'],
        }, {
          subTitle: '活动运营',
          text: ['增长活动运营', '转化活动运营'],
        }],
      },
      {
        titleIcon: 'user-change',
        title: '用户转化',
        infoContext: [{
          subTitle: '转化触达',
          text: ['企微群发', '朋友圈种草'],
        }],
      },
    ],
  }, {
    title: '小零同学联合运营',
    type: 'basic',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    contentInfo: [
      {
        titleIcon: 'brand-tag',
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌营销素材设计',
          text: ['营销海报', '品牌故事', '产品图册'],
        }],
      },
      {
        titleIcon: 'chanel-build',
        title: '渠道构建',
        infoContext: [{
          subTitle: '私域渠道构建',
          text: ['微信公众号', '微信视频号', '企业微信'],
        }],
      },
      {
        titleIcon: 'user-up',
        title: '用户增长',
        infoContext: [{
          subTitle: '公域导私域',
          text: ['门店物料导流', '包裹卡导流', '短信导流', '1V1私发导流'],
        }, {
          subTitle: '私域增长',
          text: ['助力裂变', '抽奖裂变', '红包裂变'],
        }],
      },
      {
        titleIcon: 'user-operate',
        title: '用户运营',
        infoContext: [{
          subTitle: 'IP号运营',
          text: ['1V1问答', '节日问候', '活动提醒'],
        }, {
          subTitle: '社群运营',
          text: ['知识分享', '产品推介'],
        }, {
          subTitle: '朋友圈运营',
          text: ['每日触达', '产品种草', '活动发布'],
        }, {
          subTitle: '活动运营',
          text: ['增长活动运营', '转化活动运营', '促活活动运营'],
        }],
      },
      {
        titleIcon: 'user-change',
        title: '用户转化',
        infoContext: [{
          subTitle: '用户分层',
          text: ['用户标签', '用户画像', '精准营销'],
        }, {
          subTitle: '转化触达',
          text: ['企微群发', '朋友圈种草', '短信群发'],
        }, {
          subTitle: '转化活动',
          text: ['拼团购', '秒杀购', '加价购', '套餐购', '专属购'],
        }],
      },
    ],
  }, {
    title: '小零同学联合运营',
    type: 'major',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: true,
    freeCont: '赠送价值3800/年的微信小程序商城',
    contentInfo: [
      {
        titleIcon: 'brand-tag',
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌VI设计',
          text: ['品牌标识（logo）', '品牌标语（slogan）', 'IP形象'],
        }, {
          subTitle: '品牌营销素材设计',
          text: ['微信红包封面', '品牌表情包', '营销海报', '品牌故事', '产品图册'],
        }],
      },
      {
        titleIcon: 'chanel-build',
        title: '渠道构建',
        infoContext: [{
          subTitle: '公域渠道构建',
          text: ['抖音/快手', '小红书/微博', '百度/今日头条'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信公众号', '微信视频号', '企业微信', '小程序'],
        }],
      },
      {
        titleIcon: 'user-up',
        title: '用户增长',
        infoContext: [{
          subTitle: '公域增长',
          text: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名', '其它信息流广告投放'],
        }, {
          subTitle: '公域导私域',
          text: ['门店物料导流', '包裹卡导流', '短信导流', '1V1私发导流', '限时活动导流', '一物一码导流'],
        }, {
          subTitle: '私域增长',
          text: ['助力裂变', '抽奖裂变', '红包裂变', '游戏裂变', '任务裂变'],
        }],
      },
      {
        titleIcon: 'user-operate',
        title: '用户运营',
        infoContext: [{
          subTitle: 'IP号运营',
          text: ['1V1问答', '节日问候', '活动提醒'],
        }, {
          subTitle: '社群运营',
          text: ['互动游戏', '知识分享', '产品推介'],
        }, {
          subTitle: '朋友圈运营',
          text: ['每日触达', '产品种草', '活动发布'],
        }, {
          subTitle: '活动运营',
          text: ['增长活动运营', '转化活动运营', '促活活动运营'],
        }],
      },
      {
        titleIcon: 'user-change',
        title: '用户转化',
        infoContext: [{
          subTitle: '用户分层',
          text: ['用户标签', '用户画像', '精准营销'],
        }, {
          subTitle: '转化触达',
          text: ['直播种草', '企微群发', '朋友圈种草', '短信群发'],
        }, {
          subTitle: '转化活动',
          text: ['拼团购', '秒杀购', '加价购', '套餐购', '专属购'],
        }, {
          subTitle: '会员体系',
          text: ['会员身份', '会员折扣', '会员储值', '会员积分'],
        }],
      },
      {
        titleIcon: 'data-driven',
        title: '数据驱动',
        infoContext: [{
          subTitle: '',
          text: ['数据整合', '数据分析', '数据报告', '数据大屏'],
        }],
      },
    ],
  }, {
    title: '小零同学完全托管运营',
    type: 'plus',
    titleCont: '这里是推荐语，例：适合完全没有互联网经验的商家',
    isActive: false,
    freeCont: '赠送价值3800/年的微信小程序商城',
    contentInfo: [
      {
        titleIcon: 'brand-tag',
        title: '品牌构建',
        infoContext: [{
          subTitle: '品牌VI设计',
          text: ['品牌标识（logo）', '品牌标语（slogan）', 'IP形象'],
        }, {
          subTitle: '品牌营销素材设计',
          text: ['微信红包封面', '品牌表情包', '营销海报', '品牌故事', '产品图册'],
        }],
      },
      {
        titleIcon: 'chanel-build',
        title: '渠道构建',
        infoContext: [{
          subTitle: '公域渠道构建',
          text: ['抖音/快手', '小红书/微博', '百度/今日头条'],
        }, {
          subTitle: '私域渠道构建',
          text: ['微信公众号', '微信视频号', '企业微信', '小程序'],
        }],
      },
      {
        titleIcon: 'user-up',
        title: '用户增长',
        infoContext: [{
          subTitle: '公域增长',
          text: ['朋友圈广告投放', '抖音/快手广告投放', '搜索引擎排名', '其它信息流广告投放'],
        }, {
          subTitle: '公域导私域',
          text: ['门店物料导流', '包裹卡导流', '短信导流', '1V1私发导流', '限时活动导流', '一物一码导流'],
        }, {
          subTitle: '私域增长',
          text: ['助力裂变', '抽奖裂变', '红包裂变', '游戏裂变', '任务裂变'],
        }],
      },
      {
        titleIcon: 'user-operate',
        title: '用户运营',
        infoContext: [{
          subTitle: 'IP号运营',
          text: ['1V1问答', '节日问候', '活动提醒'],
        }, {
          subTitle: '社群运营',
          text: ['互动游戏', '知识分享', '产品推介'],
        }, {
          subTitle: '朋友圈运营',
          text: ['每日触达', '产品种草', '活动发布'],
        }, {
          subTitle: '活动运营',
          text: ['增长活动运营', '转化活动运营', '促活活动运营'],
        }],
      },
      {
        titleIcon: 'user-change',
        title: '用户转化',
        infoContext: [{
          subTitle: '用户分层',
          text: ['用户标签', '用户画像', '精准营销'],
        }, {
          subTitle: '转化触达',
          text: ['直播种草', '企微群发', '朋友圈种草', '短信群发'],
        }, {
          subTitle: '转化活动',
          text: ['拼团购', '秒杀购', '加价购', '套餐购', '专属购'],
        }, {
          subTitle: '会员体系',
          text: ['会员身份', '会员折扣', '会员储值', '会员积分'],
        }],
      },
      {
        titleIcon: 'data-driven',
        title: '数据驱动',
        infoContext: [{
          subTitle: '',
          text: ['数据整合', '数据分析', '数据报告', '数据大屏'],
        }],
      },
    ],
  },
]
const maxHeight = ref<number>(0)
const modal = ref<MODAL | null>(null)
</script>

<template>
  <div
    flex="~ col" items-center gap-30px flex-wrap w-full class="price-container"
  >
    <div
      class="w-9/10" my-0 mx-auto
      flex justify-around flex-wrap
    >
      <template
        v-for="item in info"
        :key="item.type"
      >
        <common
          v-model:max-height="maxHeight"
          :title="item.title"
          :is-active="item.isActive"
          :content-info="item.contentInfo"
          :type="item.type as any"
          :title-cont="item.titleCont"
          :free-cont="item?.freeCont"
        />
      </template>
    </div>
    <self-button
      type="small"
      style="height: 48px;min-width:224px;width:15%;"
      :text-style="{ font: `500 24px 'OPPSSans'` }"
      mt-110px
      @click="modal && modal.setShowModal()"
    >
      立即咨询
    </self-button>
    <base-modal ref="modal" />
  </div>
</template>

<style scoped lang='scss'>
.price-container{
  width: 1440px;
  margin: 0 auto;
}
</style>
