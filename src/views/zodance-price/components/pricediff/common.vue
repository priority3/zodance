<script setup lang='ts'>
import { computed, nextTick, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { bgcMap, contentMap, priceMap, versionMap } from '../../constants'
import type { versionType } from '../../constants/type'
import { useStyle } from './_utils'
const { title, type, isActive, contentInfo, maxHeight, freeCont } = defineProps<{
  title: string
  type: versionType
  titleCont: string
  isActive: boolean
  contentInfo: Array<any>
  maxHeight: number
  freeCont?: string
}>()
const emits = defineEmits<{
  (e: 'update:maxHeight', type: number): void
}>()

// 固定元素的父盒子 实际的scrollTop以父盒子计算因为可能存在border
const titleBox = ref<HTMLElement | null>(null)
// 需要fixed元素
const infoBox = ref<HTMLElement | null>(null)
const boxContainer = ref<HTMLElement | null>(null)

const scrollTop = ref<number>(0)
const clientWidth = ref<number>(0)
const titleBoxTop = ref<number | undefined>(0)
const titleBoxBottom = ref<number | undefined>(0)

const max = ref<number>(0)
watchEffect(() => {
  emits('update:maxHeight', max.value)
  titleBoxBottom.value = maxHeight
})
nextTick(() => {
  titleBoxTop.value = boxContainer.value?.getBoundingClientRect().top || 0
  max.value = Math.max(maxHeight, 90 + (infoBox.value?.clientHeight || 0 + titleBoxTop.value || 0))
  clientWidth.value = window.pageXOffset || document.documentElement.clientWidth || document.body.clientWidth
})
// TODO failed fixed value
const titleBoxHeight = 1
const isTop = computed(() => {
  return scrollTop.value > (titleBoxTop.value || 0) && scrollTop.value < (titleBoxBottom.value || 0)
})
// fixed 达到底部 页面抖动问题
const isToBottom = computed(() => {
  return scrollTop.value >= (titleBoxBottom.value || Number.MAX_VALUE)
})

function handleScroll() {
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}
onMounted(() => {
  const windowWidth = document.documentElement.clientWidth
  // TODO 移动端下的滚动存在问题
  windowWidth > 1440 && window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const {
  getselfBtnStyle,
  getVersionType,
  getTitleBoxWidth,
  getCommonTitleTop,
  getTitlecolor,
  // getinfoPara,
  getTitleHeight,
  getTitlePara,
} = useStyle({
  type,
  isActive,
  isTop,
})
const modal = ref<MODAL | null>()
</script>

<template>
  <div
    ref="boxContainer"
    class="common-container" :class="{ 'is-active': isActive }"
    relative
  >
    <div
      display-none class="common-active" text-white
    >
      <div>
        推荐
      </div>
      <div i-carbon-thumbs-up-filled />
    </div>
    <!-- stricky top -->
    <div
      ref="titleBox"
      :style="{ color: getTitlecolor, backgroundColor: bgcMap[type], width: getTitleBoxWidth, height: getTitleHeight }" text-center
      :class="[isTop ? 'common-title-box-top' : 'common-title-box', isToBottom ? 'commmon-hidden' : '']"
      of-hidden
    >
      <div
        class="common-title"
        flex="~ col" gap-4px
        :style="{ 'margin-top': getCommonTitleTop }"
      >
        <span
          m0
        >
          {{ title }}
        </span>
        <span
          m0
        >
          {{ getVersionType(versionMap[type]) }}
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
        @click="modal && modal.setShowModal()"
      >
        联系我们
      </self-button>
      <p
        my-8px px-12px
        :style="{ color: getTitlePara }" text-start flex
      >
        {{ contentMap[type] }}
      </p>
    </div>
    <div class="conmon-info-bgc">
      <div
        ref="infoBox"
        class="conmon-info-box"
        :style="{ 'padding-top': isTop ? `${titleBoxHeight}px` : 0 }"
      >
        <div
          v-if="freeCont"
          flex justify-center gap-10px items-center
          m="10px 0"
        >
          <p>{{ freeCont }}</p>
        </div>
        <div flex="~ col">
          <template v-for="item in contentInfo" :key="item.title">
            <div>
              <h3
                border="b light-900"
                p="10px 0" flex items-center justify-start gap-8px
              >
                <!-- <div class="iconfont" :class="[item.titleIcon]" /> -->
                <self-svgicon :name="item.titleIcon" />
                <div class="common-item-title">
                  {{ item.title }}
                </div>
              </h3>
              <div
                flex="~ col" justify-center items-center gap-20px mt-16px w-full
              >
                <template v-for="it in item.infoContext" :key="it.subTitle">
                  <div
                    flex="~ col" items-center justify-center w-full
                  >
                    <span
                      class="info-sub"
                    >{{ it.subTitle }}</span>
                    <div
                      class="w-1/2 ml-20"
                    >
                      <div
                        v-for="text in it.text"
                        :key="text" mt-10px
                        class="info-text"
                      >
                        {{ text }}
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <base-modal
    ref="modal"
  />
</template>

<style scoped lang='scss'>
.common-container{
  box-shadow: 0 10px 20px 0 rgba(21,76,139,0.1);
  // width: 20%;
  width: 292px;
  min-width: 292px;
  margin-bottom: 20px;
  border-radius:5px;
  background-color: rgba(247,249,255,1);
  // overflow: hidden;
  box-sizing: border-box;
  .common-title-box{
    width: 100%;
    height: 220px;
    box-sizing: border-box;
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
  .common-title-box-top{
    position:sticky;
    top: 0;
    width: 20%;
    min-width: 290px;
    height: 90px !important;
    opacity: 1;
    border-radius: 0 5px 5px 5px;
    z-index: 100;
    padding: 5px 0;
    box-sizing: border-box;
    .common-title{
      font: 300 14px "PingFang SC";
      span:nth-child(1){
      display: none;
    }
    }
    .common-price{
      font-size: 20px;
      margin: 0;
    }
    h1{
      font: 400 20px "PingFang SC";
    }
    p{
      display: none;
    }
  }
  .commmon-hidden{
    display: none;
  }

  .conmon-info-bgc{
    height: max-content;
    width: 100%;
    padding-bottom: 20px;
  }
  .conmon-info-box{
    width: 90%;
    margin: 0 auto;
    p{
      color: rgba(29,33,41,1);
      font: 400 15px "PingFang SC";
    }
    h3{
      color: rgba(29,33,41,1);
      font: 400 18px "PingFang SC";
      .common-item-title{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }

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
        left: -25px;
        top: 50%;
      }
    }

  }
}

.is-active{
  border: 5px rgba(0,97,207,1) solid;
  &.common-container{
    .common-active{
      padding: 0;
      display: block;
      position: absolute;
      top: 0;
      left: -1px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 24px;
      background-color: rgba(0,97,207,1);
      gap: 10px;
    }

  }
  .common-title-box-top{
    min-width: 285px;
    border-top: 5px rgba(0,97,207,1) solid;
    border-right: 5px rgba(0,97,207,1) solid;
  }
  .conmon-info-box{
    width: 95%;
  }
}
</style>
