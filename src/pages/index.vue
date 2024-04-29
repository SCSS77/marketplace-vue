<template>
  <div>
    <Header />
    <ProductList />
    <Footer />
  </div>
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

<style>
</style>

