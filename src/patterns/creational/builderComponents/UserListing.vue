<template>
  <UserProvider>
    <ObjectsListing view="table" show-pagination v-slot="{ entity }">
      <UserListingItem :entity="entity" />
    </ObjectsListing>
  </UserProvider>
</template>

<script>
import ObjectsListing from "./ObjectsListing.vue";
import UserListingItem from "./UserListingItem.vue";
import UserProvider from "./UserProvider.vue";

export default {
  name: "UserListing",
  components: {
    ObjectsListing,
    UserListingItem,
    UserProvider
  }
};
</script>