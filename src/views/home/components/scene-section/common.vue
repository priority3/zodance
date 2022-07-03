<script setup lang='ts'>
import { NImage } from 'naive-ui'
const { title, src } = defineProps<{
  title?: string
  src: string
}>()
</script>

<template>
  <div class="img-box">
    <h1>{{ title }}</h1>
    <div mt16px>
      <n-image
        preview-disabled
        lazy
        :src="src"
        object-fit="cover"
        width="248"
        height="400"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.img-box{
  width: 20%;
  min-width: 268px;
  height: 466px;
  padding: 0 10px;
  box-sizing: border-box;
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0 rgba(15,83,152,0.15);
  border-radius: 8px;
  h1{
    color: rgba(61,61,61,1);
    font: 400 16px "PingFang SC";
    text-align: left;
    margin: 18px 0 16px 0;
  }
}
</style>
