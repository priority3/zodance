<script setup lang='ts'>
import sectionCard from './section-card.vue'
import codehaima from '@/assets/mall/code-haima.png'
import codezangcha from '@/assets/mall/code-zangcha.png'
import codedaimei from '@/assets/mall/code-daimei.png'
import codedianmei from '@/assets/mall/code-dianmei.png'
import codecaimi from '@/assets/mall/code-caimi.png'
import codeniuma from '@/assets/mall/code-niuma.png'
const info = {
  title: '他们都在用小程序',
  cardInfo: [{
    title: '牛背清泉',
    content: '小程序为店铺提供了一个最便捷的入口，一个跳过公众号的入口，一个用户随时可以打开的入口，店铺从此一直在客户手边了。',
    src: 'mall5',
    codeSrc: codeniuma,
    selfStyle: {
      width: '30px',
      height: '50px',
    },
  }, {
    title: '藏茶空间',
    content: '微信小程序与公众号绑定之后，流量和转化率都有明显提升。小程序优化了购物体验，缩短购物路径，零一也在不断优化小程序展示方式和玩法，确实实用且好用，果断推荐。',
    src: 'mall2',
    codeSrc: codezangcha,
    selfStyle: {
      width: '42px',
      height: '48px',
    },
  }, {
    title: '',
    content: '借力零一,快速在微信实现粉丝变现。后台“—键授权"功能,大大节省运营及管理成本。各种功能稳定的营销插件，在微信进行了快速的用户裂义。',
    src: 'mall3',
    codeSrc: codedaimei,
    selfStyle: {
      width: '93px',
      height: '48px',
    },
  }, {
    title: '',
    content: '现在注册、认证、生成、审核小程序都能在零一后台完成，一步到位，特别方便。',
    src: 'mall4',
    codeSrc: codedianmei,
    selfStyle: {
      width: '136px',
      height: '39px',
    },
  }, {
    title: '采蜜小镇',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall6',
    codeSrc: codecaimi,
    selfStyle: {
      width: '56px',
      height: '48px',
    },
  }, {
    title: '倔海马葡萄酒',
    content: '零一跃动丰富的营销工具实现了多元化的活动玩法,增强了粉丝粘性。倔海马社交电商在未来社交商业模式探索之路上，更离不开微信小程序的助力。',
    src: 'mall1',
    codeSrc: codehaima,
    selfStyle: {
      width: '38px',
      height: '48px',
    },
  }],
}
</script>

<template>
  <div class="otheruse-container">
    <div class="otheruse-box" flex="~ col" items-center>
      <h1>{{ info.title }}</h1>
      <div flex="~ wrap" justify-around gap-50px mt-50px>
        <template v-for="{ title, content, src, codeSrc, selfStyle } in info.cardInfo" :key="title">
          <section-card
            :title="title"
            :content="content"
            :src="src"
            :code-src="codeSrc"
            :self-style="selfStyle"
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
