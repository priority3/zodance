<script setup lang='ts'>
const { icon, title, desc } = defineProps<{
  icon?: string
  title?: string
  desc?: string
}>()
</script>

<template>
  <div
    flex justify-center items-center p-40px w-full gap-30px
    h-180px border="solid rounded-8px" class="card-container md:w-1/3"
  >
    <div>
      <self-svgicon :name="icon" text-8xl />
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
  font-weight: 500;
  font-family: "PingFang SC";
  h1{
    color: rgba(29,33,41,1);
    font-size: 22px;
  }
  p{
    color: rgba(134,144,156,1);
    font-size: 16px;
  }
}
</style>
