<script setup lang='ts'>
import { NTabPane, NTabs } from 'naive-ui'
const { tabspanel } = defineProps<{
  tabspanel: Array<any>
}>()
</script>

<template>
  <div class="tabs-container">
    <n-tabs
      animated
      justify-content="space-around"
      tab-style="color:black"
      size="large"
    >
      <n-tab-pane
        v-for="item in tabspanel" :key="item['tab-key']"
        :name="item['tab-key']"
        display-directive="show:lazy"
      >
        <template #default>
          <component :is="item['tab-component']" />
        </template>
        <template #tab>
          <div flex justify-center items-center gap10px>
            <div :class="item['tab-icon']" text-xl />
            <span>{{ item['tab-name'] }}</span>
          </div>
        </template>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  margin-top:22px;
  width: 100%;
  :deep(.n-tab-pane){
    padding-bottom: 20px;
    // margin-top: 20px;
  }
  :deep(.n-tabs .n-tabs-bar){
    display: none;
  }
  :deep(.n-tabs .n-tab-pane){
    padding: 0;
  }
  :deep(.n-tabs-tab-wrapper){
    width: 20%;
    height: 72px;
    justify-content: center;
    border: 1px solid rgba(0,0,0,.2);
  }
  :deep(.n-tabs-tab){
    width: 100%;
    justify-content: center;
    border-radius: 5px;
    font: 400 24px "PingFang SC";
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100%;
    justify-content: center;
    background-color: rgba(249,252,255,1);
    color: rgba(21,76,139,1) !important;
  }

}
</style>
