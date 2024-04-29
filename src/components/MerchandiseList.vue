<template>
  <div>
    <h2>Merchandising</h2>
    <ul>
      <li v-for="merchandise in merchandising" :key="merchandise.id">
        {{ merchandise.name }} - {{ merchandise.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Merchandise {
  id: number;
  name: string;
  price: number;
}

const merchandising = ref<Merchandise[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<Merchandise[]>('http://localhost:3000/api/merchandising');
    merchandising.value = response.data;
  } catch (error) {
    console.error('Error fetching merchandising:', error);
  }
});
</script>

<style scoped>
</style>
