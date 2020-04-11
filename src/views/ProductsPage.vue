<template>
  <div class="productsPage">
    <h2>Check this beautiful art</h2>
    <ProductListing />
    <h2>User Listing</h2>
    <UserListing />
  </div>
</template>

<script>
import ListingBuilder from "../patterns/creational/builders/ListingBuilder";
import ListingDirector from "../patterns/creational/builders/ListingDirector";

export default {
  name: "productsPage",
  components: {
    // ProductListing variants:
    // ProductListing,
    // ProductListing: new ListingBuilder()
    //   .withProvider(ProductProvider)
    //   .withListingItem(ProductListingItem)
    //   .showFilter()
    //   .showPagination()
    //   .view("grid")
    //   .build(),
    ProductListing: new ListingDirector(
      new ListingBuilder()
    ).makeProductListing(),

    // UserListing variants:
    // UserListing,
    // UserListing: new ListingBuilder()
    //   .withProvider(UserProvider)
    //   .withListingItem(UserListingItem)
    //   .showPagination()
    //   .view("table")
    //   .build()
    UserListing: new ListingDirector(new ListingBuilder()).makeUserListing()
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
