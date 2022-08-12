<script setup lang="ts">
import { ref } from 'vue'
import { useProxyModalContext } from '../../_utils'

import tab1bgc from '@/assets/mall/mall-banner.png'
// TODO 图片内容与operate下的一致
import tab2bgc from '@/assets/operate/tab33.png'
import tab3bgc from '@/assets/proxy/proxy-tabbgc3.png'
const tabspanel = [{
  'tab-name': '获客增长',
  'tab-icon': 'proxy-tab1',
  'tab-acicon': 'proxy-actab1',
  'tab-content': {
    title: '更高端的品牌形象店',
    desc: '快速定制上线，100+商城功能助力企业收割流量红利',
    img: tab1bgc,
  },
}, {
  'tab-name': '小零运营',
  'tab-icon': 'proxy-tab2',
  'tab-acicon': 'proxy-actab2',
  'tab-content': {
    title: '更高效的数字经营模式',
    desc: '运营10万粉丝、操盘300场活动的专业私域团队，助力企业用户销量双增长',
    img: tab2bgc,
  },
}, {
  'tab-name': 'SaaS定制',
  'tab-icon': 'proxy-tab3',
  'tab-acicon': 'proxy-actab3',
  'tab-content': {
    title: '更全面的SaaS解决方案',
    desc: '专业开发团队，为企业提供个性化高品质定制开发服务',
    img: tab3bgc,
  },
}]
const curSelectInd = ref(0)
function changeTabActive(selectInd: number) {
  curSelectInd.value = selectInd
}
const showActiveTabIcon = function (num: number) {
  return tabspanel[num][num === curSelectInd.value ? 'tab-acicon' : 'tab-icon']
}

const { proxyModalEmitter } = useProxyModalContext()
</script>

<template>
  <div
    h-400px w-full fic
    md="h-910px min-w-1440px mx-auto" pt-24px
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
              flex justify-center h-150px gap-30px mt-10px
              md="h-500px gap-65px mt-60px"
            >
              <div flex flex-col justify-center gap-15px w="1/2" md="gap-40px w-330px" px-10px>
                <h1 font-500 text="#3D3D3D 12px" md="text-28px">
                  {{ item['tab-content'].title }}
                </h1>
                <p
                  text="#86909C 9px" md="text-24px leading-60px"
                >
                  {{ item['tab-content'].desc }}
                </p>
              </div>
              <div w="1/2" md="w-665px">
                <self-image
                  :src="item['tab-content'].img"
                  w-180px
                  md:w-665px
                />
              </div>
            </div>
          </template>
          <template #tab>
            <div
              flex="~ col" justify-center items-center gap10px
            >
              <self-svgicon
                :name="showActiveTabIcon(index)"
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
      mt-24px md:mt-30px
      @click="proxyModalEmitter.emit('show-modal')"
    >
      立即咨询
    </self-button>
  </div>
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
    width: 100%;
  }
  :deep(.n-tabs-tab){
    width: 100%;
    justify-content: center;
    border-radius: 5px;
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100%;
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
:deep(.n-tabs.n-tabs--line-type .n-tabs-tab:hover, .n-tabs.n-tabs--bar-type .n-tabs-tab:hover){
  color: #1F2225;
}
</style>
