<script setup lang='ts'>
</script>

<template>
  <div of-hidden w-full h-420px relative>
    <!-- <n-image
      preview-disabled
      src="/src/assets/saas/saas-banner.png"
      w-screen
    /> -->
    <img src="/src/assets/saas/saas-banner.png" mode="aspectFit|aspectFill|widthFix" w-full>
    <div
      absolute top="181px" left="50%" flex="~ col" items-center
      translate-y="-50%" translate-x="-50%" text-white
      class="banner-content"
    >
      <h1>零一定制</h1>
      <p>以更低成本更高的效率，满足商家个性化需求</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.banner-content{
  font-weight: 400;
  font-family: "PingFang SC";
  h1{
    font-size: 48px;
  }
  p{
    font-size: 18px;
  }
}
</style>
