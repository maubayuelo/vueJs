<template>
  <div>
    <label>First Name</label>
    <input type="text" class="form-control" :value="firstName" @input="nameChanged(first, $event)"/>
    <label class="mt-3">Last Name</label>
    <input type="text" class="form-control" :value="lastName" @input="nameChanged(last, $event)"/>
  </div>
</template>

<script>
export default {
  props:['value'],
  methods:{
    nameChanged(event){
      let name = '';
      if(isFirst){
        name = event.target.value + " " + this.lastName;
      }else{
        name = this.firstName + " " + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value)
    }
  },
  computed:{
    firstName(){
      return this.value.split(" ")[0];
    },
    lastName(){
      return this.value.split(" ")[1];
    }
  }
}
</script>
