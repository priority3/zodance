<script setup lang='ts'>
const { title, subTitle, content, price } = defineProps<{
  title: string
  subTitle: string
  content: string
  price: number
}>()
</script>

<template>
  <div
    class="card-container"
    flex items-center justify-between
  >
    <div
      class="card-title"
      flex justify-center items-center flex-none
    >
      <h1>{{ title }}</h1>
    </div>
    <div flex-auto ml-20px mr-20px>
      <h2>{{ subTitle }}</h2>
      <p mt-18px>
        {{ content }}
      </p>
    </div>
    <div flex="~ col" items-center flex-none mr-20px>
      <div class="card-price" mb-10px>
        ￥{{ price }}
        <span>
          /年
        </span>
      </div>
      <self-button
        type="small"
        style="width:128px;height:43px"
      >
        立即咨询
      </self-button>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  width: 100%;
  height: 150px;
  min-height: 150px;
  border: 1px solid rgba(0,0,0,.4);
  border-radius: 8px;
  .card-title{
    height: 90%;
    width: 160px;
    border-right: 1px solid rgba(0,0,0,.4);
  }
  h1{
    color: rgba(29,33,41,1);
    font:400 24px "PingFang SC";
  }
  h2{
    color: rgba(29,33,41,1);
    font:400 28px "PingFang SC";
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 20px "PingFang SC";
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .card-price{
    color: rgba(198,0,0,1);
    font: 400 28px "PingFang SC";
    span{
      font-size: 20px;
    }
  }
}
</style>
