<script setup lang='ts'>
import { ref } from 'vue'
import selfTab from './self-tab.vue'
import { useAnimation } from '@/hooks/useAnimation'
const togetherIcon = [{
  icon: 'wechat-icon',
  text: '客户关系管理',
}, {
  icon: 'feishu-icon',
  text: '组织高效沟通',
}, {
  icon: 'ding-icon',
  text: '业务流程变革',
}]
const togetherIconsRef = ref(null)
const otherIconsRef = ref(null)
// TODO icon 问题 无法做循环否则导致样式问题 因为数据暂时2个 直接一个一个写
useAnimation(togetherIconsRef)
useAnimation(otherIconsRef)

const otherIcons = ['yongyou-icon', 'kingdee-icon']
function getKingClass(num: number) {
  return num === 1 ? 'kingdee-icon' : 'yongyou-icon'
}
</script>

<template>
  <div
    class="digit-container" h-870px
    flex="~ col" items-center w-full
  >
    <h1 class="title-linear">
      经营数字化
    </h1>
    <h2 mt-24px>
      打通企业经营全场景，低成本实现企业全面数字化
    </h2>
    <div
      class="digit-box" mt-60px
      flex gap-125px
    >
      <div
        w-580px h-546px
      >
        <h3>协同办公</h3>
        <p>
          主流协同工具二次开发
        </p>
        <div
          flex items-center justify-center gap-50px
        >
          <div
            v-for="({ icon, text }, index) in togetherIcon" :key="icon"
            ref="togetherIconsRef" flex="~ col" items-center class="show-init"
            :class="index ? `show-delay-${index}` : ''"
          >
            <self-svgicon
              :name="icon"
              :style="{ width: '100px', height: '100px' }"
            />
            <span>{{ text }}</span>
          </div>
        </div>
        <h3 mt-40px>
          ERP
        </h3>
        <p>打通企业现有ERP系统</p>
        <div
          flex items-center justify-center gap-100px w-full
          mt-32px
        >
          <div
            v-for="(icon, index) in otherIcons" :key="icon"
            ref="otherIconsRef" class="show-init"
          >
            <self-svgicon
              :name="icon"
              :class="[getKingClass(index)]"
            />
          </div>
        </div>
      </div>
      <div>
        <self-tab />
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.digit-container{
  h1{
    font: 700 64px "PingFang SC";
  }
  h2{
    font: 500 24px "OPPOSans";
    color: rgba(134,144,156,1);
  }
}
.digit-box {
  color: rgba(29,33,41,1);
  font-weight: 400;
  font-family: "PingFang SC";
  h3{
    font-size: 28px;
    text-align: center;
  }
  p{
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
    color: rgba(134,144,156,1);
  }
  span{
    color: rgba(134,144,156,1);
    font: 400 20px "PingFang SC";
  }
  .kingdee-icon{
    width: 200px;
    height: 90px;
  }
  .yongyou-icon{
    width: 106px;
    height: 70px;
  }
}
</style>
