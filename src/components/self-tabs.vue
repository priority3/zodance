<script setup lang='ts'>
// import userTab from './user-tab.vue'
// TODO 动画效果
import { ref } from 'vue'

// import ipTab from './ip-tab.vue'
const { tabspanel, modelValue } = defineProps<{
  tabspanel: Array<any>
  modelValue: string
}>()
const emits = defineEmits(['update:modelValue'])

const curtab = ref(modelValue || tabspanel[0]['tab-key'])
function handleChangeTab(item) {
  if (item['tab-key'] === curtab.value)
    return
  curtab.value = item['tab-key']
  emits('update:modelValue', item['tab-key'])
}
</script>

<template>
  <div class="tabs-container">
    <div flex justify-around items-center cursor-pointer class="tabs-header-box">
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
      <!-- <component :is="curtab" /> -->
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  margin-top:22px;
  width: 100%;
  .tabs-header-box{
    .tabs-item{
      color: rgba(29,33,41,1);
      font:400 18px "PingFang SC";
      width: 122px;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .tabs-item.active{
      background-color: rgba(130,192,255,1);
      border-radius: 5px;
    }
  }

}
</style>
