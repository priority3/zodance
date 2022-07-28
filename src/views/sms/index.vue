<script setup lang='ts'>
import { fetchUrlLink } from '../../api/sms/sms'

let url = ''
const localUrl = window.location.href
const urlArr = localUrl.split('/')
const type = Number(urlArr[urlArr.length - 1])

const smsInfoList = [
  {
    appId: 'wx0997dd4a1540e4f7', // 藏茶
    path: '/packageB/pages/smspage/smspage',
  },
  {
    appId: 'wx2dd03919b38cb440', // 牛背
    path: '/pages/smsPage/smsPage',
  },
]

/**
 * 获取小程序链接
 */
const getUrlLink = async () => {
  const data: any = await fetchUrlLink(smsInfoList[type - 1].appId, {
    path: smsInfoList[type - 1].path,
    query: '',
    expireType: 1,
    expireInterval: 30,
  })
  url = data.data
  window.location.replace(url)
}

getUrlLink()
</script>

<template />

<style scoped lang='scss'>
</style>
