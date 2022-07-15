<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useAnimation } from '@/hooks/useAnimation'
import coveritem1 from '@/assets/home/allcover-item1.png'
const tabBox = [{
  title: '数据监控中心',
  desc: '实时、动态、多维度展示企业经营数据',
}, {
  title: '数据管理中心',
  desc: '全面数字化后，可通过零一跃动“洞察”后台，管理分析各经营环节数据',
}]
// const imgArr = ['/src/assets/home/allcover-item1.png', '/src/assets/home/allcover-item1.png']
const curNum = ref(0)
const curName = computed(() => {
  return curNum.value === 0 ? 'left-show' : 'right-show'
})
function isActive(num: number) {
  return curNum.value === num ? 'is-active' : ''
}
const cards = ref(null)
useAnimation(cards, 'fade')
</script>

<template>
  <div
    flex="~ col" items-center justify-center mt-140px w-full
  >
    <h1 class="title-linear">
      全域覆盖数字化，助力企业成为未来智能商业体
    </h1>
    <div
      ref="cards" flex gap="44px" mt-40px class="fade-init"
    >
      <div
        v-for="({ title, desc }, index) in tabBox" :key="title"
        class="tab-card "
        :class="isActive(index)" flex="~ col" gap-12px
        cursor-pointer justify-center items-center
        px-30px @click="curNum = index"
      >
        <h2>{{ title }}</h2>
        <p text-center>
          {{ desc }}
        </p>
      </div>
    </div>
    <div
      class="img-box" w-full h-460px mt-73px
      flex item-center justify-center pt-60px
    >
      <Transition :name="curName" mode="out-in">
        <div v-if="0 === curNum">
          <n-image
            preview-disabled
            :src="coveritem1"
          />
        </div>
        <div v-else>
          <n-image
            preview-disabled
            :src="coveritem1"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped lang='scss'>
h1{
  font: 700 48px "PingFang SC";
}
.tab-card{
  width: 400px;
  height: 140px;
  opacity: 1;
  background: rgba(255,255,255,1);
  h2{
    color: rgba(29,33,41,1);
    font: 400 32px "PingFang SC";
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 16px "PingFang SC";
  }
}
.img-box{
  background: url("/src/assets/home/allcover-bgc.png") no-repeat;
  background-size: 100% 100%;
}
.is-active{
  box-shadow: 0 4px 10px 0px rgba(62,143,255,0.15);
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right,rgb(255, 255, 255,1),rgba(255, 255, 255,1)), linear-gradient(to right,#0B8AFA, #47DEF6);
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
}
.left-show-enter-active,
.left-show-leave-active,
.right-show-enter-active,
.right-show-leave-active{
  transition: all 0.25s ease-out;
}

.left-show-enter-from {
  opacity: 0.2;
  transform: translateX(30px);
}

.left-show-leave-to {
  opacity: 0.2;
  transform: translateX(-30px);
}
.right-show-enter-from {
  opacity: 0.2;
  transform: translateX(-30px);
}

.right-show-leave-to {
  opacity: 0.2;
  transform: translateX(30px);
}
</style>
