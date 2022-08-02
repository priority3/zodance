<script setup lang='ts'>
import allcoverCard1 from '@/assets/home/allcover-card1.png'
import allcoverCard2 from '@/assets/home/allcover-card2.png'
</script>

<template>
  <div
    flex="~ col" items-center justify-center w-full class="allcover-container"
  >
    <h1 class="title-linear">
      经营智能化
    </h1>
    <p mt-24px>
      数据驱动经营，助力企业成为面向未来的智能商业体
    </p>
    <div class="card" mt-45px>
      <n-image
        preview-disabled
        :src="allcoverCard1"
      />
      <span>数据管理中心</span>
    </div>
    <div class="card" mt-56px>
      <n-image
        preview-disabled
        :src="allcoverCard2"
      />
      <span>数据监控中心</span>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.allcover-container{
  background: url("/src/assets/home/allcover-bgc.png") no-repeat center;
  padding: 50px 0;
}
h1{
  font: 700 48px "PingFang SC";
}
p{
  color: rgba(134,144,156,1);
  font: 500 24px "Noto Sans SC";
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:20px;
  span{
    color: rgba(134,144,156,1);
    font: 400 20px "PingFang SC";
  }
}
</style>
