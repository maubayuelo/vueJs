document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data: {
      color: 'violet',
      width: 100
    },
    computed:{
      myStyle: function(){
        return{
          backgroundColor: this.color,
          width: this.width+'px'
        }
      }
    }
  })
});
