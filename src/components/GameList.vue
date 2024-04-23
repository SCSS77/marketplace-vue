<template>
  <div>
    <h2>Games</h2>
    <ul>
      <li v-for="game in games" :key="game.id">
        {{ game.name }} - {{ game.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

interface Game {
  id: number;
  name: string;
  price: number;
}

const games = ref<Game[]>([]);

onMounted(async () => {
  try {
    const response = await axios.get<Game[]>('http://localhost:3000/games');
    games.value = response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
  }
});
</script>

<style scoped>

</style>
