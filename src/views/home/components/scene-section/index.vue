<script lang='ts' setup>
import IpTab from './ip-tab.vue'
import UserTab from './userlab-tab.vue'
import CommunityTab from './community-tab.vue'
import ChanelTab from './chanel-tab.vue'
import UserUpTab from './userup-tab.vue'
import UserChangeTab from './userchange-tab.vue'
const info = {
  title: '应对复杂场景 轻松运营提效',
  subTitle: '小零针对不同企业情况提供多种运营策略',
}
const tabsPanel = [
  {
    'tab-key': 'user-tab',
    'tab-name': '用户标签',
    'tab-component': UserTab,
    'tab-icon': 'i-carbon-tag',
  },
  {
    'tab-key': 'ip-tab',
    'tab-name': 'IP运营',
    'tab-component': IpTab,
    'tab-icon': 'i-carbon-user-avatar',
  },
  {
    'tab-key': 'community-tab',
    'tab-name': '社群运营',
    'tab-component': CommunityTab,
    'tab-icon': 'i-carbon-group',
  },
  {
    'tab-key': 'chanel-tab',
    'tab-name': '渠道建设',
    'tab-component': ChanelTab,
    'tab-icon': 'i-carbon-webhook',
  },
  {
    'tab-key': 'userUp-tab',
    'tab-name': '用户增长',
    'tab-component': UserUpTab,
    'tab-icon': 'i-carbon-growth',
  },
  {
    'tab-key': 'userchange-tab',
    'tab-name': '用户转化',
    'tab-component': UserChangeTab,
    'tab-icon': 'i-carbon-user-activity',
  },
]

// const curtable = 'user-tab'
</script>

<template>
  <div style="background:rgba(249,252,255,1);" w-full>
    <div class="scene-container">
      <h1 m0 mt76px>
        {{ info.title }}
      </h1>
      <h2 m0>
        {{ info.subTitle }}
      </h2>
      <self-tabs
        :tabspanel="tabsPanel"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.scene-container{
  height: 840px;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  h1{
    color: rgba(29,33,41,1);
    font:500 44px "PingFang SC";
  }
  h2{
    margin-top: 12px;
    color: rgba(29,33,41,1);
    font:400 20px "PingFang SC";
  }
}
</style>
