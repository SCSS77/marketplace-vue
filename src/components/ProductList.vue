<template>
  <div>
    <h1>Product List</h1>
    <div v-if="products.length === 0">No products available.</div>
    <div v-else>
      <div v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useProductStore } from '@/stores/productStore';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const store = useProductStore();

    const products = computed(() => store.products);

    return { products };
  }
});
</script>

<style scoped>
</style>
