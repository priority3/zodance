<script setup lang='ts'>
import { NImage } from 'naive-ui'
import { ref } from 'vue'
const info = defineProps<{
  title: string
  content: string
  src: string
  codeSrc: string
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
      <n-image
        preview-disabled
        :src="src"
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
        type="small"
        style="width:88px;height:25px;border-radius:0"
        @click="handleToShowCode"
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
.card-container{
  width: 30%;
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0 rgba(21,76,139,0.2);
  box-sizing: border-box;
  padding: 20px;
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
