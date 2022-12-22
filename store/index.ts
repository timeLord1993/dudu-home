import { defineStore } from 'pinia'

export const useDefaultStore = defineStore('default', {
  state: () => ({
    appInfo: null
  }),
  getters: {
    appInfo: state => state.appInfo
  },
  actions: {}
})
