<script setup lang='ts'>
import { computed } from 'vue'
import { bgcMap, contentMap, priceMap, versionMap } from '../../constants'
import type { versionType } from '../../constants/type'
import { usePriceModalContext } from '../../_utils'
import { isBorT, useStyle } from './price_utils'
const { title, type, isActive, contentInfo, freeCont } = defineProps<{
  title: string
  type: versionType
  titleCont: string
  isActive: boolean
  contentInfo: Array<any>
  freeCont?: string
}>()
const isTop = computed(() => isBorT.isTop)
const isBottom = computed(() => isBorT.isBottom)
const {
  getselfBtnStyle,
  getVersionType,
  getCommonTitleTop,
  getTitlecolor,
  getTitlePara,
  // 为了推荐状态下的样式调整 高度和宽度误差
  getTitleBoxWidth,
  getTitleHeight,
} = useStyle({
  type,
  isActive,
  isTop,
})
const { priceModalEmitter } = usePriceModalContext()
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
    <div
      ref="titleBox"
      :style="{
        color: getTitlecolor,
        background: bgcMap[type],
        width: getTitleBoxWidth,
        height: getTitleHeight,
      }" text-center
      :class="[isTop ? 'common-title-box-top' : 'common-title-box', isBottom ? 'commmon-hidden' : '']"
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
        @click="priceModalEmitter.emit('show-modal')"
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
        v-if="freeCont"
        flex justify-center items-center text-16px
        my="10px" bg="#32C0F7" h-42px text-white
      >
        <p>{{ freeCont }}</p>
      </div>
      <div
        ref="infoBox"
        class="conmon-info-box"
        :style="{ 'padding-top': isTop ? `1px` : 0 }"
      >
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
                fcc gap-20px mt-16px w-full
              >
                <template v-for="it in item.infoContext" :key="it.subTitle">
                  <div
                    fcc w-full
                  >
                    <span
                      class="info-sub"
                    >{{ it.subTitle }}</span>
                    <div
                      class="w-1/2 ml-80px"
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
</template>

<style scoped lang='scss'>
.common-container{
  box-shadow: 0 10px 20px 0 rgba(21,76,139,0.1);
  // width: 20%;
  width: 292px;
  min-width: 292px;
  margin-bottom: 20px;
  border-radius:5px;
  // overflow: hidden;
  box-sizing: border-box;
  background-color: #fff;
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
    box-sizing: border-box;
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
  border: 5px #32C0F7 solid;
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
      background-color: #32C0F7;
      gap: 10px;
    }

  }
  .common-title-box-top{
    min-width: 285px;
    border-top: 5px #32C0F7 solid;
    border-right: 5px #32C0F7 solid;
  }
  .conmon-info-box{
    width: 95%;
  }
}
</style>
