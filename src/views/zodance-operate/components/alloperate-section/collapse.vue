<script setup lang='ts'>
import { computed, ref } from 'vue'
import alloperaitem1 from '@/assets/operate/alloperate-item1.png'
import alloperaitem2 from '@/assets/operate/alloperate-item2.png'
import alloperaitem3 from '@/assets/operate/alloperate-item3.png'
import alloperaitem4 from '@/assets/operate/alloperate-item4.png'
import alloperaitem5 from '@/assets/operate/alloperate-item5.png'

const info = [{
  icon: 'collicon1',
  title: '社群日常运营',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: alloperaitem1,
}, {
  icon: 'collicon2',
  title: 'IP号日常运营',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: alloperaitem2,
}, {
  icon: 'collicon3',
  title: '运营海报制作',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: alloperaitem3,
}, {
  icon: 'collicon4',
  title: '专属红包制作',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: alloperaitem4,
}, {
  icon: 'collicon5',
  title: '促销活动操盘',
  desc: '人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低人均获客成本低低',
  src: alloperaitem5,
}]
const curImg = ref(info[0].src)
const imgArr = computed(() => {
  return info.map(item => item.src)
})
</script>

<template>
  <div
    flex justify-around items-center gap-120px mt-30px
    h-610px
  >
    <div w-300px flex-none>
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
    <div flex-none w-700px>
      <Transition name="slide-up" mode="out-in">
        <!-- 这里需要v-show把所有节点渲染出来 否则切换会导致show动画丢失show类型导致不可见 -->
        <!-- 如果采用v-if 会有多次比较导致 出现闪烁 -->
        <!-- TODO 垃圾代码 先占位 render重写 -->
        <div v-if="imgArr[0] === curImg">
          <n-image
            preview-disabled
            :src="curImg"
          />
        </div>
        <div v-else-if="imgArr[1] === curImg">
          <n-image
            preview-disabled
            :src="curImg"
          />
        </div>
        <div v-else-if="imgArr[2] === curImg">
          <n-image
            preview-disabled
            :src="curImg"
          />
        </div>
        <div v-else-if="imgArr[3] === curImg">
          <n-image
            preview-disabled
            :src="curImg"
          />
        </div>
        <div v-else>
          <n-image
            preview-disabled
            :src="curImg"
          />
        </div>
      </Transition>
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
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
