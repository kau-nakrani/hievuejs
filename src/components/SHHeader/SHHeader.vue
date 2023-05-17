<script setup>
import { RouterLink } from 'vue-router'
import "./../SHButton/SHButton.vue";
import logoImg from "../../assets/images/logo/logo.png";
import IconBar from '../icons/IconBar.vue';
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
          <RouterLink to="/landing-page"><img src="./../../assets/images/logo/logo.png" fluid alt="" className="header-logo"/></RouterLink>
          <nav className="d-none d-md-flex align-items-center ms-auto">
            <RouterLink to="/landing-page">Feature</RouterLink>
            <RouterLink to="/choose-plan">Documentations</RouterLink>
            <RouterLink to="/login">Support</RouterLink>
            <RouterLink to="/billing-history">Pro Account</RouterLink>
            <RouterLink to="/checkout" className="primary-btn buy-button">Buy</RouterLink>
          </nav>
          <span className="line-height-0 ms-auto cursor-pointer d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <IconBar/>
          </span>
        </div>
      </div>
    </div>
  </header>
  <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        <nav className="d-block">
          <RouterLink to="/landing-page" className="d-block w-100 mb-4">Feature</RouterLink>
          <RouterLink to="/choose-plan" className="d-block w-100 mb-4">Documentations</RouterLink>
          <RouterLink to="/login" className="d-block w-100 mb-4">Support</RouterLink>
          <RouterLink to="/billing-history" className="d-block w-100 mb-4">Pro Account</RouterLink>
          <RouterLink to="/checkout" className="primary-btn buy-button d-block w-100 mb-4">Buy</RouterLink>
        </nav>
    </div>
  </div>
</template>
<style scoped>
  header{
    width: 100%;
    min-height: var(--header-less-spacing);
    background: var(--white-color);
    box-shadow: 0px 6px 21px rgba(0, 0, 0, 0.05);
    position: sticky;
    top: 0;
    z-index: 999;
  }
  header nav a{
    font-weight: 400;
    font-size: 19px;
    line-height: 25px;
    color: var(--secondary-color);
  }
  header nav a:not(:last-child){
    margin-right: 50px;
  }
  header nav a.buy-button{
    color: var(--white-color);
  }
  @media (max-width: 1199px){
    header nav a:not(:last-child){
      margin-right: 30px;
    }
    header nav a{
      font-size: 18px;
    }
    /* .header-logo{
      max-width: 170px;
    } */
  }
  @media (max-width: 991px){
    header nav a:not(:last-child){
      margin-right: 20px;
    }
    header nav a{
      font-size: 16px;
    }
    .header-logo{
      max-width: 150px;
    }
    header .primary-btn{
      min-width: 100px;
    }
  }
  @media (max-width: 575px){
    .offcanvas{
      max-width: 250px;
    }
    .offcanvas .primary-btn{
      max-width: max-content;
    }
  }
</style>
