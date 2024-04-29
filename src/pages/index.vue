<template>
  <Header />
  <main class="home">
    <div class="home__container">
      <ProductList />
      </div>
    </main>
  <Footer />
</template>

<script>
import Header from '@/components/MainHeader.vue';
import ProductList from '@/components/ProductList.vue';
import Footer from "@/components/MainFooter";

export default {
  name: 'HomePage',
  components: {
    Header,
    ProductList,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";
@import "@/assets/styles/pages/home.scss";
</style>

