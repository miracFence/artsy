<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/svg/products.svg" alt width="400" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>Click in the link below to check more products</p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
        </div>
      </div>
    </div>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Products,
    Login
  }
};
</script>

<style>
</style>
