<template>
  <div>
    <h2>Accesories</h2>
    <ul>
      <li v-for="accesory in accesories" :key="accesory.id">
        {{ accesory.name }} - {{ accesory.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

interface Accesory {
  id: number;
  name: string;
  price: number;
}

const accesories = ref<Accesory[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<Accesory[]>('http://localhost:3000/api/accessories');
    accesories.value = response.data;
  } catch (error) {
    console.error('Error fetching accesories:', error);
  }
});
</script>

<style scoped>
</style>
