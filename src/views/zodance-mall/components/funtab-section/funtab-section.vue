<script setup lang='ts'>
import funtab from './funtab.vue'
import quickTab from './quick-tab.vue'
import liveTab from './live-tab.vue'
import vipTab from './vip-tab.vue'
import provideTab from './provide-tab.vue'
import sellTab from './sell-tab.vue'
const info = {
  title: '100+商城功能，助你收割流量红利',
  tabspanel: [{
    'tab-key': 'quick-tab',
    'tab-name': '快速搭建',
    'tab-component': quickTab,
  }, {
    'tab-key': 'live-tab',
    'tab-name': '直播带货',
    'tab-component': liveTab,
  }, {
    'tab-key': 'vip-tab',
    'tab-name': '会员管理',
    'tab-component': vipTab,
  }, {
    'tab-key': 'provide-tab',
    'tab-name': '营销裂变',
    'tab-component': provideTab,
  }, {
    'tab-key': 'sell-tab',
    'tab-name': '分销供货',
    'tab-component': sellTab,
  }],
}
</script>

<template>
  <div class="funtab-container" flex="~ col" items-center>
    <h1 mb-61px>
      {{ info.title }}
    </h1>
    <funtab
      :tabspanel="info.tabspanel"
    />
  </div>
</template>

<style scoped lang='scss'>
.funtab-container{
  width: 80%;
  height: 600px;
  margin: 80px auto 0 auto;
  h1{
    color: rgba(29,33,41,1);
    font: 500 36px "PingFang SC";
  }
}
</style>
