document.addEventListener("DOMContentLoaded", function(){
  var app = new Vue({
    el: '#app',
    data: {
      value: 0,
    },
    methods:{
      result: function(){
        return this.value > 30 ? 'Greater than 5' : 'Smaller than 5'
      }
    },
    watch:{
      value: function(val){
        var vm = this;
        setTimeout(function(){
          vm.value = 0
        }, 3000)
      }
    }
  })
});
