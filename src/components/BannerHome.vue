<template>
  <div class="banner">
    <img class="banner__image" :src="bannerImageUrl" alt="Banner Image" v-if="bannerImageUrl">
    <div class="banner__content" v-if="bannerImageUrl">
      <h2 class="banner__title">{{ title }}</h2>
      <p class="banner__description">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Image from '@/assets/images/explore/activities.jpg';

export default defineComponent({
  name: 'BannerHome',
  setup() {
    const title = 'Todo para tu mascota';
    const description = 'Entra y descubre los mejores servicios'
    const bannerImageUrl = ref<string | null>(null);

    onMounted(() => {
      bannerImageUrl.value = Image;
    });

    return {
      title,
      description,
      bannerImageUrl
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/widgets/banner-home.scss";
</style>
