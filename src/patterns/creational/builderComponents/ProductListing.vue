<template>
  <ProductProvider>
    <ObjectsListing view="grid" show-filter show-pagination v-slot="{ entity }">
      <ProductListingItem :entity="entity" />
    </ObjectsListing>
  </ProductProvider>
</template>

<script>
import ObjectsListing from "./ObjectsListing.vue";
import ProductListingItem from "./ProductListingItem.vue";
import ProductProvider from "./ProductProvider.vue";

export default {
  name: "ProductListing",
  components: {
    ObjectsListing,
    ProductListingItem,
    ProductProvider
  }
};
</script>