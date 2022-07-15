<script setup lang='ts'>
import { ref } from 'vue'
import resultSection from '@/assets/mall/result-section.png'
const info = {
  title: '做小程序商城的6大理由',
  leftRes: [{
    contTitle: '开发门槛低',
    contPara: '小程序开发投入少周期段、速度快、推广易',
  }, {
    contTitle: '各大平台亿万流量',
    contPara: '私域4大必备工具之一导流转化利器',
  }, {
    contTitle: '购物体验好',
    contPara: '小程序无需安装与卸载打开即用，用完即走',
  }],
  rightRes: [{
    contTitle: '5步轻松上线',
    contPara: '开通小程序商城后，通过微信商户后台一键发布，即刻上线',
  }, {
    contTitle: '超多流量入口',
    contPara: '微信11亿用户，60+小程序入口让你的用户轻松发现你',
  }, {
    contTitle: '转化率高',
    contPara: '优良服务和良好的使用体验大大提高小程序的准化率',
  }],
}
const modal = ref<MODAL | null>(null)
</script>

<template>
  <div class="result-container">
    <div class="result-box" flex="~ col" items-center>
      <h1>
        {{ info?.title }}
      </h1>
      <div class="result-content" flex justify-center mt63px gap-39px>
        <div class="content-left" flex="~ col" gap-70px>
          <template v-for="item in info.leftRes" :key="item.conTitle">
            <div
              flex="~ col" items-end
              text-right
            >
              <!-- TODO 布局 段落换行 -->
              <h3>{{ item.contTitle }}</h3>
              <h4 w-200px>
                {{ item.contPara }}
              </h4>
            </div>
          </template>
        </div>
        <div flex-none>
          <n-image
            :src="resultSection"
            width="414"
            preview-disabled
          />
        </div>
        <div class="content-left" flex="~ col" gap-70px>
          <template v-for="item in info.rightRes" :key="item.conTitle">
            <div text-left>
              <h3>{{ item.contTitle }}</h3>
              <h4
                w-200px
              >
                {{ item.contPara }}
              </h4>
            </div>
          </template>
        </div>
      </div>
      <self-button
        type="primary"
        style="margin-top: 48px;width:224px;height:50px"
        @click="modal && modal.setShowModal()"
      >
        立即咨询
      </self-button>
    </div>
    <base-modal
      ref="modal"
    />
  </div>
</template>

<style scoped lang='scss'>
.result-container{
  width: 80%;
  height: 601px;
  margin: 0 auto;
  background: #fff;
  background: url("/src/assets/mall/mall-resultbgc.png") no-repeat;
  .result-box{
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
  h1{
    color: rgba(61,61,61,1);
    font: 500 36px "PingFang SC";
  }
  .result-content{
    h3{
      color: rgba(29,33,41,1);
      font: 500 20px "PingFang SC";
    }
    h4{
      color: rgba(134,144,156,1);
      font: 400 16px "PingFang SC";
      height: 44px;
    }

  }

}
</style>
