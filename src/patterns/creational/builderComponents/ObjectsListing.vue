<template>
  <ListingLayout>
    <NavFilter v-if="showFilter" :filters="filters" slot="filter" />
    <ListingGrid v-if="view === 'grid'" :entities="entities" v-slot="{ entity }">
      <slot :entity="entity" />
    </ListingGrid>
    <ListingTable v-else :entities="entities" v-slot="{ entity }">
      <slot :entity="entity" />
    </ListingTable>
    <NavPagination v-if="showPagination" :pages="pages" slot="pagination" />
  </ListingLayout>
</template>


<script>
import ListingGrid from "./ListingGrid";
import ListingLayout from "./ListingLayout";
import ListingTable from "./ListingTable";
import NavFilter from "./NavFilter";
import NavPagination from "./NavPagination";

export default {
  name: "ObjectsListing",
  components: {
    ListingGrid,
    ListingLayout,
    ListingTable,
    NavFilter,
    NavPagination
  },
  inject: ["fetch"],
  props: {
    showFilter: {
      default: false,
      type: Boolean
    },
    showPagination: {
      default: false,
      type: Boolean
    },
    view: {
      default: "grid",
      type: String
    }
  },
  data() {
    return {
      entities: [],
      // For demonstration purposes only.
      filters: [
        { slug: "footwear", name: "Footwear" },
        { slug: "clothing", name: "Clothing" }
      ],
      // For demonstration purposes only.
      pages: [1, 2, 3]
    };
  },
  async created() {
    this.entities = await this.fetch();
  }
};
</script>