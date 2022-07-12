<script setup lang='ts'>
const info = [{
  icon: 'foot-item1',
  desc: '运营成本下降',
}, {
  icon: 'foot-item2',
  desc: '客户转化率增加',
}, {
  icon: 'foot-item2',
  desc: '单场活动成交总额',
}]
</script>

<template>
  <div class="foot-container" flex="~ col" justify-center items-center>
    <div class="vertical-line" w-2px h-64px mb-20px mt-124px />
    <self-svgicon name="footlogo" text-7xl />
    <div class="vertical-line" w-2px h-64px mt-20px />
    <div
      class="item-box"
      flex justify-center items-center gap-56px
    >
      <div
        v-for="{ icon, desc } in info" :key="desc"
        flex="~ col" justify-center items-center
      >
        <self-svgicon :name="icon" class-name="iconstyle" />
        <p>{{ desc }}</p>
      </div>
    </div>
    <div relative mt-160px w-full>
      <div
        w-full h-360px of-hidden
      >
        <img
          w-full
          src="/src/assets/operate/footlogo.png"
        >
      </div>
      <div
        absolute top-92px class="left-50% w-4/5" translate-x="-50%"
        flex="~ col" justify-center items-center
      >
        <h1>开始让小零同学助你高效运营</h1>
        <self-button
          mt-36px
          type="small"
          :style="{
            color: '#fff',
            backgroundColor: 'transparent',
            width: '136px',
            height: '42px',
            border: '1px solid',
            boxShadow: '0 4px 4px 0px rgba(0,0,0,0.25)',
            borderRadius: '8px',
          }"
          :text-style="{
            color: '#fff',
            font: '400 24px PingFang SC',
          }"
        >
          免费咨询
        </self-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.foot-container{
  .item-box{
    width: 894px;
    height: 245px;
    border-radius: 120px;
    opacity: 1;
    border: 2px solid rgba(225,225,225,1);
  }
  .iconstyle{
    width: 220px ;
    height: 83px ;
  }
  p{
    color: rgba(134,144,156,1);
    font: 400 28px "PingFang SC";
  }
  h1{
    color: rgba(255,255,255,1);
    font: 400 60px "PingFang SC";
  }
}
</style>
