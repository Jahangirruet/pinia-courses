import { defineStore } from "pinia";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    count: (state) => state.items.length,
    isEmpty: (state) => state.count === 0,
    total: (state) => state.items.reduce((p, c) => p + c.price, 0),
    grouped: (state) => {
      const grouped = groupBy(state.items, (item) => item.name);
      const sorted = Object.keys(grouped).sort();
      let inOrder = {};
      sorted.forEach((key) => (inOrder[key] = groupBy[key]));
      return inOrder;
    },
  },

  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
    clearItam(itemName) {
      this.items = this.items.filter((item) => item.name === itemName);
    },
    setCounter(item, count) {
      this.clearItam(item.name);
      this.addItems(count, item);
    },
  },
});
