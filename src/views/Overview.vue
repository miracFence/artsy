<template>
  <div class="overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div class="row h-100 justify-content-center align-items-center">
          <div class="col-md-6">
            <h3>{{profile.name}}</h3>
            <p>My artist path:</p>
            <p>{{profile.description}}</p>
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
import { fb, db } from "../firebase";
export default {
  name: "Overview",
  data() {
    return {
      profile: {
        name: null,
        description: null
      }
    };
  },
  props: {
    msg: String
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
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
