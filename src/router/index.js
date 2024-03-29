import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import Orders from "../views/Orders.vue";
import Profile from "../views/Profile.vue";
import ArtistsCreations from "../sections/ArtistsCreations.vue";
import { fb } from '../firebase';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          path: "artistsCreations",
          name: "ArtistsCreations",
          component: ArtistsCreations
        },
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: Products
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        },
      ],
    },
    {
      path: "/checkout",
      name: "checkout",
      component: () =>
        import("../views/Checkout.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("../views/About.vue")
    },
    {
      path: "/productsPage",
      name: "productsView",
      component: () =>
        import("../views/Products_view.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;
  if (requiresAuth && !currentUser) {
    next("/")
  }
  else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
});

export default router;
