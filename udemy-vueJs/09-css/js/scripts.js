document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data: {
      attachRed: true,
      color: 'violet',
    },
    computed:{
      divClasses: function(){
        return{
          red: this.attachRed,
          blue: !this.attachRed
        }
      }
    },
    methods:{

    }
  })
});
