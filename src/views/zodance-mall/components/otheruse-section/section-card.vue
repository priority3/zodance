<script setup lang='ts'>
import { NImage } from 'naive-ui'
const info = defineProps<{
  title: string
  content: string
  src: string
}>()
</script>

<template>
  <div class="card-container">
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
      >
        查看商城
      </self-button>
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
}
</style>
