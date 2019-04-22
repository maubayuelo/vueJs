document.addEventListener("DOMContentLoaded", function(){
  var numVal = '';
  var app = new Vue({
    el: '#app',
    data: {
      website:"Google",
      url:'https://www.google.com'
    },
    methods:{
      changeUrl: function(){
        this.website = "Apple",
        this.url = 'https://www.apple.com'
      }
    }
  })
});
