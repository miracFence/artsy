<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      tabindex="-1"
      role="dialog"
      aria-labelledby="loginTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <ul class="nav nav-fill nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >Login</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="pills-register-tab"
                  data-toggle="pill"
                  href="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >Signup</a>
              </li>
            </ul>

            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="pills-login-tab"
              >
                <h5 class="text-center">Login Please</h5>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    @keyup.enter="login"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="login">Login</button>
                  <button class="social-button" @click="loginGoogle">
                    <img src="../../public/img/png/google-logo.png" alt />
                  </button>

                  <button class="social-button" @click="loginFacebook">
                    <img src="../../public/img/png/facebook-logo.png" alt />
                  </button>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="pills-register-tab"
              >
                <h5 class="text-center">Create New Account</h5>

                <div class="form-group">
                  <label for="name">Your name</label>
                  <input
                    type="text"
                    v-model="name"
                    class="form-control"
                    id="name"
                    placeholder="Introduce name"
                  />
                </div>

                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    v-model="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    v-model="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group">
                  <button class="btn btn-primary" @click="register">Signup</button>
                </div>
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
import firebase from "@firebase/app";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },

  methods: {
    login() {
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          $("#login").modal("hide");
          this.$router.replace("admin");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          $("#login").modal("hide");
          db.collection("profiles")
            .doc(result.user.uid)
            .set({
              name: this.name,
              email: this.email
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
          this.$router.replace("admin");
        })
        .catch(err => {
          alert("Oops. " + err.message);
        });
    },
    loginFacebook() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      then(result => {
        var token = result.credential.accessToken;

        var user = result.user;

        console.log(user);
        $("#login").modal("hide");
        db.collection("profiles")
          .doc(result.user.uid)
          .set({
            name: user,
            email: this.email
          })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
        this.$router.replace("admin");
      }).catch(error => {
        var errorCode = error.code;

        var errorMessage = error.message;
        console.log(errorMessage);

        var email = error.email;

        var credential = error.credential;
      });
    },
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)

        .then(user => {
          $("#login").modal("hide");

          db.collection("profiles")
            .doc(user.user.uid)
            .set({
              name: this.name,
              email: this.email
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });

          this.$router.replace("admin");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.social-button {
  width: 50px;
  background: white;
  padding: 5px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  outline: 0;
  border: 0;
  margin-left: 15px;
}

.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}

.social-button img {
  width: 100%;
}
</style>