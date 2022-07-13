<script setup lang='ts'>
import { ref } from 'vue'
import { useAnimation } from '@/hooks/useAnimation'

const info = [{
  icon: 'collicon1',
  title: '社群日常运营',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: '/src/assets/operate/alloperate-item1.png',
}, {
  icon: 'collicon2',
  title: 'IP号日常运营',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: '/src/assets/operate/alloperate-item1.png',
}, {
  icon: 'collicon3',
  title: '运营海报制作',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: '/src/assets/operate/alloperate-item1.png',
}, {
  icon: 'collicon4',
  title: '专属红包制作',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: '/src/assets/operate/alloperate-item1.png',
}, {
  icon: 'collicon5',
  title: '促销活动操盘',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: '/src/assets/operate/alloperate-item1.png',
}]
const curImg = ref(info[0].src)
const img = ref(null)
useAnimation(img)
</script>

<template>
  <div flex justify-around items-center gap-120px mt-30px>
    <div class="w-1/3">
      <n-collapse
        accordion
        :default-expanded-names="[0]"
      >
        <template #arrow />
        <n-collapse-item
          v-for="({ title, icon, desc, src }, index) in info" :key="title"
          :name="index"
        >
          <template #header>
            <div
              flex items-center
              @click="curImg = src"
            >
              <self-svgicon :name="icon" text-2xl />
              <div ml-10px class="col-title">
                {{ title }}
              </div>
            </div>
          </template>
          <div class="col-desc" pl-35px>
            {{ desc }}
          </div>
        </n-collapse-item>
      </n-collapse>
    </div>
    <div ref="img" class="show-init">
      <n-image
        preview-disabled
        :src="curImg"
      />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.col-title{
  color: rgba(29,33,41,1);
  font: 500 24px "PingFang SC";
}
.col-desc{
  color: rgba(134,144,156,1);
  font: 400 14px "PingFang SC";
}
:deep(.n-collapse .n-collapse-item:not(:first-child)){
  border: 0;
}
// col 下拉框内容的样式调整
:deep(.n-collapse .n-collapse-item .n-collapse-item__content-wrapper .n-collapse-item__content-inner){
  padding: 0;
}
:deep(.n-collapse-item__header){
  height: 40px;
  box-sizing: border-box;
  padding: 6px 0 !important;
  border-radius: 8px;
}
:deep(.n-collapse .n-collapse-item){
  padding: 10px;
  transition: none;
  margin-top: 10px;
}
:deep(.n-collapse .n-collapse-item.n-collapse-item--active){
  border-radius: 4px;
  opacity: 1;
  border: 1px solid rgba(242,242,242,1);
  background: rgba(255,255,255,1);
  box-shadow: 4px 4px 15px 0px rgba(5,102,187,0.1);
}
</style>
