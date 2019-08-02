<template>
  <div class="container">

    <div id="app">
      <div  class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            <a class="nav-link" href="?id=1">All <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?id=1">Company</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?id=2">Housing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?id=3">Babes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?id=4">Travel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="?id=5">Rides</a>
            </li>
          </ul>
          </div>
        </nav>
      </div>
      <div class="row">
        <div v-for="item in items" :key="item.id" class="item col-sm-6 col-md-3">
        <div class="img" <div class="img" v-bind:style="{ 'background-image': 'url(' + item.postImg + ')' }">
        </div>
        <p>Link to <a :href="urlpath(item)" target="_blank">{{item.postTitle}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//get number of cat ID
var categoryId = parseInt(window.location.href.split("=").pop());

console.log(categoryId);
import Firebase from 'firebase'
let config = {
  apiKey: "AIzaSyCQJQGzhuz5dq3lHFcKDcXJ19bRHNJKTvI",
  authDomain: "boards-8d722.firebaseapp.com",
  databaseURL: "https://boards-8d722.firebaseio.com",
  projectId: "boards-8d722",
  storageBucket: "boards-8d722.appspot.com",
  messagingSenderId: "77166135488"
}
let app = Firebase.initializeApp(config);
let db = app.database();
let itemsRef = db.ref("items");
export default {
  name: 'App',
  firebase:{
    //items:itemsRef,
    items:itemsRef.orderByChild('catId').equalTo(categoryId)
  },
  methods:{
    urlpath:function(i){
      return "https://giphy.com/search/"+i.postTitle+"";
    }
  }
}
console.log(itemsRef);
</script>

<style>
body{
  padding: 0;
}
#app {
  width: 100%;
}
#app .img{
  width: 100%;
  padding-bottom: 100%;
  background: gold; /** <-- For the demo **/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
