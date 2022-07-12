<script setup lang='ts'>
import { NTabPane, NTabs } from 'naive-ui'
interface Tabspanel {
  'tab-key': string
  'tab-name': string
  'tab-component': any
  'tab-icon'?: string
}
const { tabspanel } = defineProps<{
  tabspanel: Array<Tabspanel>
}>()
// 为tab自定义样式
// TODO 复用性不高，需要优化
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
        :name="item['tab-key']"
        display-directive="show:lazy"
      >
        <template #default>
          <component :is="item['tab-component']" />
        </template>
        <template #tab>
          <div flex justify-center items-center gap10px>
            <div :class="[item['tab-icon']]" text-xl class="active-icon" />
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
  // 禁用默认选择到的样式
  :deep(.n-tabs .n-tabs-bar){
    display: none;
  }
  //
  :deep(.n-tabs-tab-wrapper){
    width: 142px;
    justify-content: center;
  }
  :deep(.n-tabs-tab){
    width: 100%;
    justify-content: center;
    border-radius: 5px;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100%;
    justify-content: center;
    background-color: rgba(130,192,255,1);
    border-radius: 5px;
    .active-icon{
      color:white;
    }
    span{
      color:white;
    }
  }

}
</style>
