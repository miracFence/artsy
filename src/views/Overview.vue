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
                <h5 class="card-title">Your earnings</h5>
                <h6 class="card-subtitle mb-2 text-muted">This week:</h6>
                <p class="card-text">Weekly prices</p>
                <h6 class="card-subtitle mb-2 text-muted">This month:</h6>
                <p class="card-text">Monthly prices</p>
                <h6 class="card-subtitle mb-2 text-muted">This year:</h6>
                <p class="card-text">Annual prices</p>
                <a href="#" class="card-link">Show graph</a>
              </div>
            </div>
            <div class="card" style="width: 18rem;" id="card-2">
              <div class="card-body">
                <h5 class="card-title">Sold products</h5>
                <h6 class="card-subtitle mb-2 text-muted">This week:</h6>
                <p class="card-text">Weekly prices</p>
                <h6 class="card-subtitle mb-2 text-muted">This month:</h6>
                <p class="card-text">Monthly prices</p>
                <h6 class="card-subtitle mb-2 text-muted">This year:</h6>
                <p class="card-text">Annual prices</p>
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
.card-link {
  color: teal;
}

.card {
  margin: 20px;
  background-color: #cdf1cc;
}

#card-2 {
  background-color: gray;
}
</style>
