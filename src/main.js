import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import { fb } from './firebase';
import VueFirestore from 'vue-firestore';
import VueCarousel from 'vue-carousel';
import Vue2Filters from 'vue2-filters';
import Vuex from "vuex";
import store from './store.js';
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import Swal from 'sweetalert2';


Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.component('add-to-cart', require('@/components/AddToCart.vue').default);
Vue.component('mini-cart', require('@/components/MiniCart.vue').default);
Vue.component('Navbar', require('@/components/Navbar.vue').default);

Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
});

window.$ = require('jquery');
window.jQuery = require('jquery');

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.use(Vuex);
Vue.use(VueCarousel);
Vue.use(Vue2Filters);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

  }
});


