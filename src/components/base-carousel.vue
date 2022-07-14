<script setup lang='ts'>
const { bannerInfo } = defineProps<{
  bannerInfo: Array<BannerInfo>
}>()

//
const linkInfo = [
  {
    title: '零一商城',
    desc: '更高端的品牌形象店',
    link: '/zodance-mall',
  }, {
    title: '小零运营',
    desc: '更高效的数字经营模式',
    link: '/zodance-operate',
  }, {
    title: 'SaaS定制',
    desc: '更全面的SaaS解决方案',
    link: '',
  },
]
// const modal = ref<MODAL | null>(null)

// function handleShowModal() {

// }

// TODO 图片 缩放
</script>

<template>
  <div relative of-hidden absolute>
    <n-carousel autoplay :interval="6000">
      <template v-for="{ image, title, subTitle, button } in bannerInfo" :key="image.url">
        <div class="carousel-item" of-hidden z-0>
          <!-- TODO 加载 -->
          <div
            absolute z--100
            :style="{ top: `${image?.top}px`, left: `${image?.left}px`, right: `${image?.right}` }"
          >
            <n-image
              preview-disabled
              :src="image.url"
            />
          </div>
          <div class="carousel-content" z-100>
            <h1 m0 :style="title.style">
              {{ title.desc }}
            </h1>
            <div :style="subTitle.style">
              {{ subTitle.desc }}
            </div>
            <div

              flex gap-20px
            >
              <self-button
                v-for="btn in button" :key="btn.text"
                :type="btn?.type"
                :style="btn?.style"
                :text-style="btn?.textStyle"
              >
                {{ btn?.text || '了解更多' }}
              </self-button>
            </div>
          </div>
          <div
            flex m="0 auto" mt-147px z-100
            justify-between items-center
            class="w-4/5"
          >
            <template v-for="item in linkInfo" :key="item.title">
              <base-bannerlink
                :title="item.title"
                :desc="item.desc"
                :link="item.link"
              />
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
  img{
    max-width: 50%;
    max-height: 100%;
  }
}

.custom-dots {
  z-index: 100;
  display: flex;
  padding: 0;
  // width: 80%;
  // margin: 0 auto;
  position: absolute;
  left: 10%;
  bottom: 219px;
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
  // position: absolute;
  // top: 133px;
  // left: 121px;
  width: 80%;
  margin: 0 auto;
  margin-top: 127px;
}
</style>
