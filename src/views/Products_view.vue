<template>
  <div class="productsPage">
    <Navbar></Navbar>
    <h2>Check this beautiful art</h2>
    <products-list></products-list>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  name: "productsView",
  components: {},
  data() {
    return {
      products: []
    };
  },
  methods: {
    getImage(images) {
      return images[0];
    }
  },
  firestore() {
    return {
      products: db.collection("products")
    };
  }
};
</script>

<style lang="scss" scoped>
#productsPage {
  padding: 1em;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}

h2:not(:first-child) {
  margin-top: 0.75em;
}

h3 {
  font-size: 1.5em;
  margin-bottom: 0.75em;
}

h3:not(:first-child) {
  margin-top: 0.75em;
}

table {
  width: 100%;
}

tr:not(:first-child) {
  border-top: 1px solid #e9e9e9;
}

td {
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
