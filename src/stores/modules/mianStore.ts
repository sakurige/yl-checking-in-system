import { defineStore } from "pinia";
const useMainStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
    };
  },
  actions: {
    increament() {
      this.counter++;
    },
  },
});
export default useMainStore;
