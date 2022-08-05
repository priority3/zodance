<script setup lang="ts">
import { ref } from 'vue'
import tab1bgc from '@/assets/mall/mall-banner.png'
const tabspanel = [{
  'tab-name': '获客增长',
  'tab-icon': 'tab-icon1',
  'tab-acicon': 'actab-icon1',
}, {
  'tab-name': '获客增长',
  'tab-icon': 'tab-icon1',
  'tab-acicon': 'actab-icon1',
}]
const curSelectInd = ref(0)
function changeTabActive(selectInd: number) {
  curSelectInd.value = selectInd
}
function getTabActive(num: number) {
  return tabspanel[num][num === curSelectInd.value ? 'tab-acicon' : 'tab-icon']
}
const modal = ref<MODAL>()
</script>

<template>
  <div
    h-340px w-375px fic
    md="h-995px min-w-1440px mx-auto" pt-24px
  >
    <h1
      text-18px
      md:text-36px font-500
    >
      优质产品服务助你走上财富之路
    </h1>

    <div mt-34px>
      <n-tabs
        animated type="line"
        justify-content="space-around"
        @update:value="changeTabActive"
      >
        <n-tab-pane
          v-for="(item, index) in tabspanel" :key="item['tab-key']"
          :name="index"
          display-directive="show:lazy"
        >
          <template #default>
            <div
              flex justify-center h-150px
              md="h-500px " gap-65px mt-10px md:mt-60px
            >
              <div fcc gap-15px w-110px md="gap-40px w-330px">
                <h1 font-500 text="#3D3D3D 12px" md="text-28px">
                  更高端的品牌形象店
                </h1>
                <p
                  text="#86909C 9px" md="text-24px"
                >
                  快速定制上线，100+商城功能助力企业收割流量红利
                </p>
              </div>
              <div w-180px md="w-665px">
                <self-image
                  :src="tab1bgc"
                />
              </div>
            </div>
          </template>
          <template #tab>
            <div flex="~ col" justify-center items-center gap10px>
              <self-svgicon
                :name="getTabActive(index)"
                class-name="tab-svg"
              />
              <span
                text="10px"
                md:text-20px
              >{{ item['tab-name'] }}</span>
            </div>
          </template>
        </n-tab-pane>
      </n-tabs>
    </div>
    <self-button
      type="primary"
      class="btn"
      mt-24px md:mt-80px
      @click="modal && modal.setShowModal()"
    >
      立即咨询
    </self-button>
  </div>
  <base-modal ref="modal" />
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .tab-svg{
    width: 40px;
    height: 40px;
  }
  :deep(.n-tabs.n-tabs--flex .n-tabs-nav .n-tabs-wrapper){
    width: 1250px;
  }
  :deep(.n-tabs-tab){
    width: 100px;
    justify-content: center;
    border-radius: 5px;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100px;
  }
  .btn {
    width: 202px;
    height: 56px;
    border-radius: 5px;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
    color: white;
    font-size: 28px;
  }
}
@media (max-width: 768px) {
  .tab-svg{
    width: 20px;
    height: 20px;
  }
  :deep(.n-tabs.n-tabs--flex .n-tabs-nav .n-tabs-wrapper){
    width: 375px;
  }
  :deep(.n-tabs-tab){
    width: 50px;
    justify-content: center;
    border-radius: 5px;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 50px;
  }
  .btn {
    width: 96px;
    height: 36px;
    border-radius: 5px;
    opacity: 1;
    background: linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(94,182,255,1) 100%) !important;
    color: white;
    font-size: 14px;
  }
}
:deep(.n-tabs .n-tabs-bar){
  display: none;
}

//
:deep(.n-tabs-tab-wrapper){
  .n-tabs-tab-pad{
    width: 0;
  }
}
:deep(.n-tabs-tab.n-tabs-tab--active){
    position: relative;
    color: #3E8FFF !important;
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-image:linear-gradient(to right, #3E8FFF, #8EEBFF);
      bottom: 0;
      z-index: 10;
    }
  }
</style>
