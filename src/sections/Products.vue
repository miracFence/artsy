<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-5">Top 3 of the week!</h1>
      <div class="row">
        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Living the dream by @user1</h5>
              <p class="card-text">Astounding colors and beautiful sight</p>
              <add-to-cart></add-to-cart>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product2.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">Drowning gods by @user2</h5>
              <p class="card-text">For my living room</p>
              <add-to-cart></add-to-cart>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card product-item">
            <img src="/img/products/product3.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Pocket crystals by @sludy</h5>
              <p class="card-text">Just doing something for hella fun!</p>
              <add-to-cart></add-to-cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}

.card-title {
  font-weight: bold;
  font-size: 1.5em;
}

.card-text {
  font-family: "Baloo Thambi 2", cursive;
  font-weight: 100;
}

.card-product-item {
  border-radius: 50px;
}

.col-md-4 {
  border-radius: 40px;
}

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>