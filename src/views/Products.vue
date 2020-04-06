<template>
  <div class="products">
    <div class="container">
      <div class="container h-100">
        <div class="intro h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-6">
              <h3>Products page</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum totam sed iure illum reprehenderit, nisi accusantium beatae adipisci dolore quia expedita, error incidunt eveniet optio! Libero pariatur maiores praesentium molestiae!</p>
            </div>
            <div class="col-md-6">
              <img src="/img/svg/productz.svg" class="img-fluid" />
            </div>
          </div>
        </div>

        <hr />
        <h3>Drawings and Products registration</h3>
        <div class="product-test">
          <div class="form-group">
            <input
              type="text"
              placeholder="Product Name"
              v-model="product.name"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input type="text" placeholder="Price" v-model="product.price" class="form-control" />
          </div>
          <div class="form-group">
            <button @click="saveData" class="btn btn-primary">Save Data</button>
          </div>
          <hr />
          <h3>Art list</h3>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Modify</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{product.data().name}}</td>
                  <td>{{product.data().price}}</td>
                  <td>
                    <button @click="editProduct(product)" class="btn btn-primary">Edit</button>
                    <button @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="edit"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Edit this beautiful drawing</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input
                type="text"
                placeholder="Product Name"
                v-model="product.name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Price" v-model="product.price" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="updateProduct()" type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>


<script>
import { fb, db } from "../firebase";

export default {
  name: "Products",
  props: {
    msg: String
  },
  data() {
    return {
      products: [],
      product: {
        name: null,
        price: null
      },
      activeItem: null
    };
  },
  methods: {
    watcher() {
      db.collection("products").onSnapshot(querySnapshot => {
        this.products = [];
        querySnapshot.forEach(doc => {
          this.products.push(doc);
        });
      });
    },
    updateProduct() {
      db.collection("products")
        .doc(this.activeItem)
        .update(this.product)
        .then(() => {
          $("#edit").modal("hide");
          this.watcher();
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
    },
    editProduct(product) {
      $("#edit").modal("show");
      this.product = product.data();
      this.activeItem = product.id;
    },
    deleteProduct(doc) {
      if (confirm("Are you sure you want to delete this item?")) {
        db.collection("products")
          .doc(doc)
          .delete()
          .then(function() {
            console.log("Document successfully deleted!");
          })
          .catch(err => {
            console.log("Error removing document: ", err);
          });
      } else {
      }
    },
    readData() {
      db.collection("products")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            this.products.push(doc);
          });
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    },
    saveData() {
      db.collection("products")
        .add(this.product)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.readData();
        })
        .catch(function(error) {
          console.log("Error adding document: ", error);
        });
    },
    reset() {
      //Object.assign(this.$data, this.$options.data.apply(this));
    },
    created() {
      this.readData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
