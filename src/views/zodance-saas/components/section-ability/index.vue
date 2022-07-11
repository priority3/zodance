<script setup lang='ts'>
const info = [{
  title: '5年研发能力',
  desc: '专业支持',
  src: '/src/assets/saas/ability-item1.png',
}, {
  title: '优良防护机制',
  desc: '安全稳定',
  src: '/src/assets/saas/ability-item2.png',
}, {
  title: '满足自定义需求',
  desc: '个性化定制',
  src: '/src/assets/saas/ability-item3.png',
}, {
  title: '迭代功能，数据备份',
  desc: '持续保障',
  src: '/src/assets/saas/ability-item4.png',
}]
</script>

<template>
  <div mt-60px relative>
    <div w-full h-400px of-hidden>
      <img
        src="/src/assets/saas/section-ability.png"
        mode="aspectFit|aspectFill|widthFix" w-full
      >
    </div>
    <div
      absolute left="50%" top-153px translate-x="-50%"
      flex gap-160px
    >
      <div
        v-for="{ title, desc, src } in info" :key="title"
        flex="~ col" justify-center items-center w-144px
      >
        <n-image
          preview-disabled
          :src="src"
        />
        <p mt-24px>
          {{ title }}
        </p>
        <p>{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
p{
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: 500;
  font-family: "PingFang SC";
}
</style>
