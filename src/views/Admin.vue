<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
      <a id="show-sidebar" @click="closeMenu" class="btn btn-sm btn-dark" href="#">
        <i class="fas fa-bars"></i>
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <!-- sidebar-brand  -->
          <div class="sidebar-item sidebar-brand">
            <router-link to="#">Artsy</router-link>
            <div id="close-sidebar" @click="closeMenu">
              <i class="fas fa-times"></i>
            </div>
          </div>
          <!-- sidebar-header  -->
          <div class="sidebar-item sidebar-header d-flex flex-nowrap">
            <div class="user-pic">
              <img class="img-responsive img-rounded" src="/img/user.png" alt="User picture" />
            </div>
            <div class="user-info">
              <span class="user-role">{{email}}</span>
              <span class="user-status">
                <i class="fa fa-circle"></i>
                <span>Online</span>
                <a
                  class="btn btn-outline-info border-0 mx-2 my-2 my-sm-0"
                  data-toggle="modal"
                  data-target="#miniCart"
                >
                  <i class="fas fa-shopping-bag"></i>
                </a>
              </span>
            </div>
          </div>

          <!-- sidebar-menu  -->
          <div class="sidebar-item sidebar-menu">
            <ul>
              <li class="header-menu">
                <span>Menu</span>
              </li>

              <li>
                <router-link to="/admin/artistsCreations">
                  <i class="fa fa-at"></i>
                  <span>Artists creations</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/overview">
                  <i class="fa fa-database"></i>
                  <span>Overview</span>
                </router-link>
              </li>

              <li>
                <router-link to="/admin/products">
                  <i class="fab fa-amazon"></i>
                  <span class="menu-text">My products</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/orders">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="menu-text">My orders</span>
                </router-link>
              </li>
              <li>
                <router-link to="/admin/profile">
                  <i class="fa fa-id-card"></i>
                  <span class="menu-text">My profile</span>
                </router-link>
              </li>
              <li>
                <a href="#" @click="logout">
                  <i class="fa fa-power-off"></i>
                  <span class="menu-text">Logout</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- sidebar-menu  -->
        </div>
        <!-- sidebar-footer  -->
      </nav>
      <!-- page-content  -->
      <main class="page-content pt-2">
        <router-view />
      </main>
      <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>


<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import { fb } from "../firebase";
export default {
  name: "admin",
  data() {
    return {
      name: null,
      email: null
    };
  },
  components: {
    Hero
  },
  methods: {
    closeMenu() {
      $(".page-wrapper").toggleClass("toggled");
    },
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
  }
};
</script>

<style>
</style>
