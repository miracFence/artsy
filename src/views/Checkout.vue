<template>
  <div class="checkout">
    <Navbar></Navbar>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-md-9">
          <h4 class="py-4">Checkout page</h4>
          <ul>
            <li v-for="item in this.$store.state.cart" :key="item.id" class="media">
              <img :src="item.productImage" width="80px" class="align-self-center mr-3" />
              <div class="media-body">
                <h5 class="mt-0">
                  {{item.productName}}
                  <span
                    id="eliminate"
                    class="float-right"
                    @click="$store.commit('removeFromCart', item)"
                  >X</span>
                </h5>

                <p class="mt-0">{{item.productPrice | currency}}</p>
                <p class="mt-0">Quantity: {{item.productQuantity}}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <p>Total Price: {{this.$store.getters.totalPrice | currency}}</p>

          <button class="btn btn-primary" @click="checkout">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
var stripe = require("stripe")("sk_test_DemBjPLIiKgq8dYdipcirqDm00IvtwUCmf");
import { fb, db } from "../firebase";
export default {
  data() {
    return {
      order: {
        user: "Anon",
        product: null,
        price: null,
        date: null
      },
      sessionId: ""
    };
  },
  methods: {
    checkout() {
      this.$firestore.orders.update(this.order);
    },
    pay() {
      let data = this.$store.state.cart.map(item => ({
        [item.productId]: item.productQuantity
      }));

      data = Object.assign({}, ...data);

      axios
        .get(
          "https://us-central1-artsy-98316.cloudfunctions.net/CheckoutSession",
          {
            params: {
              products: data
            }
          }
        )
        .then(response => {
          this.sessionId = response.data;
          console.log(response.data);
          stripe
            .redirectToCheckout({
              sessionId: this.sessionId.id
            })
            .then(function(result) {});
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {}
};
</script>


<style scoped lang="scss">
#eliminate {
  cursor: pointer;
}
.StripeElement {
  box-sizing: border-box;
  height: 40px;
  padding: 10px 12px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>