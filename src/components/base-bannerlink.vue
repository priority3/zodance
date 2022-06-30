<script setup lang='ts'>

</script>

<template>
  <div class="link-box">
    <h1>零一商城</h1>
    <p>更高端的品牌形象</p>
    <div class="link-box-other" flex items-center gap-10px>
      <span>立即查看</span>
      <div i-carbon-arrow-right text-xl />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.link-box{
  width: 25%;
  height:120px;
  font: 400 14px "PingFang SC";
  border-radius: 5px;
  opacity: 1;
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0 rgba(15,83,152,0.15);
  padding: 12px 0 0 20px;
  cursor: pointer;
  &:hover{
    box-shadow: 0 4px 20px 0 rgba(15,83,152,0.25);
  }
  h1 {
    height: 30px;
    color: rgba(29,33,41,1);
    font-size: 20px;
    text-align: left;
    line-height: 30px;
    margin: 0;
  }
  p{
    height:24px;
    color: rgba(134,144,156,1);
    font-size: 16px;
    text-align: left;
    line-height: 24px;
  }
  .link-box-other{
    height:21px;
    color: rgba(60,132,205,1);
    font-weight: 500;
    text-align: left;
    line-height: 21px;
  }
}
</style>
