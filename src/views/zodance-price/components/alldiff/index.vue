<script setup lang='ts'>
import { computed, ref } from 'vue'
import { priceMap, versionMap } from '../../constants'
import collapse from './collapse.vue'
import { scrollToTop } from '@/utils'
const typeInfo = computed(() => Object.keys(versionMap))
function getVersionType(type: string) {
  let res = '运营'
  type !== 'plus' && (res += versionMap[type])
  type === 'plus' && (res = versionMap[type])
  return res
}
const modal = ref<MODAL | null>(null)
function handleToShowModal() {
  modal.value && modal.value.setShowModal()
}
</script>

<template>
  <div
    fcc w-full
  >
    <div
      fcc gap-20px
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
          flex-none fc
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
              @click="handleToShowModal"
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
    <div mt-100px fc gap-32px>
      <self-button
        type="small"
        style="background: linear-gradient(45deg, rgba(53,160,237,1) 0%, rgba(68,194,229,1) 100%);"
        h-48px w-224px rounded-4px
        :text-style="{ font: `500 24px 'OPPSSans'` }"
        @click="handleToShowModal"
      >
        立即咨询
      </self-button>
      <self-button
        h-48px w-224px rounded-4px
        :text-style="{ font: `500 24px 'OPPSSans'`, color: '#4291C5' }"
        @click="scrollToTop"
      >
        回到顶部
      </self-button>
    </div>
    <base-modal
      ref="modal"
    />
  </div>
</template>

<style scoped lang='scss'>
.all-title{
  color: #45A7E0;
  font: 700 36px "OPPOSans";
}
.all-arrow-down{
  color: #45A7E0;
}
.diff-cont-title{
  background: #DEF7FF;
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
    background: #F3FCFF;
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
}
</style>
