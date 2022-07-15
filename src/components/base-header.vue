<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { nextTick, ref } from 'vue'
import logopng from '@/assets/zodance-logo.png'
const itemMap = [{
  name: '零一商城',
  path: '/zodance-mall',
}, {
  name: '小零运营',
  path: '/zodance-operate',
}, {
  name: '服务价格',
  path: '/zodance-price',
}, {
  name: 'SaaS定制',
  path: '/zodance-saas',
}, {
  name: '代理合作',
  path: '',
}, {
  name: '关于我们',
  path: '',
}]
const router = useRouter()
const modal = ref<MODAL | null>(null)
function handleTonext(item) {
  const { path, name } = item
  if (name === '关于我们')
    return
  // router.push(item)
  !path && nextTick(() => {
    // TODO any ----
    modal.value && modal.value.setShowModal()
  })
  path && router.push(path)
}
function getisAvtive({ path }) {
  return path && router.currentRoute.value.path === path
}
</script>

<template>
  <div>
    <header class="header-container">
      <div class="w-3/5" flex mxa my0 h60px items-center>
        <div
          cursor-pointer flex items-center
          @click="$router.push('home')"
        >
          <n-image
            preview-disabled
            :src="logopng"
          />
        </div>
        <div
          class="header-box"
          flex justify-around w-full ml64px items-center
        >
          <template v-for="(item, index) in itemMap" :key="item.name">
            <div
              :class="{ 'is-active': getisAvtive(item), 'header-box-item': index !== 5 ? true : false }"
              @click="handleTonext(item)"
            >
              {{ item.name }}
            </div>
          </template>
        </div>
      </div>
    </header>
    <base-modal ref="modal" />
  </div>
</template>

<style scoped lang="scss">
.header-container{
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
  position: relative;
  z-index: 100;
}
.header-box{
  font: 400 16px "PingFang SC";
  color:rgba(61,61,61,1)
}
.header-box-item{
  position: relative;
  cursor: pointer;
  &::after{
    content: "";
    position: absolute;
    top: 38px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #194ac3;
    transform: scale(0,1);
    transform-origin: 50% 0;
    transition: all 0.15s ease-out,opacity 0.2s ease-out
  }
  &:hover::after{
    transform: scale(1,1);
  }
}
.is-active.header-box-item{
  &::before{
    content: "";
    position: absolute;
    top: 38px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #194ac3;
  }
}
</style>
