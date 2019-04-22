document.addEventListener("DOMContentLoaded", function(){
  var numVal = '';
  var app = new Vue({
    el: '#app',
    data: {
      imgUrl: 'https://picsum.photos/400/400',
      counter: 0
    },
    methods: {
      changeImgUrl: function(){
        this.imgUrl = 'https://picsum.photos/400/400/?image='+ Math.floor(Math.random() * (1084 - 1) + 0);
      },
      changeImgUrlVal: function($event){
        if( event.target.value > 1084 || event.target.value < 0){
          numVal = '?random';
        }
        else{
          numVal = '?image='+event.target.value;
        }
        this.imgUrl = 'https://picsum.photos/400/400/'+ numVal;
      }
    }
  })
});
