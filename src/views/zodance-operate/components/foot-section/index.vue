<script setup lang='ts'>
import { ref } from 'vue'
import { ModalXiaoLing } from '@/enums/modal'
const modal = ref<MODAL | null>(null)
function handleToShowModal() {
  modal.value && modal.value.setShowModal()
}
</script>

<template>
  <div class="foot-container" flex="~ col" justify-center items-center h-460px>
    <div relative w-full>
      <div
        w-full h-460px of-hidden
      >
        <img
          w-full
          src="/src/assets/operate/footlogo.png"
        >
      </div>
      <div
        absolute top-100px class="left-50% w-4/5" translate-x="-50%"
        flex="~ col" justify-center items-center
      >
        <h1
          text-60px color="#FFFFFF"
        >
          开始让小零同学助你高效运营
        </h1>
        <div flex gap-60px mt-30px>
          <self-button
            type="small"
            :style="{
              color: '#fff',
              backgroundColor: 'transparent',
              width: '216px',
              height: '46px',
              border: '1px solid',
              boxShadow: '0 2px 10px 0px rgba(0,0,0,0.25)',
              borderRadius: '8px',
            }"
            :text-style="{
              color: '#fff',
              font: '400 24px PingFang SC',
            }"
            @click="handleToShowModal"
          >
            领取方案
          </self-button>
          <self-button
            type="small"
            :style="{
              color: '#fff',
              backgroundColor: 'transparent',
              width: '216px',
              height: '46px',
              border: '1px solid',
              boxShadow: '0 2px 10px 0px rgba(0,0,0,0.25)',
              borderRadius: '8px',
            }"
            :text-style="{
              color: '#fff',
              font: '400 24px PingFang SC',
            }"
            @click="$router.push('/zodance-price')"
          >
            服务价格
          </self-button>
        </div>
      </div>
    </div>
    <base-modal
      ref="modal"
      :modal-info="ModalXiaoLing"
    />
  </div>
</template>

<style scoped lang='scss'>

</style>
