import { defineStore } from "pinia";
//import products from "/Jahangir/codes/Vue/pinia-courses/src/data/products.json";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [],
    };
  },
  getters: {},
  actions: {
    async fill() {
      this.products = (
        await import("/Jahangir/codes/Vue/pinia-courses/src/data/products.json")
      ).default;
    },
  },
});
