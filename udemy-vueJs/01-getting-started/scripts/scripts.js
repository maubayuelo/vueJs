document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    methods:{
      changeMessage: function(event){
        this.message = event.target.value;
      }
    }
  })
});
