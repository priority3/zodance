<script setup lang='ts'>
import sectionCard from './section-card.vue'
const info = {
  title: '他们都在用小程序',
  cardInfo: [{
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall1',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall2',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall3',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall4',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall5',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall6',
    codeSrc: '/src/assets/mall/mall-code1.png',
  }],
}
</script>

<template>
  <div class="otheruse-container">
    <div class="otheruse-box" flex="~ col" items-center>
      <h1>{{ info.title }}</h1>
      <div flex="~ wrap" justify-around gap-50px mt-50px>
        <template v-for="{ title, content, src, codeSrc } in info.cardInfo" :key="title">
          <section-card
            :title="title"
            :content="content"
            :src="src"
            :code-src="codeSrc"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.otheruse-container{
  margin-top:50px;
  h1{
    color: rgba(29,33,41,1);
    font: 500 36px "PingFang SC";
  }
  .otheruse-box{
    width: 80%;
    margin: 0 auto;
  }
}
</style>
