import { defineStore } from "pinia";

export const piniaStore = defineStore("storeId", {
  state: () => {
    return {
      count: 0,
      accessToken: "",
    };
  },
  actions: {
    setCount(value: number) {
      this.count = value;
    },
    setAccessToken(value: string) {
      this.accessToken = value;
    },
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getAccessToken(state) {
      return state.accessToken;
    },
  },
});
