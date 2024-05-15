<template>
  <div class="search-bar header__searcher">
    <input
      type="text"
      v-model="searchQuery"
      @keyup.enter="handleSearch"
      placeholder="Search..."
      class="search-bar__input"
    />
    <button @click="handleSearch" class="search-bar__button">
      <img class="header__icon--lens" src="@/assets/images/lens.svg" alt="" width="18" height="18">
    </button>
    <ul v-if="showResults" class="search-results">
      <li v-for="result in searchResults" :key="result.id">
        <router-link :to="{ name: 'Category', params: { categoryId: result.id } }" class="search-result-item">
          {{ result.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Category } from '@/interfaces/types';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const searchQuery = ref('');
    const searchResults = ref<Category[]>([]);
    const showResults = ref(false);

    const handleSearch = async () => {
      if (searchQuery.value.trim() === '') {
        showResults.value = false;
        return;
      }

      try {
        const response = await axios.get<Category[]>('http://localhost:3000/api/categories');
        const filteredResults = response.data.filter((category: Category) =>
          category.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
        searchResults.value = filteredResults;
        showResults.value = true;
      } catch (error) {
        console.error('Error searching categories:', error);
      }
    };

    return {
      searchQuery,
      searchResults,
      showResults,
      handleSearch
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/elements/searcher.scss";
</style>
