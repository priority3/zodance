<script setup lang='ts'>
const { position, src, title, content } = defineProps<{
  position: string
  src: string
  title: string
  content: string
  subContent?: string
}>()
// TODO 类型约束
function getContentStyle() {
  return {
    'margin-left': position === 'start' ? '0' : '80px',
    'order': position === 'start' ? '0' : '1',
  } as any
}
</script>

<template>
  <div
    w-full
    flex gap-120px items-center justify-between
    class="card-container"
  >
    <div
      w-440px
      :style="getContentStyle()"
    >
      <h1>{{ title }}</h1>
      <p mt-16px>
        {{ content }}
      </p>
      <p>{{ subContent }}</p>
    </div>
    <n-image
      :src="src"
      preview-disabled
    />
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  text-align: left;
  font-family: "PingFang SC";
  font-weight: 400;
  h1{
    color: rgba(29,33,41,1);
    font-size: 28px;
  }
  p{
    color: rgba(78,78,78,1);
    font-size: 15px;
  }
}
</style>
