<script setup lang='ts'>
const itemMap = [{
  name: '零一商城',
  path: '',
}, {
  name: '服务价格',
  path: '',
}, {
  name: '小零运营',
  path: '',
}, {
  name: 'SaaS',
  path: '',
}, {
  name: '代理合作',
  path: '',
}, {
  name: '关于我们',
  path: '',
}]
</script>

<template>
  <header class="header-box">
    <div @click="$router.push('home')">
      logo
    </div>
    <div class="header-item-box">
      <div v-for="item in itemMap" :key="item.name" class="header-item" @click="$router.push(item.path)">
        <div class="header-item-name">
          {{ item.name }}
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang='scss'>
</style>
