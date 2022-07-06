<script setup lang='ts'>
import { computed, nextTick, onMounted, onUnmounted, ref, watchEffect } from 'vue'
import { bgcMap, priceMap, versionMap } from '../../constants'
import { useMallStore } from '@/store/modules/mall'
const { title, type, isActive, contentInfo, titleCont } = defineProps<{
  title: string
  type: string
  titleCont: string
  isActive: boolean
  contentInfo: Array<any>
}>()
const mall = useMallStore()

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

const titleBox = ref<HTMLElement | null>(null)
const infoBox = ref<HTMLElement | null>(null)

const scrollTop = ref<number>(0)
const clientWidth = ref<number>(0)
const titleBoxTop = ref<number | undefined>(0)
const titleBoxBottom = ref<number | undefined>(0)
let titleBoxHeight = 0
const titleBoxWidth = ref<number | undefined>(0)
watchEffect(() => {
  nextTick(() => {
    titleBoxTop.value = titleBox.value?.getBoundingClientRect().top || 0
    mall.setHeight((titleBox.value?.getBoundingClientRect().top || 0) + (infoBox.value?.clientHeight || 0 + titleBoxTop.value || 0))
    titleBoxBottom.value
    = mall.maxHeight
    titleBoxHeight = titleBox.value?.clientHeight || 0
    titleBoxWidth.value = titleBox.value?.clientWidth
    clientWidth.value = window.pageXOffset || document.documentElement.clientWidth || document.body.clientWidth
  })
})
const isTop = computed(() => {
  return scrollTop.value > (titleBoxTop.value || 0) && scrollTop.value < (titleBoxBottom.value || 0)
})
function handleScroll() {
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
}
function handleResize() {
  clientWidth.value = window.pageXOffset || document.documentElement.clientWidth || document.body.clientWidth
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
const getselfBtnStyle = computed(() => {
  let res = 'rgba(0,0,0,.2)'
  type === 'plus' && (res = 'rgba(255,209,123,1)')
  return {
    color: getTitlecolor,
    width: isTop.value ? '60%' : '80%',
    height: isTop.value ? '26px' : '38px',
    margin: '0 auto',
    borderColor: res,
  }
})
function getVersionType(type: string) {
  let res = type
  if (isTop.value && type !== 'plus')
    res = `运营${res}`
  return res
}
const getTitleBoxWidth = computed(() => {
  let res = '100%'
  if (isTop.value) {
    res = '16%'
    isActive && (res = `${(clientWidth.value * 0.20 * 0.80) - 5}px`)
  }

  return res
})
</script>

<template>
  <div class="common-container" :class="{ 'is-active': isActive }" relative>
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
      :style="{ color: getTitlecolor, backgroundColor: bgcMap[type], width: getTitleBoxWidth }" text-center
      :class="[isTop ? 'common-title-box-top' : 'common-title-box']"
      of-hidden
    >
      <div
        class="common-title mt-30px"
        flex="~ col" gap-4px
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
    <div
      ref="infoBox"
      class="conmon-info-box"
      :style="{ 'padding-top': isTop ? `${titleBoxHeight}px` : 0 }"
    >
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
  box-shadow: 0 10px 20px 0 rgba(21,76,139,0.1);
  width: 20%;
  min-width: 290px;
  padding-bottom: 20px;
  border-radius:5px;
  overflow: hidden;
  box-sizing: border-box;
  .common-title-box{
    width: 100%;
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
    position:fixed;
    top: 0;
    width: 20%;
    min-width: 290px;
    opacity: 1;
    border-radius: 0 5px 5px 5px;
    z-index: 100;
    padding: 5px 0;
    .common-title{
      margin-top: 0;
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

.is-active{
  border: 5px rgba(0,97,207,1) solid;
  &.common-container{
    .common-active{
      display: block;
      position:absolute;
      top: 0;
      left: 0;
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
}
</style>
