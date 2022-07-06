// stores/counter.js
import { defineStore } from 'pinia'

export const useMallStore = defineStore('counter', {
  state: () => {
    return { maxHeight: 0 }
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    setHeight(height: number) {
      // console.log('setHeight', this.maxHeight, height)
      this.maxHeight = Math.max(height, this.maxHeight)
    },
  },
})
