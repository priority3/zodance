<script setup lang='ts'>
import { ref } from 'vue'
import funtab from './funtab.vue'
import quickTab from './quick-tab.vue'
import liveTab from './live-tab.vue'
import vipTab from './vip-tab.vue'
import provideTab from './provide-tab.vue'
import sellTab from './sell-tab.vue'
import { ModalMall } from '@/enums/modal'
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
const modal = ref<MODAL | null>(null)
</script>

<template>
  <div class="funtab-container" flex="~ col" items-center px-120px>
    <h1 mb-61px>
      {{ info.title }}
    </h1>
    <funtab
      :tabspanel="info.tabspanel"
    />
    <self-button
      type="primary"
      mt-40px w-224px h-50px rounded-4px text-24px
      style="background: linear-gradient(180deg, rgba(113,173,255,1) 0%, rgba(62,143,255,1) 100%)"
      @click="modal && modal.setShowModal()"
    >
      立即咨询
    </self-button>
    <base-modal ref="modal" :modal-info="ModalMall" />
  </div>
</template>

<style scoped lang='scss'>
.funtab-container{
  width: 1440px;
  height: 850px;
  margin: 50px auto 0 auto;
  h1{
    color: rgba(29,33,41,1);
    font: 500 36px "PingFang SC";
  }
}
</style>
