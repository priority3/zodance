<script setup lang='ts'>
const { title, icon, contentInfo, isLine, mgap, tmat } = defineProps<{
  title: string
  isLine: boolean
  icon: string
  contentInfo: {
    subTitle: string
    desc: string[]
  }[]
  mgap?: number
  tmat?: number
}>()
function getTitleMargin(num: number) {
  let res = 'margin-top:20px'
  num && (res = `margin-top:${tmat}px`)
  return res
}
</script>

<template>
  <div
    class="card-container"
    flex="~ col" items-center justify-start
  >
    <div relative flex justify-center items-center gap-8px>
      <div v-if="isLine" class="hor-line" absolute />
      <self-svgicon :name="icon" text-3xl />
      <h1>
        {{ title }}
      </h1>
    </div>
    <div
      class="content-box" mt-20px
      flex="~ col" items-center justify-start
    >
      <div
        v-for="({ subTitle, desc }, index) in contentInfo" :key="subTitle"
        :style="getTitleMargin(index)" flex="~ col" items-center justify-start
      >
        <h2>
          {{ subTitle }}
        </h2>
        <div flex="~ col" items-center>
          <div v-for="item in desc" :key="item">
            <p :style="{ 'margin-top': `${mgap}px` }">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  font-weight: 400;
  font-family: "PingFang SC";
  h1{
    color: rgba(29,33,41,1);
    font-size: 20px;
  }
  .hor-line{
    height: 2px;
    width: 60px;
    background-color: rgba(134,144,156,1);
    left: -60%;
  }
  .content-box{
    width: 180px;
    height: 650px;
    border-radius: 8px;
    box-shadow: 0 4px 4px 0px rgba(5,102,187,0.25);
    background-color: #fff;
    box-sizing: border-box;
    border: 2px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(to right,#fff,#fff), linear-gradient(to right,#0B8AFA, #47DEF6);
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    h2{
      color: rgba(30,34,48,1);
      font-size: 14px;
      font-weight: 545;
    }
    p{
      color: rgba(134,144,156,1);
      font-size: 14px;
    }
  }
}
</style>
