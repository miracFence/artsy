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
      <div class="container h-20">
        <div class="row h-20 justify-content-center-align-items-center">
          <div class="card-group">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p
                  class="card-text"
                >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Show graph</a>
              </div>
            </div>
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
.card {
  margin: 20px;
}

.container.h-100 {
  background-color: gray;
}
</style>
