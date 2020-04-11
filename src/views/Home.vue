<template>
  <div class="home">
    <Navbar></Navbar>
    <Hero />
    <Products />
    <products-list></products-list>

    <div class="container h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img src="/img/gif/cat.gif" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <h3>Learn More About us</h3>
          <p>Click in the links below to get to know more about the project</p>
          <a href="https://github.com/miracFence/artsy">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
    <Login></Login>
    <mini-cart></mini-cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Hero,
    Login,
    Products
  }
};
</script>

<style scoped lang="scss">
i {
  font-size: 2.5em;
}
</style>
