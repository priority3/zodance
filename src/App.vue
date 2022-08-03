<script setup lang="ts">
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss">
// TODO naive modal
html {
  margin-right: 0 !important;
  overflow: visible !important;
}
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
@font-face {
  font-family: "YouSheBiaoTiHei";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  // unicode-range: U+000-5FF;
  src: url('./assets/font/UISDC-BiaoTiHei.ttf')  format('truetype'),;
}
</style>
