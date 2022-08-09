<script setup lang='ts'>
import { ref } from 'vue'
import { ModalDefault } from '@/enums/modal'
/**
 * modalInfo: 弹窗信息
 * isReactive: 是否响应式 大小
 * afterLeave: 离开后的回调
 */
interface ModalProps {
  modalInfo?: ModalTypeInfo
  isReactive?: boolean
  afterLeave?: () => void
}

const {
  modalInfo = ModalDefault,
  isReactive = false,
} = defineProps<ModalProps>()

const showModal = ref(false)
const curModalInfo = ref<ModalTypeInfo>(modalInfo)

const setShowModal = () => {
  showModal.value = true
}
const setHideModal = () => {
  showModal.value = false
}
defineExpose({
  setShowModal,
  setHideModal,
  showModal: () => showModal,
  setModalInfo: (info: ModalTypeInfo) => {
    curModalInfo.value = info
  },
})
</script>

<template>
  <div
    display-directive="show"
  >
    <NModal v-model:show="showModal" @after-leave="afterLeave">
      <div
        class="img-container"
        :class="{ 'img-container-reactive': isReactive }"
        bg-white py-5px px-10px w-360px h-476px
      >
        <div
          flex items-center gap-10px h-71px
          border-b="solid 1px gray-300"
          class="title-box"
        >
          <self-svgicon
            :name="curModalInfo.avator"
            text-50px
            class-name="icon"
          />
          <span>
            {{ curModalInfo.title }}
          </span>
        </div>
        <div
          flex="~ col" items-center gap-22px mt-15px
        >
          <p>{{ curModalInfo.desc }}</p>
          <div>
            <self-image
              :src="curModalInfo.src"
              class-name="img"
            />
          </div>
        </div>
      </div>
    </NModal>
  </div>
</template>

<style scoped lang='scss'>
.img-container{
  color: rgba(29,33,41,1);
  font-weight: 700;
  border-radius: 8px;
  font-family: "PingFang SC";
  background: rgba(255,255,255,1);
  box-shadow: 0 4px 20px 0px rgba(0,0,0,0.25);
  span{
    font-size: 22px;
    font-weight: 550;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }
}

@media (max-width:768px) {
  .img-container-reactive{
    width: 260px;
    height: 330px;
    padding: 5px 24px ;
    .icon {
      font-size: 34px;
    }
    span {
      font-size: 14px;
      font-weight: 500;
    }
    .title-box {
      height: 50px;
    }
    p {
      font-weight: 700;
      font-size: 16px;
    }
    .img {
      width: 150px;
    }
  }
}
</style>
