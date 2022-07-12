<script setup lang='ts'>
const { icon, title, content } = defineProps<{
  icon: string
  title: string
  content: string
}>()
</script>

<template>
  <div
    class="card-container" w-395px
    flex justify-center items-start gap-18px px-24px py-18px
  >
    <self-svgicon :name="icon" text-3xl />
    <div
      w-310px
    >
      <h1>{{ title }}</h1>
      <p mt-10px>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  position: relative;
  box-shadow: 0 4px 10px 0px rgba(5,102,187,0.1);
  &::after{
    position: absolute;
    content:'';
    height: 100%;
    width: 3px;
    background-image: linear-gradient(to bottom,#0168FE,#49E0F6);
    left: 0;
    top: 0;
  }
  h1{
    color: rgba(29,33,41,1);
    font: 400 20px "PingFang SC";
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 14px "PingFang SC";
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
  }
}
</style>
