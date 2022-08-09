<script setup lang='ts'>
import { ref } from 'vue'
import mallBanner from './components/banner/index.vue'
import resultSection from './components/result-section/index.vue'
import funtabSection from './components/funtab-section/index.vue'
import otheruseSection from './components/otheruse-section/index.vue'
import otherchoseSection from './components/otherchose-section/index.vue'

import { createMallModalContext } from './_utils'
import { ModalMall } from '@/enums/modal'
import mitt from '@/utils/mitt'

const modal = ref<MODAL | null>(null)
const mallModalEmitter = mitt()
const activeName = ref('')
mallModalEmitter.on('show-modal', (modalInfo: ModalTypeInfo = ModalMall) => {
  modal.value?.setModalInfo(modalInfo)
  modal.value?.setShowModal()
})
createMallModalContext({
  mallModalEmitter,
  activeName,
})
</script>

<template>
  <div min-w-1440px mx-auto>
    <base-header />
    <mall-banner />
    <result-section />
    <funtab-section />
    <otheruse-section />
    <otherchose-section />
    <base-footer mt-94px />
  </div>
  <base-modal
    ref="modal"
  />
</template>

<style scoped lang='scss'>
</style>
