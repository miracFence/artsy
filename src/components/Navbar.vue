  
<template>
  <div class="hello">
    <nav class="navbar custom-nav fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Artsy</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/productsPage" class="nav-link">Products</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>

          <form class="form-inline my-2 my-lg-0">
            <a
              class="btn btn-outline-success my-2 my-sm-0"
              data-toggle="modal"
              data-target="#login"
            >Be an artist</a>
            <a
              class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
              data-toggle="modal"
              data-target="#miniCart"
            >
              <i class="fas fa-shopping-bag"></i>
            </a>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) {
  .navbar.custom-nav {
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: white !important;
  }
}

.btn-outline-success {
  background-color: #ffa7a7;
  border-color: #ffa7a7;
}

.btn-outline-success:hover {
  background-color: #ffbcd9;
  border-color: #ffbcd9;
}

.navbar-brand {
  font-family: "Lobster", cursive;
  font-size: 1.8em;
}

i {
  font-size: 1.8em;
}

.fa-shopping-bag {
  color: #353753;
}
.fa-shopping-bag:hover {
  color: #c9fdff;
}
</style>