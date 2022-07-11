<script setup lang='ts'>
import { computed } from 'vue'
import { priceMap, versionMap } from '../../constants'
import collapse from './collapse.vue'
const typeInfo = computed(() => Object.keys(versionMap))
function getVersionType(type: string) {
  let res = '运营'
  type !== 'plus' && (res += versionMap[type])
  type === 'plus' && (res = versionMap[type])
  return res
}
</script>

<template>
  <div flex="~ col" w-full justify-center items-center>
    <div
      flex="~ col" justify-center items-center gap-20px
      mt-90px w-full
    >
      <div class="all-title">
        比较所有版本
      </div>
      <div i-carbon-arrow-down text-5xl class="all-arrow-down" />
    </div>
    <div class="diff-cont-container" mt-74px pb-30px w-full>
      <div
        class="diff-cont-title"
        flex
      >
        <div
          flex-none flex justify-center items-center
          class="service-cont"
        >
          服务内容
        </div>
        <template v-for="item in typeInfo" :key="item">
          <div
            flex="~ col" items-center justify-center
            class="servic-cont-info" flex-auto
          >
            <div>
              {{ getVersionType(item) }}
            </div>
            <div>
              {{ priceMap[item] }}元/月
            </div>
            <self-button
              type="small"
              style="width:60%;height:28px;border-radius:0"
              mt-14px
            >
              立即咨询
            </self-button>
          </div>
        </template>
      </div>
      <div mt-20px>
        <collapse />
      </div>
    </div>
    <self-button
      type="small"
      style="height: 48px;min-width:224px;width:15%;"
      :text-style="{ font: `500 24px 'OPPSSans'` }"
      mt-100px
    >
      立即咨询
    </self-button>
  </div>
</template>

<style scoped lang='scss'>
.all-title{
  color: rgba(36,95,167,1);
  font: 700 36px "OPPOSans";
}
.all-arrow-down{
  color: rgba(36,95,167,1);
}
.diff-cont-title{
  background: rgba(233,239,255,1);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  height: 106px;
  width: 100%;
  .service-cont{
    width: 24%;
    // min-width: 360px;
    color: rgba(30,34,48,1);
    font: 700 20px "PingFang SC";
    letter-spacing: 4px;
  }
  // 奇数
  .servic-cont-info{
    // min-width: 160px;
    width: 19%;
    &:nth-child(even){
    background: rgba(247,249,255,1);
    }
    div:nth-child(1){
      color: rgba(30,34,48,1);
      font: 300 12px "PingFang SC";
    }
    div:nth-child(2){
      color: rgba(30,34,48,1);
      font: 700 20px "PingFang SC";
    }
  }
  // .servic-cont-info:nth-child(even){
  //   background: rgba(247,249,255,1);
  // }
}
</style>
