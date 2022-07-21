<script setup lang='ts'>
import { NImage } from 'naive-ui'
const info = defineProps<{
  title: string
  descArr: Array<string>
  image: string
}>()
</script>

<template>
  <div class="common-container" flex justify-around items-center>
    <div>
      <h1>{{ info.title }}</h1>
      <div mt-30px flex="~ col" gap-20px>
        <template v-for="item in info.descArr" :key="item">
          <p>{{ item }}</p>
        </template>
      </div>
    </div>
    <div class="quicktab-img">
      <n-image
        :src="info.image"
        preview-disabled
        width="540"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.common-container{
  font-family: "PingFang SC";
  height: 100%;
  h1{
    color: rgba(61,61,61,1);
    font-size: 28px;
    font-weight: 400;
  }
  p{
    color: rgba(134,144,156,1);
    font-size: 22px;
    font-weight: 400;
  }
}
</style>
