<template>
  <footer>
    <p>&copy; {{ currentYear }} Marketplace</p>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
}
</style>
