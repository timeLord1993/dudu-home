import { defineStore } from "pinia";
export const useDefaultStore = defineStore("default", {
  state: () => ({
    appInfo: null
  }),
  getters: {
    appInfo: state => state.appInfo
  },
  actions: {
    async getUser() {
      // const data = await $fetch('/api/user', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      // console.log('getUser data', data)
    }
  }
});
