<template>
  <div class="profile">
    <div class="container">
      <div class="intro h-100">
        <div class="row h-100 align-items-center">
          <div class="col-md-6 ml-3">
            <h3>Profile settings</h3>
          </div>
          <div class="col-md-5">
            <img src="/img/gif/profileGif.gif" width="300" alt class="img-fluid" />
          </div>
        </div>
      </div>

      <div class="profile-content">
        <ul class="nav nav-pills ml-3" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              id="profile-tab"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >Profile</a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active pt-3"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name
                      v-model="profile.name"
                      placeholder="Username"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.phone"
                      placeholder="Phone"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-8">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.email"
                      placeholder="Email"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-10">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.address"
                      placeholder="Address"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-2">
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="profile.postCode"
                      placeholder="Postcode"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="form-group">
                    <input
                      type="textarea"
                      v-model="profile.description"
                      placeholder="Description"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="submit"
                      @click="updateProfile"
                      value="Save Changes"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <input
                      type="button"
                      @click="resetPassword"
                      value="Reset password"
                      class="btn btn-success w-100"
                    />
                  </div>
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
import { VueEditor } from "vue2-editor";
import { fb, db } from "../firebase";
export default {
  name: "profile",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },
  data() {
    return {
      profile: {
        name: null,
        email: null,
        description: null,
        phone: null,
        address: null,
        postcode: null
      }
    };
  },
  firestore() {
    const user = fb.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
    };
  },
  methods: {
    resetPassword() {
      const auth = fb.auth();
      auth
        .sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          Toast.fire({
            type: "success",
            title: "Email sent"
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },
    uploadImage() {}
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#profile-tab {
  color: #ffa500;
}

.btn.btn-primary {
  color: black;
  background-color: #ccd91f;
  border-color: #ccd91f;
}

.btn.btn-success {
  color: black;
  background-color: #fab339;
  border-color: #fab339;
}
</style>