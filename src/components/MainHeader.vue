<template>
  <header class="header">
    <div class="header__container">
      <div class="container">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item"><a class="header__link" href="#">Home</a></li>
            <li class="header__item"><a class="header__link" href="#">About</a></li>
            <li class="header__item"><a class="header__link" href="#">Contact</a></li>
          </ul>
        </nav>
        <h1 class="header__logo">{{ title }}</h1>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item"><a class="header__link" href="#">Language</a></li>
            <li class="header__item"><a class="header__link" href="#">User</a></li>
            <li class="header__item"><a class="header__link" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    title: {
      type: String,
      default: 'Marketplace'
    }
  }
}
</script>

<style>
</style>
