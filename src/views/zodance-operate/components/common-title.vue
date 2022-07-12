<script setup lang='ts'>
const { title } = defineProps<{
  title: string
}>()
</script>

<template>
  <div
    flex="~ col" justify-center items-center
  >
    <div class="vertical-line" mt-33px h-89px w-2px />
    <h2
      h-148px px-90px
      flex justify-center items-center
    >
      {{ title }}
    </h2>
    <div class="vertical-line" h-89px w-2px />
  </div>
</template>

<style scoped lang='scss'>
h2{
  color: rgba(12,140,250,1);
  font: 500 38px "PingFang SC";
  border-radius: 80px;
  opacity: 1;
  border: 2px solid rgba(225,225,225,1);
}
</style>
