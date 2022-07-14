<script setup lang='ts'>
const tabspanel = [{
  'tab-key': '定制商城',
  'tab-name': '定制商城',
  'tab-src': '/src/assets/home/home-tab2.png',
}, {
  'tab-key': '券码核销',
  'tab-name': '券码核销',
  'tab-src': '/src/assets/home/home-tab2.png',
}, {
  'tab-key': 'PDA出入库',
  'tab-name': 'PDA出入库',
  'tab-src': '/src/assets/home/home-tab2.png',
}, {
  'tab-key': 'AI外呼',
  'tab-name': 'AI外呼',
  'tab-src': '/src/assets/home/home-tab2.png',
}]
</script>

<template>
  <div class="tabs-container">
    <h1 text-center mb-30px>
      个性化场景
    </h1>
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
          <!-- <component :is="item['tab-component']" /> -->
          <div
            class="tab-content" h-417px
            flex justify-center items-center
          >
            <n-image
              preview-disabled
              :src="item['tab-src']"
            />
          </div>
        </template>
        <template #tab>
          <div flex justify-center items-center gap10px>
            <span>{{ item['tab-name'] }}</span>
          </div>
        </template>
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped lang='scss'>
.tabs-container{
  width: 100%;
  h1{
    color: rgba(29,33,41,1);
    font: 400 28px "PingFang SC";
  }
  :deep(.n-tab-pane){
    padding-bottom: 20px;
    // margin-top: 20px;
  }
  .tab-content{
    background-color:  rgba(208,244,255,1);
  }
  :deep(.n-tabs .n-tabs-bar){
    display: none;
  }
  :deep(.n-tabs .n-tab-pane){
    padding: 0;
  }
  :deep(.n-tabs-tab-wrapper){
    width: 145px;
    height: 60px;
    justify-content: center;
  }
  :deep(.n-tabs-tab){
    width: 100%;
    justify-content: center;
    font: 400 18px "PingFang SC";
  }
  :deep(.n-tabs-tab.n-tabs-tab--active){
    width: 100%;
    justify-content: center;
    background: rgba(208,244,255,1);
    color:rgba(72,115,192,1) !important;
  }
}
</style>
