<script lang='ts' setup>
import { ref } from 'vue'
import IpTab from './ip-tab.vue'
import UserTab from './user-tab.vue'
const info = {
  title: '应对复杂场景 轻松运营提效',
  subTitle: '小零针对不同企业情况提供多种运营策略',
}
const tabsPanel = [
  {
    'tab-key': 'user-tab',
    'tab-name': '用户标签',
  },
  {
    'tab-key': 'ip-tab',
    'tab-name': 'IP运营',
  },
]

const curtab = ref(tabsPanel[0]['tab-key'])

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
        v-model="curtab"
        :tabspanel="tabsPanel"
      >
        <template #content>
          <!-- <component :is="curtab" /> -->
          <user-tab v-if="curtab === tabsPanel[0]['tab-key'] " />
          <ip-tab v-if="curtab === tabsPanel[1]['tab-key'] " />
        </template>
      </self-tabs>
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
