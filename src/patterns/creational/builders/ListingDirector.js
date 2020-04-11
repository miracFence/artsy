import ProductListingItem from "../builderComponents/ProductListingItem.vue";
import ProductProvider from "../builderComponents/ProductProvider.vue";

import UserListingItem from "../builderComponents/UserListingItem.vue";
import UserProvider from "../builderComponents/UserProvider.vue";

export default class ListingDirector {
    constructor(builder) {
        this.builder = builder;
    }

    makeProductListing() {
        return this.builder
            .withProvider(ProductProvider)
            .withListingItem(ProductListingItem)
            .showFilter()
            .showPagination()
            .view("grid")
            .build();
    }

    makeUserListing() {
        return this.builder
            .withProvider(UserProvider)
            .withListingItem(UserListingItem)
            .showPagination()
            .view("table")
            .build();
    }
}
