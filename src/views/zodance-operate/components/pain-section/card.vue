<script setup lang='ts'>
const { icon, title, desc } = defineProps<{
  icon?: string
  title?: string
  desc?: string
}>()
</script>

<template>
  <div
    flex justify-start items-center gap-12px w-360px h-120px pl-10px
    border="solid rounded-8px" class="card-container"
  >
    <div>
      <self-svgicon :name="icon" :style-name="{ width: '60px', height: '60px' }" />
    </div>
    <div
      flex="~ col" items-start justify-center gap-10px
    >
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0px rgba(5,102,187,0.15);
  font-family: "PingFang SC";
  box-sizing: border-box;
  h1{
    color: rgba(29,33,41,1);
    font-size: 20px;
    font-weight: 400;
  }
  p{
    color: rgba(134,144,156,1);
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
