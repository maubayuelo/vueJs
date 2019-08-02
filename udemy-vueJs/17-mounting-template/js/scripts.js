document.addEventListener("DOMContentLoaded", function(){

  var dataApi = {
    instanceTitle: "Turtle",
    instancePic: "https://cdn.dribbble.com/users/31752/screenshots/2135946/turtle.png",
    instanceComment: 'Vue JS is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
    instanceSubTitle: 'A Subtitle'
  }

  var app = new Vue({
    el: '#app',
    data: dataApi,
    methods:{
      changeAnimal: function(){
        this.instanceTitle = "Viper";
        this.instancePic = "https://cdn.dribbble.com/users/59947/screenshots/4597809/muti-1.jpg"
      }
    }
  });
  console.log(app.$data);
  app.$mount('app');

  var appAlt = new Vue({
    template: '<h1>Hello!</h1>'
  });
  appAlt.$mount('#appAlt');
});
