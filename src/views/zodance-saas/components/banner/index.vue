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
      absolute top="227px" left="50%" flex="~ col" items-center
      translate-y="-50%" translate-x="-50%" text-white
      class="banner-content"
    >
      <h1 m0>
        零一定制
      </h1>
      <p>以更低成本更高的效率，满足商家个性化需求</p>
      <self-button
        mt-42px
        :style="{
          width: '240px',
          height: '48px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,1)',
        }"
        :text-style="{
          color: 'rgba(255,255,255,1)',
          font: '400 20px PingFang SC',
        }"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.banner-content{
  font-weight: 400;
  font-family: "PingFang SC";
  h1{
    color: rgba(255,255,255,1);
    font-size: 80px;
    font-weight: 500;
  }
  p{
    color: rgba(255,255,255,1);
    font-size: 28px;
  }
}
</style>
