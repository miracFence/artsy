<template>
  <div class="hero is-medium is-primary-is-bold">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-md-5">
          <div class="hero-content">
            <h1 class="hero-title">A digital art shop?!</h1>
            <p>Explore our art and different options</p>
            <div class="hero-btn mt-3">
              <router-link
                to="/productsPage"
                class="btn custom-btn btn-info mr-4"
                tag="button"
              >Explore</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="graphic">
            <img class="img-fluid" src="/img/gif/source.gif" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  font-size: 1.5em;
  padding-top: 7rem;
  width: 100%;
  height: 500px;
  text-align: left;
}

.btn.custom-btn.btn-info.mr-4 {
  background-color: #631dca;
  color: white;
  transition: 0.75s;
  border-color: #d9ffbc;
}

.btn.custom-btn.btn-outline-secondary {
  transition: 0.75s;
}

.btn.custom-btn.btn-outline-secondary:hover {
  border-radius: 40px/1.4em;
}

.btn.custom-btn.btn-info.mr-4:hover {
  border-radius: 40px/1.4em;
}
</style>