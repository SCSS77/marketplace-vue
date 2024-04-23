<template>
  <div>
    <h2>Games</h2>
    <ul>
      <li v-for="game in games" :key="game._id">
        {{ game.name }} - {{ game.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      games: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/games')
      .then(response => {
        this.games = response.data;
      })
      .catch(error => {
        console.error('Error fetching games:', error);
      });
  }
};
</script>
