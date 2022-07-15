<script setup lang='ts'>
import { NImage } from 'naive-ui'
import { ref } from 'vue'
const info = defineProps<{
  title: string
  content: string
  src: string
  codeSrc: string
  selfStyle?: {
    width: string
    height: string
  }
}>()
const codeInfo = ref<HTMLElement | null>(null)
function handleToShowCode() {
  if (codeInfo.value && codeInfo.value.className)
    codeInfo.value.className = `${codeInfo.value?.className} code-container-show`
}
function handleToHideCode() {
  if (codeInfo.value && codeInfo.value.className)
    codeInfo.value.className = codeInfo.value.className.split(' ')[0]
}
</script>

<template>
  <div class="card-container" relative>
    <div flex items-center gap-10px>
      <!-- <n-image
        preview-disabled
        :src="src"
      /> -->
      <!-- <i class="iconfont icon-a-Frame11090" /> -->
      <self-svgicon
        :name="src"
        :style-name="info.selfStyle"
      />
      <h1>
        {{ info.title }}
      </h1>
    </div>
    <p>
      {{ info.content }}
    </p>
    <div flex justify-end>
      <self-button
        type="primary"
        style="width:88px;height:25px;border-radius:2px"
        text-style="font:400 12px PingFang SC"
        absolute
        right-20px bottom-15px @click="handleToShowCode"
      >
        查看商城
      </self-button>
    </div>
    <div
      ref="codeInfo" top-0 absolute w-full h-full left-0 cursor-pointer
      class="code-container" flex justify-center items-center
      @click="handleToHideCode"
    >
      <div
        flex justify-around items-center gap-10px
      >
        <n-image
          preview-disabled
          :src="codeSrc"
        />
        <span>
          扫码店铺二维码
          参观小商店商城
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
// .iconfont{
//   font-size: 24px;
// }
.card-container{
  width: 30%;
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0 rgba(21,76,139,0.2);
  box-sizing: border-box;
  padding: 15px 20px 10px 20px;
  box-sizing: border-box;
  height: 210px;
  p{
    color: rgba(134,144,156,1);
    font: 400 15px "PingFang SC";
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
  .code-container{
    background-color:rgba(255,255,255,1);
    transform-origin: bottom right;
    transition: all .3s ease;
    transform: scale(0,0);
    span{
      width: 40%;
      color: rgba(61,61,61,1);
      font: 500 20px "OPPOSans";
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .code-container-show{
      transform: scale(1,1);
  }
}
</style>
