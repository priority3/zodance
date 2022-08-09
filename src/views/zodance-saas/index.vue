<script setup lang='ts'>
import { ref } from 'vue'
import sectionCome from './components/section-come/index.vue'
import banner from './components/banner/index.vue'
import sectionAbility from './components/section-ability/index.vue'
import sectionAdvance from './components/section-advance/index.vue'
import { createSaasModalContext } from './_utils'
import { setupHandleScroll } from '@/hooks/useAnimation'
import { modalSass } from '@/enums/modal'
import mitt from '@/utils/mitt'
setupHandleScroll()

const modal = ref<MODAL>()
const saasModalEmitter = mitt()
const activeName = ref('')
saasModalEmitter.on('show-modal', (modalInfo: ModalTypeInfo = modalSass) => {
  modal.value?.setModalInfo(modalInfo)
  modal.value?.setShowModal()
})
createSaasModalContext({
  saasModalEmitter,
  activeName,
})
</script>

<template>
  <div min-w-1440px mx-auto>
    <base-header />
    <banner />
    <section-come />
    <section-ability />
    <section-advance />
    <base-footer mt-36px />
  </div>
  <base-modal ref="modal" />
</template>

<style scoped lang='scss'>
</style>
