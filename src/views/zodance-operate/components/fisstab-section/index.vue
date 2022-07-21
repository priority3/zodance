<script setup lang='ts'>
import { ref } from 'vue'
import commonTitle from '../common-title.vue'
import card from './card.vue'
import { useAnimation } from '@/hooks/useAnimation'
import operatab1 from '@/assets/operate/operate-tab1.png'
import operatab2 from '@/assets/operate/operate-tab2.png'
import operatab3 from '@/assets/operate/operate-tab3.png'
const tabspanel = [{
  'tab-key': 'activity-tab',
  'tab-name': '活动裂变',
  'tab-src': operatab1,
}, {
  'tab-key': 'daily-tab',
  'tab-name': '日常裂变',
  'tab-src': operatab2,
}, {
  'tab-key': 'offline-tab',
  'tab-name': '线下活动',
  'tab-src': operatab3,
}]
const cardInfo = [{
  icon: 'operate-tab-card2',
  title: '拉新速度快',
  content: '运用定制化的线上裂变工具，通过客户的社交关系网，帮助企业快速提升私域池客户数',
}, {
  icon: 'operate-tab-card1',
  title: '获客成本低',
  content: '百次的裂变活动经验，对不同行业，不同企业，采用最高效的裂变方式，降低企业的获客成本',
}, {
  icon: 'operate-tab-card3',
  title: '用户体验好',
  content: '从用户看到活动，参与活动，到最后下单付款，每一步都给到用户最丝滑的体验',
}]
const cards = ref(null)
const tab = ref(null)
useAnimation(cards, 'fade')
useAnimation(tab)
function getFirstRef(num: number) {
  return !num ? tab : undefined
}
const title = '裂变引流，低成本获客'
</script>

<template>
  <div class="tabs-container" flex="~ col" justify-center items-center>
    <div
      mt-65px class="demand-container" pb-12px
      flex="~ col" items-center justify-center
    >
      <h1>从引流到运营再到转化</h1>
      <p>小零同学提供一站式数字化运营服务</p>
      <common-title :title="title" />
    </div>
    <n-tabs
      animated
      justify-content="center"
      tab-style="color:black"
      size="large"
    >
      <n-tab-pane
        v-for="(item, index) in tabspanel" :key="item['tab-key']"
        :name="item['tab-key']"
        display-directive="show:lazy"
      >
        <template #default>
          <div
            :ref="getFirstRef(index)" :class="!index && 'show-init'"
            flex justify-center
          >
            <!-- TODO 不指定高度出现 图片抖动加载问题 应该时naive ui 内部问题 -->
            <div h-450px>
              <n-image
                preview-disabled
                :src="item['tab-src']"
              />
            </div>
          </div>
        </template>
        <template #tab>
          <div flex justify-center items-center gap10px>
            <div v-if="item['tab-icon']" :class="[item['tab-icon']]" text-xl class="active-icon" />
            <span style="font: 400 20px PingFang SC">{{ item['tab-name'] }}</span>
          </div>
        </template>
      </n-tab-pane>
    </n-tabs>
    <div flex="~ col" justify-center items-center>
      <div class="vertical-line" h-90px w-2px mt-80px />
      <div
        flex gap-60px
      >
        <div
          v-for="({ title, icon, content }) in cardInfo" :key="title" ref="cards"
          class="fade-init"
        >
          <card
            :title="title" :icon="icon" :content="content"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  margin-top:22px;
  width: 100%;
  height: 1400px;
  .demand-container{
    h1{
      color: rgba(0,0,0,1);
      font: 400 52px "PingFang SC";
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
  //
  :deep(.n-tabs-tab-wrapper){
    width: 360px;
    justify-content: center;
    .n-tabs-tab-pad{
      width: 0;
    }
  }
  :deep(.n-tabs-tab){
    width: 360px;
    justify-content: center;
    border-radius: 5px;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 360px;
    height: 40px;
    opacity: 1;
    background: rgba(248,254,255,1);
    position: relative;
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-image:linear-gradient(to right, #3E8FFF, #8EEBFF);
      top: 0;
      z-index: 100;
    }
  }

}
</style>
