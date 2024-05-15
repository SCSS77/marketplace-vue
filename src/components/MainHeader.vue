<template>
  <header class="header">
    <div class="header__container">
      <div class="container">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item"><a class="header__link" href="#">Explore</a></li>
            <li class="header__item"><a class="header__link" href="#">Search</a></li>
            <li class="header__item"><a class="header__link" href="#">Products</a></li>
          </ul>
        </nav>
        <h1 class="header__logo">{{ title }}</h1>
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__item"><a class="header__link" href="#">Language</a></li>
            <li class="header__item">
              <a class="header__link" href="#">
                <img class="header__icon" src="@/assets/images/user.svg" alt="" width="16" height="16">
                My Account
              </a>
            </li>
            <li class="header__item">
              <a class="header__link" href="#">
                <img class="header__icon" src="@/assets/images/cart.svg" alt="" width="22" height="19">
                Cart
              </a>
            </li>
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
