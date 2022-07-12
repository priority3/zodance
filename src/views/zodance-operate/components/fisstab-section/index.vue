<script setup lang='ts'>
import commonTitle from '../common-title.vue'
import card from './card.vue'
const tabspanel = [{
  'tab-key': 'activity-tab',
  'tab-name': '首页',
}, {
  'tab-key': 'daily-tab',
  'tab-name': '日常裂变',
}, {
  'tab-key': 'offline-tab',
  'tab-name': '线下活动',
}]
const cardInfo = [{
  icon: 'operate-tab-card1',
  title: '获客成本低',
  content: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
}, {
  icon: 'operate-tab-card2',
  title: '拉新效率高',
  content: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
}, {
  icon: 'operate-tab-card3',
  title: '活动针对性强',
  content: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
}]
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
        v-for="item in tabspanel" :key="item['tab-key']"
        :name="item['tab-key']"
        display-directive="show:lazy"
      >
        <template #default>
          <div flex justify-center>
            <n-image
              preview-disabled
              src="/src/assets/operate/operate-tab1.png"
            />
          </div>
        </template>
        <template #tab>
          <div flex justify-center items-center gap10px>
            <div v-if="item['tab-icon']" :class="[item['tab-icon']]" text-xl class="active-icon" />
            <span>{{ item['tab-name'] }}</span>
          </div>
        </template>
      </n-tab-pane>
    </n-tabs>
    <div flex="~ col" justify-center items-center>
      <div class="vertical-line" h-90px w-2px mt-80px />
      <div
        flex gap-60px
      >
        <card
          v-for="{ title, icon, content } in cardInfo" :key="title"
          :title="title" :icon="icon" :content="content"
        />
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
