<script setup lang='ts'>
import { NImage } from 'naive-ui'
const { infoHeader, src, content } = defineProps<{
  infoHeader?: string
  src?: string
  content?: string
}>()
</script>

<template>
  <div text-center h320px class="card-container">
    <n-image
      preview-disabled
      width="220"
      mode="fit"
      :src="src"
    />
    <div class="card-content">
      <h1 m0>
        {{ infoHeader }}
      </h1>
      <p mt7px>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  width: 20%;
  min-width: 220px;
  background: rgba(255,255,255,1);
  .card-content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    h1{
      color: rgba(61,61,61,1);
      font: 500 18px "PingFang SC";

    }
    p{
      color: rgba(61,61,61,1);
      font: 300 14px "PingFang SC";
    }
}
}
</style>
