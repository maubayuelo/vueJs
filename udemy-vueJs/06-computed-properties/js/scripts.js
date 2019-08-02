document.addEventListener("DOMContentLoaded", function(){
  var numVal = '';
  var app = new Vue({
    el: '#app',
    data: {
      counter:0,
      altMod: 0
    },
    computed:{
      output: function(){
        console.log('computed');
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
      }
    },
    watch:{
      counter: function(val){
        var vm = this;
        setTimeout(function(){
          vm.counter = 0;
        }, 2000);
      }
    },
    methods:{
      result: function(){
        console.log('method');
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
      }
    }
  })
});
