import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    loadProducts(newProducts: Product[]) {
      this.products = newProducts;
    },
  },
});

