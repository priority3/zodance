<script setup lang='ts'>
const { icon, contentInfo, width = '100%' } = defineProps<{
  icon: string
  contentInfo: Array<{
    subTitle: string
    desc: Array<string>
  }>
  width: string
}>()
</script>

<template>
  <div
    ref="card" class="card-container"
    :style="{ width: `${width}` }" flex items-center gap-35px
  >
    <self-svgicon
      :name="icon"
      :style-name="{ width: '35px', height: '100px' }"
    />
    <div
      flex justify-between items-start w-full
    >
      <div
        v-for="{ subTitle, desc } in contentInfo" :key="subTitle" fcc
      >
        <h2>{{ subTitle }}</h2>
        <div flex="~ col" justify-between items-center mt-13px gap-10px h-100px>
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
  // border-radius: 10px 10px 0px 0;
  // background: rgba(248,255,255,1);
  // box-shadow: 0 4px 20px 0px rgba(62,143,255,0.15);
  // padding: 13px 30px;
  //
  // box-sizing: border-box;
  // border: 2px solid transparent;
  // background-clip: padding-box, border-box;
  // background-origin: padding-box, border-box;
  // background-image: linear-gradient(to right,rgba(248,255,255,1),rgba(248,255,255,1)), linear-gradient(to right,#0B8AFA, #47DEF6);
  // border-left: 0;
  // border-right: 0;
  // border-bottom: 0;
  padding: 0 30px;
  height: 160px;
  border-radius: 12px 12px 0px 0px;
  background: rgba(255,255,255,1);
  box-shadow: 0 0px 10px 0px rgba(62,143,255,0), 0px 0px 9px 0px rgba(62,143,255,0.03), 0px 0px 8px 0px rgba(62,143,255,0.1), 0px 0px 6px 0px rgba(62,143,255,0.17), 0px 0px 3px 0px rgba(62,143,255,0.2), 0px 0px 0px 0px rgba(62,143,255,0.2);
  h2{
    color: rgba(0,0,0,1);
    font: 500 14px "PingFang SC";
  }
  span{
    color: rgba(0,0,0,0.3);
    font: 400 14px "PingFang SC";
  }
}
</style>
