document.addEventListener("DOMContentLoaded", function(){
  var v_appReptil = new Vue({
    el: '#appReptil',
    data:{
        instanceTitle: "Turtle",
        InstancePic: "https://cdn.dribbble.com/users/31752/screenshots/2135946/turtle.png",
    },
    methods:{
      changeAnimal: function(){
        this.instanceTitle = "Viper";
        this.InstancePic = "https://cdn.dribbble.com/users/59947/screenshots/4597809/muti-1.jpg"
      }
    }
  });
  var v_appBird = new Vue({
    el: '#appBird',
    data:{
        instanceTitle: "Flamingo",
        InstancePic: "https://cdn.dribbble.com/users/850083/screenshots/6228651/fl.png",
    },
    methods:{
      changeAnimal: function(){
        this.instanceTitle = "Eagle";
        this.InstancePic = "https://cdn.dribbble.com/users/60166/screenshots/5807947/eagle_logo_2x.jpg"
      }
    }
  });

  v_appReptil.$mount('#appReptil');


  new Vue({
    el: '#appAnimalsChange',
    data:{
      instanceTitleReptil: "Dinosaur",
      InstancePicReptil: "https://cdn.dribbble.com/users/427368/screenshots/4893919/asset_11.png",
      instanceTitleBird: "Phoenix",
      InstancePicBird: "https://cdn.dribbble.com/users/1883895/screenshots/4988520/56756ytt.png",
    },
    methods:{
      changeAnimals: function(){
        v_appReptil.instanceTitle = this.instanceTitleReptil;
        v_appReptil.InstancePic = this.InstancePicReptil;
        v_appBird.instanceTitle = this.instanceTitleBird;
        v_appBird.InstancePic = this.InstancePicBird;
        // Accesing HTML DOM from ref on the tag button
        this.$refs.changeAnimalsBtn.innerText = "changeAnimals";
        //console.log(this.$refs.changeAnimalsBtn);
      }
    }
  });
  console.log(v_appReptil)
});
