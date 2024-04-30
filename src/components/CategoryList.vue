<template>
  <div>
    <div v-for="category in categories" :key="category.id">
      <h2>{{ category.name }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

const categories = ref<Category[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<Category[]>('http://localhost:3000/api/categories');
    categories.value = response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
});
</script>
