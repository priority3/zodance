<script setup lang='ts'>
import type { StrategyInfo } from '../type'
const { info } = defineProps<{
  info: StrategyInfo
}>()
</script>

<template>
  <div>
    <h1>{{ info.title }}</h1>
    <p>{{ info.content }}</p>
    <ol>
      <li v-for="item in info.arrayFun" :key="item">
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<style scoped lang='scss'>
</style>
