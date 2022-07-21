<script setup lang='ts'>
import { ref } from 'vue'
import { ModalDefault } from '@/enums/modal'
interface ModalProps {
  modalInfo?: ModalTypeInfo
}

const {
  modalInfo = ModalDefault,
} = defineProps<ModalProps>()

const showModal = ref(false)
const setShowModal = () => {
  showModal.value = true
}
const setHideModal = () => {
  showModal.value = false
}
defineExpose({
  setShowModal,
  setHideModal,
})
</script>

<template>
  <div
    display-directive="show"
  >
    <NModal v-model:show="showModal">
      <div
        class="img-container"
        bg-white p-5px
        w-360px h-476px
      >
        <div
          flex items-center gap-6px h-71px
          border-b="solid 1px gray-300"
        >
          <self-svgicon
            :name="modalInfo.avator"
            text-5xl
          />
          <span>
            {{ modalInfo.title }}
          </span>
        </div>
        <div
          flex="~ col" items-center gap-22px mt-15px
        >
          <p>{{ modalInfo.desc }}</p>
          <n-image
            preview-disabled
            :src="modalInfo.src as any"
          />
        </div>
      </div>
    </NModal>
  </div>
</template>

<style scoped lang='scss'>
.img-container{
  color: rgba(29,33,41,1);
  font-weight: 700;
  font-family: "PingFang SC";
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0px rgba(0,0,0,0.25);
  p{
    font-size: 24px;
  }
  span{
    font-size: 23px;
  }
}
</style>
