<script setup lang='ts'>
import { NImage, NModal } from 'naive-ui'
import { ref } from 'vue'

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
  <div>
    <NModal v-model:show="showModal">
      <n-image
        width="100"
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
    </NModal>
  </div>
</template>

<style scoped lang='scss'>
</style>
