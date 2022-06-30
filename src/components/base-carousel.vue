<script setup lang='ts'>
import { NCarousel } from 'naive-ui'
const { bannerInfo } = defineProps<{
  bannerInfo: Array<BannerInfo>
}>()
// TODO 图片 缩放
</script>

<template>
  <div relative of-hidden absolute>
    <n-carousel autoplay :interval="6000">
      <template v-for="{ image, title, subTitle, button } in bannerInfo" :key="image.url">
        <div class="carousel-item">
          <img
            absolute
            :src="image.url"
            :style="{ top: `${image?.top}px`, left: `${image?.left}px`, right: `${image?.right}` }"
          >
          <div class="carousel-content">
            <h1 m0 :style="title.style">
              {{ title.desc }}
            </h1>
            <div :style="subTitle.style">
              {{ subTitle.desc }}
            </div>
            <self-button
              :type="button?.type"
              :style="{ top: `${button?.top}px`, left: `${button?.left}px` }"
            >
              {{ button?.text || '了解更多' }}
            </self-button>
          </div>
          <div
            flex absolute left-121px bottom-28px
            justify-between w-full items-center
            class="banner-linkbox"
          >
            <template v-for="ind in 3" :key="ind">
              <base-bannerlink :ind="ind" />
            </template>
          </div>
        </div>
      </template>

      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :key="index"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)"
          />
        </ul>
      </template>
    </n-carousel>
  </div>
</template>

<style scoped lang='scss'>
.carousel-item {
  width: 100%;
  height: 760px;
  object-fit: cover;
  background-color: rgba(247,249,255,1);
  position: relative;
  & img{
    max-width: 50%;
    max-height: 100%;
  }
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 219px;
  left: 121px;
  li {
    display: inline-block;
    width: 60px;
    height: 5px;
    margin: 0 5px;
    border-radius: 5px;
    background-color: rgba(231,231,231,1);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }
  li.is-active{
    background: rgba(130,192,255,1);
  }
}
.carousel-content{
  position: absolute;
  top: 133px;
  left: 121px;
}
.banner-linkbox{
  width: 90%;
}
</style>
