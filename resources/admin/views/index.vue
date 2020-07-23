<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="sidebar bg-light h-100 border border-gray rounded">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link p-3">Yessni Ekle</a>
              </li>
            </ul> 
          </div>
        </div>
        <div class="col-md-8">
          <form>
            <div class="d-flex justify-content-between w-100 mb-4">
              <input class="form-control" type="text" v-model="newReptile" @keyup.enter="addReptile" required  placeholder="Başlık Giriniz"/>
              <button class="btn btn-success btn-sm ml-4 text-nowrap" @click="addReptile">Add Reptile</button>
            </div>
          </form>
          <table class="table table-bordered table-sm table-striped">
            <thead>
              <tr>
                <th>Başlık</th>
                <th>Sil</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="reptile in reptiles">
                <td>{{ reptile.name }}</td>
                <td>
                  <button class="btn btn-danger btn-sm" @click="deleteReptile(reptile)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "./firebase";

export default {
  name: "app",
  data() {
    return {
      reptiles: [],
      newReptile: ""
    };
  },
  firestore() {
    return {
      reptiles: db.collection("reptiles")
    };
  },
  methods: {
    addReptile: function() {
      if (this.newReptile.length) {
        this.$firestore.reptiles.add({
          name: this.newReptile,
          timestamp: new Date()
        });
        this.newReptile = "";
      }
    },

    deleteReptile: function(reptile) {
      var r = confirm("Silmek istediğinize eminmisiniz ?");
      if (r == true) {
        this.$firestore.reptiles.doc(reptile[".key"]).delete();
      } else {
        txt = "You pressed Cancel!";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.reptileList {
  list-style: none;
}
</style>