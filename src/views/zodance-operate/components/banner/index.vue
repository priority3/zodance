<script setup lang='ts'>
import { ref } from 'vue'
import operatelogo from '@/assets/operate/operate-logo.png'
import { ModalXiaoLing } from '@/enums/modal'

const modal = ref<MODAL | null>(null)
function handleToShowModal() {
  modal.value && modal.value.setShowModal()
}
</script>

<template>
  <div w-full class="banner-container">
    <div
      h-640px relative w-1440px m="0 auto"
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
        mt-160px class="title-box" ml-100px gap-10px
      >
        <h2>
          小零同学
        </h2>
        <h1>你的首席私域运营官</h1>
        <p mt-4px>
          3500元/月，持续陪伴，助力企业成功
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
            领取方案
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
            @click="$router.push('/zodance-price')"
          >
            查看价格
          </self-button>
        </div>
      </div>
      <base-modal
        ref="modal"
        :modal-info="ModalXiaoLing"
      />
    </div>
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
