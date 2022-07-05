<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { nextTick, ref } from 'vue'
const itemMap = [{
  name: '零一商城',
  path: '/zodance-mall',
}, {
  name: '服务价格',
  path: '/zodance-price',
}, {
  name: '小零运营',
  path: '/zodance-operate',
}, {
  name: 'SaaS',
  path: '',
}, {
  name: '代理合作',
  path: '',
}, {
  name: '关于我们',
  path: '',
}]
const router = useRouter()
const modal = ref(null)
function handleTonext(item: string) {
  // router.push(item)
  !item && nextTick(() => {
    // TODO any ----
    (modal.value as any).setShowModal()
  })
  item && router.push(item)
}
function getisAvtive(item: string) {
  return item && router.currentRoute.value.path === item
}
</script>

<template>
  <div>
    <header class="header-container">
      <div class="w60%" flex mxa my0 h60px items-center>
        <div cursor-pointer @click="$router.push('home')">
          <img src="@/assets/zodance-logo.png" alt="">
        </div>
        <div
          class="header-box"
          flex justify-around wfull ml64px items-center
        >
          <template v-for="item in itemMap" :key="item.name">
            <div
              class="header-box-item"
              :class="{ 'is-active': getisAvtive(item.path) }"
              cursor-pointer
              @click="handleTonext(item.path)"
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
  &::after{
    content: "";
    position: absolute;
    top: 26px;
    display: block;
    width: 100%;
    height: 3px;
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
    top: 26px;
    display: block;
    width: 100%;
    height: 3px;
    background-color: #194ac3;
  }
}
</style>
