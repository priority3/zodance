<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
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
  path: '/zodance-proxy',
}, {
  name: '关于我们',
  path: '',
}]
const drawerActive = ref(false)
const router = useRouter()
function handleTonext(item) {
  const { path, name } = item
  if (name === '关于我们')
    return
  path && router.push(path)
}
function getisAvtive({ path }) {
  return path && router.currentRoute.value.path === path
}
</script>

<template>
  <div>
    <header class="header-container" fc md:min-w-1440px md:fixed>
      <div
        flex h60px items-center w-full justify-around
        md:w-1440px md:px-280px
      >
        <div
          cursor-pointer flex items-center
          @click="$router.push('home')"
        >
          <n-image
            preview-disabled
            :src="logopng"
            width="91"
          />
        </div>
        <div w-full ml64px hidden md:block>
          <div
            class="header-box"
            flex justify-around items-center gap-64px
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
        <!-- mobile -->
        <div block md:hidden>
          <n-button
            round text-12px
            @click="drawerActive = !drawerActive"
          >
            导航栏
          </n-button>
        </div>
        <n-drawer v-model:show="drawerActive" placement="right">
          <n-drawer-content closable>
            <template #header>
              <n-image
                preview-disabled
                :src="logopng"
                width="91"
              />
            </template>
            <div fcc w-full>
              <template
                v-for="{ name, path } in itemMap" :key="name"
              >
                <div
                  h-60px border="b light-600" w-full
                  text-16px font-500 flex items-center pl-25px @click="handleTonext({ name, path })"
                >
                  {{ name }}
                </div>
              </template>
            </div>
          </n-drawer-content>
        </n-drawer>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 768px) {
  .header-container{
    background-color: #fff;
  }
}
.header-container{
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.1);
  z-index: 1000;
  width: 100%;
  backdrop-filter: saturate(150%) blur(20px);
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
    top: 38.5px;
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
    top: 38.5px;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #194ac3;
  }
}
:deep(.n-drawer-body-content-wrapper){
  padding: 0;
}
</style>
