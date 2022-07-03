<script setup lang='ts'>
// import userTab from './user-tab.vue'
// TODO 动画效果
import { NTabPane, NTabs } from 'naive-ui'
// import ipTab from './ip-tab.vue'
const { tabspanel } = defineProps<{
  tabspanel: Array<any>
}>()

// function handleChangeTab(item) {
//   if (item['tab-key'] === curtab.value)
//     return
//   curtab.value = item['tab-key']
//   emits('update:modelValue', item['tab-key'])
// }
</script>

<template>
  <div class="tabs-container">
    <!-- <div flex justify-around items-center cursor-pointer class="tabs-header-box">
      <template v-for="item in tabspanel" :key="item['tab-key']">
        <div
          class="tabs-item"
          :class="[{ active: item['tab-key'] === curtab }]"
          @click="handleChangeTab(item)"
        >
          {{ item['tab-name'] }}
        </div>
      </template>
    </div>
    <div mt4>
      <transition name="fade">
        <slot name="content" />
      </transition>
    </div> -->
    <n-tabs
      animated
      justify-content="space-around"
      tab-style="color:black"
      size="large"
    >
      <n-tab-pane
        v-for="item in tabspanel" :key="item['tab-key']"
        :name="item['tab-key']" :tab="item['tab-name']"
        display-directive="show:lazy"
      >
        Wonderwall
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  margin-top:22px;
  width: 100%;
  :deep(.n-tabs .n-tabs-bar){
    display: none;
  }
  :deep(.n-tabs-tab-wrapper){
    width: 142px;
    justify-content: center;
  }
  :deep(.n-tabs-tab){
    width: 100%;
    justify-content: center;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100%;
    justify-content: center;
    background-color: rgba(130,192,255,1);
    border-radius: 5px;
  }

}
</style>
