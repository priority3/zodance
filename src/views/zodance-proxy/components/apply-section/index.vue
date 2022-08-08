<script setup lang="ts">
import applySectionPng from '@/assets/proxy/apply-section.png'
</script>

<template>
  <div
    w-full fic h-150px pt-8px
    md="min-w-1440px h-470px pt-40px"
  >
    <h1
      text-18px font-500
      md="text-36px"
    >
      申请流程
    </h1>

    <div
      mt-20px w-280px md:w-1010px
      md="mt-80px"
    >
      <self-image
        :src="applySectionPng"
        style="width: 100%;"
      />
    </div>
  </div>
</template>
