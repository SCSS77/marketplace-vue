<template>
  <Header />
  <main class="home">
    <div class="home__container container">
      <BannerHome />
      <CategoryList />
      </div>
    </main>
  <Footer />
</template>

<script>
import Header from '@/components/MainHeader.vue';
import BannerHome from "@/components/BannerHome";
import CategoryList from '@/components/CategoryList.vue';
import Footer from "@/components/MainFooter";

export default {
  name: 'HomePage',
  components: {
    Header,
    BannerHome,
    CategoryList,
    Footer
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/common.scss";
@import "@/assets/styles/pages/home.scss";
</style>

