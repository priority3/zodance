<script setup lang='ts'>
import common from './common.vue'
import tab11 from '@/assets/operate/tab11.png'
import tab12 from '@/assets/operate/tab12.png'
import tab13 from '@/assets/operate/tab13.png'
import tab21 from '@/assets/operate/tab21.png'
import tab22 from '@/assets/operate/tab22.png'
import tab23 from '@/assets/operate/tab23.png'
import tab31 from '@/assets/operate/tab31.png'
import tab32 from '@/assets/operate/tab32.png'
import tab33 from '@/assets/operate/tab33.png'
import tab41 from '@/assets/operate/tab41.png'
import tab42 from '@/assets/operate/tab42.png'
import tab43 from '@/assets/operate/tab43.png'
const titleInfo = [{
  text: '获客增长',
  icon: 'tabtitleicon',
}, {
  text: '留存促活',
  icon: 'tabtitleicon',
}, {
  text: '运营转化',
  icon: 'tabtitleicon',
}, {
  text: '数据分析',
  icon: 'tabtitleicon',
}]
const tabspanel = [{
  'tab-name': '活动裂变',
  'tab-icon': 'tab-icon1',
  'tab-acicon': 'actab-icon1',
}, {
  'tab-name': '留存促活',
  'tab-icon': 'tab-icon2',
  'tab-acicon': 'actab-icon2',
}, {
  'tab-name': '运营转化',
  'tab-icon': 'tab-icon3',
  'tab-acicon': 'actab-icon3',
}, {
  'tab-name': '数据分析',
  'tab-icon': 'tab-icon4',
  'tab-acicon': 'actab-icon4',
}]
const contentInfo = [{
  card: [{
    icon: 'tab1icon1',
    acicon: 'actab1icon1',
    title: '门店导流',
    desc: '定制门店导流活动，高效沉淀私域用户',
  }, {
    icon: 'tab1icon2',
    acicon: 'actab1icon2',
    title: '红包裂变',
    desc: '分享越多，获得的红包越大，快速增长裂变',
  }, {
    icon: 'tab1icon3',
    acicon: 'actab1icon3',
    title: '活动裂变',
    desc: '参与抽奖/助力拼团等裂变活动精准获客',
  }],
  src: [tab11, tab12, tab13],
}, {
  card: [{
    icon: 'tab2icon1',
    acicon: 'actab2icon1',
    title: '私域搭建',
    desc: '基于微信平台搭建私域用户留存矩阵/阵地',
  }, {
    icon: 'tab2icon2',
    acicon: 'actab2icon2',
    title: '内容建设',
    desc: '定制内容素材，提高用户品牌认知',
  }, {
    icon: 'tab2icon3',
    acicon: 'actab2icon3',
    title: '互动促活',
    desc: '通过社群/朋友圈/1对1互动提升用户活跃度',
  }],
  src: [tab21, tab22, tab23],
}, {
  card: [{
    icon: 'tab3icon1',
    acicon: 'actab3icon1',
    title: '日常运营',
    desc: '通过节庆日海报、企业红包、早晚安等日常运营提升用户黏度',
  }, {
    icon: 'tab3icon2',
    acicon: 'actab3icon2',
    title: 'IP号运营',
    desc: '为打造IP影响力，通过IP号运营引导粉丝成交',
  }, {
    icon: 'tab3icon3',
    acicon: 'actab3icon3',
    title: '活动运营',
    desc: '通过新人福利/抽奖/拼团/秒杀等活动运营提升用户转化率',
  }],
  src: [tab31, tab32, tab33],
}, {
  card: [{
    icon: 'tab4icon1',
    acicon: 'actab4icon1',
    title: '用户标签',
    desc: '支持分析多个渠道数据，帮助监测各渠道的活动效果',
  }, {
    icon: 'tab4icon2',
    acicon: 'actab4icon2',
    title: '数据分析',
    desc: '辅助运营者及时调整和优化运营策略',
  }, {
    icon: 'tab4icon3',
    acicon: 'actab4icon3',
    title: '活动复盘',
    desc: '判断活动的好坏情况，方便提炼可复用/可优化的点',
  }],
  src: [tab41, tab42, tab43],

}]
let curSelectInd = 0
function changeTabActive(selectInd: number) {
  curSelectInd = selectInd
}
function getTabActive(num: number) {
  return tabspanel[num][num === curSelectInd ? 'tab-acicon' : 'tab-icon']
}
</script>

<template>
  <div
    class="tabs-container" flex="~ col" justify-center items-center
    w-full h-800px
  >
    <div
      class="demand-container"
      flex="~ col" items-center justify-center
    >
      <h1>小零同学提供私域运营全链路解决方案</h1>
      <div class="title-info" flex justify-center items-center>
        <template v-for="({ text, icon }, index) in titleInfo" :key="text">
          <span>{{ text }}</span>
          <self-svgicon
            v-if="index !== titleInfo.length - 1"
            :name="icon" :style-name="{ width: '22px', height: '22px', margin: '0 10px' }"
          />
        </template>
      </div>
    </div>
    <div mt-34px>
      <n-tabs
        animated type="line"
        justify-content="space-around"
        size="large" trigger="hover"
        @update:value="changeTabActive"
      >
        <n-tab-pane
          v-for="(item, index) in tabspanel" :key="item['tab-key']"
          :name="index"
          display-directive="show:lazy"
        >
          <template #default>
            <div
              flex justify-center
            >
              <div>
                <common :card="contentInfo[index].card" :src="contentInfo[index].src" />
              </div>
            </div>
          </template>
          <template #tab>
            <div flex="~ col" justify-center items-center gap10px>
              <self-svgicon :name="getTabActive(index)" :style="{ width: '40px', height: '40px' }" />
              <span style="font: 400 20px PingFang SC">{{ item['tab-name'] }}</span>
            </div>
          </template>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  .title-info{
    color: rgba(167,167,167,1);
    font-size: 22px;
    font-weight: 300;
    font-family: "PingFang SC";
  }
  .demand-container{
    h1{
      color: rgba(29,33,41,1);
      font-size: 40px;
      font-weight: 400;
      font-family: "PingFang SC";
    }
    p{
      color: rgba(134,144,156,1);
      font: 400 20px "PingFang SC";
    }
  }
  :deep(.n-tab-pane){
    padding-bottom: 20px;
    padding-top: 48px;
  }
  // 禁用默认选择到的样式
  :deep(.n-tabs .n-tabs-bar){
    display: none;
  }
  :deep(.n-tabs.n-tabs--flex .n-tabs-nav .n-tabs-wrapper){
    width: 1250px;
  }
  //
  :deep(.n-tabs-tab-wrapper){
    .n-tabs-tab-pad{
      width: 0;
    }
  }
  :deep(.n-tabs-tab){
    width: 100px;
    justify-content: center;
    border-radius: 5px;
    color: #86909C;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100px;
    opacity: 1;
    position: relative;
    color: #3E8FFF;
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-image:linear-gradient(to right, #3E8FFF, #8EEBFF);
      bottom: 0;
      z-index: 100;
    }
  }

}
</style>
