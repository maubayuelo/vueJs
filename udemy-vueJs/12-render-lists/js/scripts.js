document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data:{
      ingredients: ['meat', 'vegetables', 'epices'],
      persons:[
        {name: 'Max', age: 27, country:'Germany'},
        {name: 'Mauricio', age: 40, country:'Colombia'}
      ]
    }
  })
});
