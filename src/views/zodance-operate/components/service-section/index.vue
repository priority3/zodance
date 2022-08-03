<script setup lang="ts">
import { ref } from 'vue'
import { useAnimation } from '@/hooks/useAnimation'
const firstCardInfo = [{
  text1: '与品牌方',
  text2: '对接需求',
}, {
  text1: '制定',
  text2: '战略规划',
}, {
  text1: '确认合作',
  text2: '模式并签约',
}, {
  text1: '平台',
  text2: '渠道搭建',
}, {
  text1: '定制化',
  text2: '私域方案输出',
}]
const secondCardInfo = [{
  text1: '与品牌方',
  text2: '团队密切协作',
}, {
  text1: '运营方案',
  text2: '落地执行',
}, {
  text1: '复盘',
  text2: '分析沉淀',
}, {
  text1: '迭代升级',
  text2: '扩大规模',
}, {
  text1: '解决需求',
  text2: '合作共赢',
}]
const cardFirst = ref(null)
const cardSecond = ref(null)
useAnimation(cardFirst)
useAnimation(cardSecond)
</script>

<template>
  <div h-600px flex="~ col" items-center bg="#F8FEFF" pt-40px>
    <h1 text="40px" font-400>
      我们的服务流程
    </h1>
    <div
      class="first" mt-58px relative w-1200px
      flex="~ col" items-center justify-center
    >
      <div class="line" />
      <div
        flex w-full gap-110px items-center justify-center
      >
        <div
          v-for="({ text1, text2 }, index) in firstCardInfo" :key="text1"
          fc relative w-130px h-130px
        >
          <div class="card-circle" fc text="white 42px" z-10>
            {{ index + 1 }}
          </div>
          <div
            ref="cardFirst" class="card show-init" fcc w-full h-full text-center color="#86909C"
            text-18px px-1px :class="[`show-delay-${index + 1}`]" z-100
          >
            <span>{{ text1 }}</span>
            <span>{{ text2 }}</span>
          </div>
        </div>
      </div>
      <div class="second" />
    </div>
    <div
      class="second" mt-58px relative w-1200px
      flex="~ col" items-center justify-center
    >
      <div class="line" />
      <div
        flex w-full gap-110px items-center justify-center
      >
        <div
          v-for="({ text1, text2 }, index) in secondCardInfo" :key="text1"
          fc relative w-130px h-130px
        >
          <div class="card-circle" fc text="white 42px" z-10>
            {{ index + 6 }}
          </div>
          <div
            ref="cardSecond" class="card show-init" fcc w-full h-full text-center color="#86909C" text-18px
            px-1px :class="[`show-delay-${index + 1}`]" z-100
          >
            <span>{{ text1 }}</span>
            <span>{{ text2 }}</span>
          </div>
        </div>
      </div>
      <div class="second" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  border-radius: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.49) 0%, rgba(255,255,255,1) 100%);
  backdrop-filter: blur(7px);
  box-shadow: 4px 4.958629131317139px 12.396573066711426px 0px rgba(62,143,255,0.2);
}
.line {
  position: absolute;
  width: 100%;
  height: 2px;
  top: 50%;
  left: 0;
  background-color: rgba(143,192,249,1);
}
.first > .line::before {
  content: "";
  position: absolute;
  left: 0;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: rgba(143,192,249,1);
}
.second > .line::after {
  content: "";
  position: absolute;
  right: -20px;
  top: -7px;
  width: 0;
  height: 0;
  border: 8px solid transparent;
  border-right: 12px solid transparent;
  border-left: 12px solid  rgba(143,192,249,1);
  border-radius: 0;
}

.card-circle {
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background: linear-gradient(180deg, rgba(142,235,255,0.5) 0%, rgba(62,143,255,0.5) 100%);
  position: absolute;
  top: -10px;
  left: -35px;
}
</style>
