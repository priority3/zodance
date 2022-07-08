<script setup lang="ts">
</script>

<template>
  <div>
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </div>
</template>

<style>
body{
  min-width: 1440px;
}
  /* 滚动槽 */
::-webkit-scrollbar {
    background-color: transparent;
    height: 12px;
    width: 12px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    -webkit-background-clip: content-box;
    background-clip: content-box;
    opacity: 1;
    background-color: rgb(176, 176, 176);
    border-radius: 9999px;
}
</style>
