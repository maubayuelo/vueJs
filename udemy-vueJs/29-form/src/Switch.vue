<template>
  <div>
    <!-- Rounded switch -->
    <label class="switch mt-3">
      <input type="checkbox" :checked="value" v-model="value" @click="switched()">
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data(){
    value: dataSwitch
  },
  methods:{
    switched(){
      console.log(this.value);
      //console.log(this.value);
      if(this.value == true){
        this.$emit('input', false);
      }else{
        this.$emit('input', true);
      }
      //this.$emit('input', this.value)
    }
  }
}
</script>

<style>
.switch{position:relative;display:inline-block;width:60px;height:34px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:"";height:26px;width:26px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#2196f3}input:focus+.slider{box-shadow:0 0 1px #2196f3}input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}
</style>
