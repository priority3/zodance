<script setup lang='ts'>
const { icon, title } = defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div
    class="card-container"
    flex="~ col" items-center justify-center
  >
    <self-svgicon :name="icon" text-6xl />
    <h1 mt-16px>
      {{ title }}
    </h1>
    <!-- <p mt-10px>
      {{ desc }}
    </p> -->
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  h1{
    color: rgba(134,144,156,1);
    font: 400 20px "PingFang SC";
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 14px "PingFang SC";
    display: -webkit-box;
    width: 285px;
    height: 90px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
}
</style>
