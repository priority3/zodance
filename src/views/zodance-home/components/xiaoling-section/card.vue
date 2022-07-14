<script setup lang='ts'>
const { title, contentInfo, width = '100%' } = defineProps<{
  title: string
  contentInfo: Array<{
    subTitle: string
    desc: Array<string>
  }>
  width: string
}>()
</script>

<template>
  <div
    class="card-container" :style="{ width: `${width}` }"
    flex items-center gap-35px
  >
    <h1>{{ title }}</h1>
    <div
      flex justify-between items-center w-full
    >
      <div
        v-for="{ subTitle, desc } in contentInfo" :key="subTitle"
      >
        <h2>{{ subTitle }}</h2>
        <div flex="~ col" mt-6px gap-10px>
          <span v-for="text in desc" :key="text">
            {{ text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  border-radius: 10px 0px 0px 0;
  background: rgba(248,255,255,1);
  box-shadow: 0 4px 20px 0px rgba(62,143,255,0.15);
  padding: 13px 30px;
  height: 180px;
  box-sizing: border-box;
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right,rgba(248,255,255,1),rgba(248,255,255,1)), linear-gradient(to right,#0B8AFA, #47DEF6);
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  h1{
    width: 50px;
    color: rgba(0,0,0,1);
    font: 500 32px "PingFang SC";
  }
  h2{
    color: rgba(0,0,0,1);
    font: 400 14px "PingFang SC";
  }
  span{
    color: rgba(134,144,156,1);
    font: 400 14px "PingFang SC";
  }
}
</style>
