<template>
  <div class="category-page">
    <h1>Category Page</h1>
    <p>This is the page of the category {{ $route.params.categoryId }}</p>
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
}
</script>

<style scoped>
</style>
