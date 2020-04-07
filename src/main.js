import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import { fb } from './firebase';
import VueFirestore from 'vue-firestore';
import VueCarousel from 'vue-carousel';


Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.use(VueFirestore, {
  key: 'id',
  enumerable: true
});

window.$ = require('jquery');
window.jQuery = require('jquery');

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

import Swal from 'sweetalert2';

window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;

Vue.use(VueCarousel);

Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function (user) {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }
});


