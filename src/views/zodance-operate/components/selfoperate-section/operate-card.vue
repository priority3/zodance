<script setup lang='ts'>
const { title, icon, contentInfo, isLine } = defineProps<{
  title: string
  isLine: boolean
  icon: string
  contentInfo: {
    subTitle: string
    desc: string[]
  }[]
}>()
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
        v-for="{ subTitle, desc } in contentInfo" :key="subTitle"
        mt-15px flex="~ col" items-center justify-start
      >
        <h2>
          {{ subTitle }}
        </h2>
        <div>
          <div v-for="item in desc" :key="item">
            <p mt-10px>
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
    position: relative;
    overflow: hidden;
    // TODO
    &::before{
      content: "";
      position: absolute;
      border-radius: inherit;
      height: 3px;
      width: 100%;
      background: linear-gradient(to right, #0B8AFA, #47DEF6);
      top: 0;
      left: 0;
    }
    h2{
      color: rgba(30,34,48,1);
      font-size: 14px;
    }
    p{
      color: rgba(134,144,156,1);
      font-size: 14px;
    }
  }
}
</style>
