import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import jQuery from 'jquery';
import 'popper.js';
import './assets/app.scss';
import { fb } from './firebase';

window.$ = window.jQuery = jQuery;

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

