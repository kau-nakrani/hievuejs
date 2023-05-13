<script setup>
import { RouterLink } from 'vue-router'
import "./../SHButton/SHButton.vue";
import logoImg from "../../assets/images/logo/logo.png";
</script>
<template>
  <!-- <nav className="d-flex justify-content-between">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/create-account">Create Account</RouterLink>
    <RouterLink to="/landing-page">Home</RouterLink>
    <RouterLink to="/choose-plan">Choose Plan</RouterLink>
    <RouterLink to="/checkout">Checkout</RouterLink>
  </nav> -->
  <header className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center">
          <img src="./../../assets/images/logo/logo.png" fluid alt=""/>
          <nav className="d-flex align-items-center ms-auto">
            <RouterLink to="/landing-page">Feature</RouterLink>
            <RouterLink to="/choose-plan">Documentations</RouterLink>
            <RouterLink to="/login">Support</RouterLink>
            <RouterLink to="/create-account">Pro Account</RouterLink>
            <RouterLink to="/checkout" className="primary-btn buy-button">Buy</RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
  header{
    width: 100%;
    min-height: var(--header-less-spacing);
    background: var(--white-color);
    box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.05);
  }
  header nav a{
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: var(--secondary-color);
    margin-right: 50px;
  }
  header nav a.buy-button{
    color: var(--white-color);
  }
</style>
