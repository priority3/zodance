<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useAnimation } from '@/hooks/useAnimation'
const numInfo = [{
  num: '30+',
  text: '累计合作私域代运营品牌',
}, {
  num: '100000+',
  text: '累计运营私域粉丝',
}, {
  num: '300+',
  text: '累计操盘私域运营活动',
}, {
  num: '260%',
  text: '私域GMV年增长率',
}, {
  num: '35%',
  text: '运营成本下降',
}, {
  num: '0.8元',
  text: '最低获客成本',
}]
// 数值节点
const numberAnimationInstRef = ref()
// 数值box节点 用于判断是否开始动画
const numContainer = ref(null)
onMounted(() => {
  const { isShow } = useAnimation(numContainer)
  watch(ref(isShow), (val) => {
    if (val) {
      numberAnimationInstRef.value.forEach((item) => {
        item.play()
      })
    }
  })
})
/**
 * 后端出现的值 也只会是字符串
 */
function getNumAndStr(str: string) {
  const num = Number.parseFloat(str)
  const text = str.replace(`${num}`, '')
  return {
    num,
    text,
  }
}
function getNumPrecision(num: number) {
  return num.toString().split('.')[1]?.length ?? 0
}
</script>

<template>
  <div h-540px w-full flex="~ col" items-center>
    <h1 mt-40px>
      为什么选择小零同学
    </h1>
    <div ref="numContainer" flex flex-wrap gap-50px w-1000px mt-40px>
      <template v-for="{ num, text } in numInfo" :key="num">
        <div w-300px class="item-num-box" text-center>
          <div class="num" flex items-center justify-center>
            <n-number-animation
              ref="numberAnimationInstRef"
              :active="false"
              :from="0"
              :to="getNumAndStr(num).num"
              :precision="getNumPrecision(getNumAndStr(num).num)"
            />
            <span>{{ getNumAndStr(num).text }}</span>
          </div>
          <h3>{{ text }}</h3>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  color: rgba(29,33,41,1);
  font-size: 40px;
  font-weight: 400;
}
.item-num-box {
  h3 {
    color: rgba(0,0,0,1);
    font-size: 24px;
    font-weight: 400;
  }
  .num {
    color: rgba(62,143,255,1);
    font-size: 60px;
    font-weight: 400;
  }
}
</style>
