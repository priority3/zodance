<script setup lang="ts">
import { computed, ref } from 'vue'
const { card, src } = defineProps<{
  card: Array<{
    icon: string
    title: string
    desc: string
    acicon: string
  }>
  src: Array<string>
}>()

const curSelectInd = ref(0)
const curImg = computed(() => src[curSelectInd.value])

function getCurIcon(num: number, icon: string, acicon: string) {
  return curSelectInd.value === num ? acicon : icon
}
</script>

<template>
  <div flex gap-160px items-center h-510px>
    <div flex="~ col" gap-21px>
      <template
        v-for="({ icon, acicon, title, desc }, index) in card"
        :key="title"
      >
        <div
          w-380px h-120px rounded="4px" class="card-container"
          flex gap-6px p-20px border-box cursor-pointer
          @mouseenter="curSelectInd = index"
        >
          <self-svgicon :name="getCurIcon(index, icon, acicon)" :style-name="{ width: '22px', height: '22px' }" />
          <div flex="~ col" gap-16px>
            <h1 :class="{ 'is-active': curSelectInd === index }">
              {{ title }}
            </h1>
            <span :class="{ 'is-active': curSelectInd === index }">{{ desc }}</span>
          </div>
        </div>
      </template>
    </div>
    <div of-hidden>
      <Transition name="slide-up" mode="out-in">
        <div :key="curImg">
          <self-image :src="curImg" width="750px" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  background: rgba(255,255,255,1);
  box-shadow: 0 2px 10px 0px rgba(62,143,255,0.2);
  h1 {
    color: rgba(29,33,41,1);
    font-size: 16px;
    font-weight: 400;
  }
  span {
    color: rgba(134,144,156,1);
    font-size: 14px;
    font-weight: 400;
  }
}
.is-active {
  color: #3E8FFF !important;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-in;
}

.slide-up-enter-from {
  opacity: 0.25;
}
.slide-up-leave-to {
  opacity: 0.25;
}
</style>
