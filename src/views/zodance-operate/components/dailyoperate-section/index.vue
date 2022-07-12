<script setup lang='ts'>
import card from './card.vue'
const info = [{
  icon: 'dailyoperate1',
  title: '低成本获客',
  desc: '来有请运营总监讲几句需求点简述来有请运营总监讲几句需求点简述来有请运营总监讲几',
}, {
  icon: 'dailyoperate2',
  title: '高效率转化',
  desc: '来有请运营总监讲几句需求点简述来有请运营总监讲几句需求点简述来有请运营总监',
}, {
  icon: 'dailyoperate3',
  title: '忠实客户群',
  desc: '来有请运营总监讲几句需求点简述来有请运营总监讲几句需求点简述来有请运营总监讲几句',
}, {
  icon: 'dailyoperate4',
  title: '方案的执行运营',
  desc: '来有请运营总监讲几句需求点简述来有请运营总监讲几句需求点简述来有请运营总监讲几',
}]
</script>

<template>
  <div
    class="dailyoperate-container w-9/10"
    flex="~ col" justify-center items-center
    mx-auto my-0 mt-48px pb-96px
  >
    <h1>日常经营，你可能会需要这些</h1>
    <p mt-6px>
      私域运营已经成为企业经营的标配
    </p>
    <div
      flex flex-wrap justify-center gap-24px
      mt-60px
    >
      <card
        v-for="{ icon, title, desc } in info"
        :key="title" :icon="icon" :title="title" :desc="desc"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.dailyoperate-container{
  h1{
    color: rgba(29,33,41,1);
    font: 400 52px "PingFang SC";
  }
  p{
    color: rgba(167,167,167,1);
    font: 400 24px "PingFang SC";
  }
}
</style>
