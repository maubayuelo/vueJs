document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data: {
      title: 'Hello World',
      url: 'https://google.com',
      imgTag: '<img class="img-responsive" src ="https://picsum.photos/640/480?image=1040"/>',
      imgURL: 'https://picsum.photos/640/480?image=1040'
    },
    methods: {
      sayHello: function(){
        this.title = 'URL';
        return this.title;
      }
    }
  })
});
