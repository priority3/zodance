<script setup lang='ts'>
const { icon, desc, dotbgc } = defineProps<{
  icon: string
  desc: string
  dotbgc: string
  isLast?: boolean
}>()
</script>

<template>
  <div
    flex="~ col" items-center justify-center
  >
    <div
      w-110px h-110px class="card-container"
      flex="~ col" items-center justify-center gap-23px
    >
      <self-svgicon :name="icon" text-5xl />
      <p>{{ desc }}</p>
    </div>
    <div
      mt-23px
      :style="[isLast ? `border-left-color: ${dotbgc}  ` : `border-color:${dotbgc}`]"
      :class="[isLast ? 'dot-last' : 'normal-dot']"
    />
  </div>
</template>

<style scoped lang='scss'>
.card-container{
  box-shadow: 0 4px 4px 0px rgba(0,0,0,0.25);
  p{
    font: 500 12px "PingFang SC";
  }

}
.dot-last{
  border: 9px solid transparent;
  border-right: 12px solid transparent;
  border-left: 12px solid ;
  border-radius: 0;
}
.normal-dot{
  border: 7px solid;
  border-radius: 100%;
}
</style>
