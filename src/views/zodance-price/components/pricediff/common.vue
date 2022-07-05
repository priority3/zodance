<script setup lang='ts'>
import { computed } from 'vue'
import { bgcMap, priceMap, versionMap } from '../../constants'
const { title, type, isActive, contentInfo, titleCont } = defineProps<{
  title: string
  type: string
  titleCont: string
  isActive: boolean
  contentInfo: Array<any>
}>()
const getinfoPara = computed(() => {
  let res = ''
  type !== 'start' && (res = `联合运营${versionMap[type]}的一切，加上`)
  return res
})
const getTitlecolor = computed(() => {
  let res = 'rgba(29,33,41,1)'
  type === 'plus' && (res = 'rgba(255,209,123,1)')
  return res
})
const getTitlePara = computed(() => {
  let res = 'rgba(134,144,156,1)'
  type === 'plus' && (res = 'rgba(255,209,123,1)')
  return res
})
const getselfBtnStyle = computed(() => {
  let res = 'rgba(0,0,0,.2)'
  type === 'plus' && (res = 'rgba(255,209,123,1)')
  return {
    color: getTitlecolor,
    width: '80%',
    height: '38px',
    margin: '0 auto',
    borderColor: res,
  }
})
</script>

<template>
  <div class="common-container" :class="{ 'is-active': isActive }">
    <div
      class="common-title-box"
      :style="{ color: getTitlecolor, backgroundColor: bgcMap[type] }"
      text-center of-hidden fixed-top
    >
      <div
        class="common-title"
        flex="~ col" gap-4px mt-30px
      >
        <span
          m0
        >
          {{ title }}
        </span>
        <span
          m0
        >
          {{ versionMap[type] }}
        </span>
      </div>
      <span
        class="common-price"
        block m="10px 0"
      >
        {{ priceMap[type] }}/月
      </span>
      <self-button
        type="info"
        :style="getselfBtnStyle"
      >
        联系我们
      </self-button>
      <p
        m="8px 0"
        :style="{ color: getTitlePara }"
      >
        {{ titleCont }}
      </p>
    </div>
    <div class="conmon-info-box">
      <div
        v-if="type !== 'start'"
        flex justify-center gap-10px items-center
        m="10px 0"
      >
        <div i-carbon-arrow-left mb-3px text="xl true-gray-600" />
        <p>{{ getinfoPara }}</p>
      </div>
      <div flex="~ col">
        <template v-for="item in contentInfo" :key="item.title">
          <div>
            <h3
              border="b light-900"
              p="10px 0"
            >
              {{ item.title }}
            </h3>
            <div
              flex="~ col" justify-center items-center gap-20px mt-16px
            >
              <template v-for="it in item.infoContext" :key="it.subTitle">
                <div
                  flex="~ col" items-center justify-start
                >
                  <span
                    class="info-sub"
                  >{{ it.subTitle }}</span>
                  <div
                    v-for="text in it.text"
                    :key="text"
                    mt-16px w-full ml-100px
                    class="info-text"
                  >
                    {{ text }}
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.common-container{
  border-radius: 5px;
  box-shadow: 0 10px 20px 0 rgba(21,76,139,0.1);
  width: 20%;
  min-width: 290px;
  padding-bottom: 20px;
  .common-title-box{
    .common-title{
      font: 400 20px "PingFang SC";
    }
    .common-price{
      font: 700 20px "PingFang SC";
    }
    h1{
      font: 400 20px "PingFang SC";
    }
    p{
      font: 400 12px "PingFang SC";
    }
  }
  .conmon-info-box{
    width: 90%;
    margin: 0 auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    p{
      color: rgba(134,144,156,1);
      font:300 14px "PingFang SC";
    }
    h3{
      color: rgba(29,33,41,1);
      font: 400 18px "PingFang SC";
    }
    .info-sub{
      color: rgba(29,33,41,1);
      font: 400 16px "PingFang SC";
    }
    .info-text{
      color: rgba(29,33,41,1);
      font: 300 14px "PingFang SC";
      position: relative;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      &::after{
        content:"";
        width: 12px;
        height: 1px;
        background-color: rgba(148,158,179,1);
        position: absolute;
        left: -20px;
        top: 50%;
      }
    }
  }
}
</style>
