<script setup lang='ts'>
import { ref } from 'vue'
import baseModal from '@/components/base-modal.vue'
import xiaolingcode from '@/assets/xiaoling-code.png'
import operatelogo from '@/assets/operate/operate-logo.png'
const modal = ref<MODAL | null>(null)
function handleToShowModal() {
  modal.value && modal.value.setShowModal()
}
const modalInfo = {
  title: 'HI,我是你的首席私域运营官',
  desc: '扫码加微信，送你专属大礼包',
  avator: 'xiaoling',
  src: xiaolingcode,
}
</script>

<template>
  <div
    h-640px w-full relative
    class="banner-container"
    flex items-start justify-start
  >
    <div
      absolute right-60px bottom-108px
    >
      <n-image
        preview-disabled
        :src="operatelogo"
      />
    </div>
    <div
      flex="~ col" justify-start items-cenert
      mt-160px class="title-box" ml-100px
    >
      <h2>
        一个小零
      </h2>
      <h1>你的首席私域运营官</h1>
      <p mt-4px>
        一个小零，真的顶五个运营
      </p>
      <div mt-80px flex gap-20px>
        <self-button
          :text-style="{
            color: 'rgba(255,255,255,1)',
            font: '500 18px OPPOSans',
          }"
          :style="{
            'border': '0',
            'border-radius': '5px',
            'height': '36px',
            'width': '168px',
            'background': 'linear-gradient(225deg, rgba(72,203,227,1) 0%, rgba(50,154,239,1) 100%)',
          }"
          @click="handleToShowModal"
        >
          免费咨询
        </self-button>
        <self-button
          :text-style="{
            color: 'rgba(29,33,41,1)',
            font: '500 18px OPPOSans',
          }"
          :style="{
            'border': '1px solid rgba(193,193,193,1)',
            'border-radius': '5px',
            'height': '36px',
            'width': '168px',
          }"
        >
          查看价格
        </self-button>
      </div>
    </div>
    <base-modal
      ref="modal"
      :avator="modalInfo.avator"
      :src="modalInfo.src"
      :title="modalInfo.title"
      :desc="modalInfo.desc"
    />
  </div>
</template>

<style scoped lang='scss'>
.banner-container{
  background: linear-gradient(180deg, rgba(240,253,255,1) 0%, rgba(240,253,255,1) 81%, rgba(232,245,255,1) 91%, rgba(232,245,255,1) 100%);
  .title-box{

    h1{
      font:900 80px "OPPOSans";
      background-image:-webkit-linear-gradient(bottom left,#007BE4,#44DAF5);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip: text;
    }
    h2{
      font: 900 52px "OPPOSans";
      background-image:-webkit-linear-gradient(bottom left,#007BE4,#1BA1EB);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip: text;
    }
    p{
      font: 400 36px "OPPOSans";
      background-image:-webkit-linear-gradient(bottom left,#007BE4,#2EBBEF);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip: text;
    }
  }
}
</style>
