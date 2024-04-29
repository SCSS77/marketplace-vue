<template>
  <div>
    <h2>Consoles</h2>
    <ul>
      <li v-for="console in consoles" :key="console.id">
        {{ console.name }} - {{ console.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

interface Console {
  id: number;
  name: string;
  price: number;
}

const consoles = ref<Console[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<Console[]>('http://localhost:3000/api/consoles');
    consoles.value = response.data;
  } catch (error) {
    console.error('Error fetching consoles:', error);
  }
});
</script>

<style scoped>
</style>
