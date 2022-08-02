<script setup lang='ts'>
import { ref } from 'vue'
import { ModalMall } from '@/enums/modal'
const { title, subTitle, content, price, desc } = defineProps<{
  title: string
  subTitle: string
  content: string
  price: number
  desc: string
}>()
const modal = ref<MODAL | null>()
</script>

<template>
  <div
    class="card-container"
    flex items-center justify-between
  >
    <div
      class="card-title"
      flex-none
    >
      <h1
        mt-32px ml-26px
      >
        {{ title }}
      </h1>
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
          {{ desc }}
        </span>
      </div>
      <self-button
        type="primary"
        :style="{ width: '128px', height: '43px', borderRadius: '5px' }"
        :text-style="{ font: '400 22px PingFang SC' }"
        @click="modal && modal.setShowModal()"
      >
        立即咨询
      </self-button>
      <base-modal ref="modal" :modal-info="ModalMall" />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  width: 100%;
  height: 150px;
  min-height: 150px;
  border-radius: 8px;
  opacity: 1;
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0px rgba(21,76,139,0.1);
  .card-title{
    height: 135px;
    width: 160px;
    position: relative;
    &::after{
      content: "";
      position: absolute;
      height: 90%;
      width: 1px;
      background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgb(0, 0, 0,.3), rgba(255,255,255,1) 100%);
      right: 0;
      top: 0;
    }
  }
  h1{
    color: rgba(29,33,41,1);
    font:400 24px "PingFang SC";
  }
  h2{
    color: rgba(29,33,41,1);
    font:400 28px "PingFang SC";
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
