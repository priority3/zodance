<script setup lang='ts'>

</script>

<template>
  <div>
    <n-collapse>
      <template #arrow />
      <n-collapse-item name="1">
        <template #header>
          <self-svgicon name="avator" text-2xl />
          <div ml-10px>
            da
          </div>
        </template>
        <div>可以</div>
      </n-collapse-item>
      <n-collapse-item title="白银" name="2">
        <div>很好</div>
      </n-collapse-item>
      <n-collapse-item title="黄金" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style scoped lang='scss'>
</style>
