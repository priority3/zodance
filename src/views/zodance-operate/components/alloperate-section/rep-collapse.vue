<script setup lang='ts'>
import { ref } from 'vue'

const info = [
  {
    icon: 'collicon1',
    title: '社群日常运营',
    desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  },
  {
    icon: 'collicon2',
    title: '社群日常运营',
    desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  },
]
const collItems = ref<HTMLElement[] | null>(null)
const curNum = ref(0)
function handleToshow(num: number) {
  if (curNum.value === num) {
    if (collItems.value && !collItems.value[num].className.includes('show'))
      collItems.value[num].className = `${collItems.value[num].className} show`

    else if (collItems.value)
      collItems.value[num].className = ''
    return
  }
  curNum.value = num
  clearShow()
  if (collItems.value && !collItems.value[num].className)
    collItems.value[num].className = `${collItems.value[num].className} show`
}
function clearShow() {
  if (collItems.value) {
    (collItems.value).forEach((item) => {
      if (item.className.startsWith('show'))
        item.className = item.className.replace('show', '')
    })
  }
}
</script>

<template>
  <div flex>
    <div
      flex="~ col" gap-20px
      class="left-container" w-300px h-140px p-15px
    >
      <div
        v-for="({ title, icon, desc }, index) in info" :key="title"
        ref="collItems"
        @click="handleToshow(index)"
      >
        <div flex items-center gap-10px>
          <self-svgicon :name="icon" class-name="iconstyle" text-2xl />
          <h1>{{ title }}</h1>
        </div>
        <p ml-34px>
          {{ desc }}
        </p>
      </div>
    </div>

    <Transition name="fade" mode="out-in">
      <n-image
        preview-disabled
        src="/src/assets/operate/alloperate-item1.png"
      />
    </Transition>
  </div>
</template>

<style scoped lang='scss'>
.left-container{
  .item-box{
    border: 1px solid rgba(242,242,242,1);
    background: rgba(255,255,255,1);
    box-shadow: 4px 4px 15px 0px rgba(5,102,187,0.1);
    h1{
      color: rgba(29,33,41,1);
      font: 500 24px "PingFang SC";
    }
    p{
      color: rgba(134,144,156,1);
      font: 400 14px "PingFang SC";
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      opacity: 0;
      height: 0;
      transform-origin: top;
    }
  }

}
.show{
  p{
    opacity: 1;
    height: max-content;
  }
}
</style>
