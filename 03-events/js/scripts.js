document.addEventListener("DOMContentLoaded", function(){
  var currentTime = new Date();
  var actualYear = currentTime.getFullYear();
  var birthYear = 1979;
  var app = new Vue({
    el: '#app',
    data: {
      name: 'Mauricio',
      imgURL: 'https://picsum.photos/300/300?image=1081',
      age:'',
      x:0,
      y:0,
      val:3
    },
    methods: {
      increase: function(numb, event){
        this.val += numb;
      },
      calculateAge: function(){
        this.age = actualYear - birthYear;
        return this.age;
      },
      changeImg: function(){
        this.imgURL = 'https://picsum.photos/300/300?image=' + Math.floor(Math.random() * (1084 - 1) + 0);
        return this.imgURL;

      },
      updateCoords: function(event){
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }
  })
});
