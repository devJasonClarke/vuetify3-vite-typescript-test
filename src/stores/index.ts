import { defineStore } from "pinia";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("main", {
  state: () => ({
    theme: "light"
  }),
  getters: {
    theTheme: (state) => state.theme
  },
  actions: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    }
  }
});
