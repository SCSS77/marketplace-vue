<template>
  <div>
    <h1>Search Results</h1>
    <ul>
      <li v-for="result in searchResults" :key="result.id">
        {{ result.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { Category } from '@/interfaces/types';

export default defineComponent({
  name: 'SearchPage',
  setup() {
    const searchResults = ref<Category[]>([]);

    onMounted(async () => {
      try {
        const response = await axios.get<Category[]>('http://localhost:3000/api/search-results');
        searchResults.value = response.data;
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    });

    return {
      searchResults
    };
  }
});
</script>
