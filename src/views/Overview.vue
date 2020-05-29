<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>{{email}}</h3>
            <p>My artist path:</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam sed iure illum reprehenderit, nisi accusantium beatae adipisci dolore quia expedita, error incidunt eveniet optio! Libero pariatur maiores praesentium molestiae!</p>
          </div>
          <div class="col-md-6">
            <img src="/img/gif/overviewGif.gif" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "Overview",
  data() {
    return {
      name: null,
      email: null
    };
  },
  props: {
    msg: String
  },
  methods: {
    created() {
      var user = fb.auth().currentUser;
      this.email = user.email;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
