<template>
  <div>
    <!-- Rounded switch -->
      <label class="mt-3">First Name</label>
      <input id="userFirstName" type="stream" :value="firstName" class="form-control" @input="nameChanged(true, $event)">
      <label class="mt-3">Last Name</label>
      <input id="userLastName" type="stream" :value="lastName" class="form-control mb-3" @input="nameChanged(false, $event)">
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods:{
      nameChanged(isFirst, event){
        let name = '';
        if(isFirst){
          name = event.target.value+' '+this.lastName;
        }else{
          name = this.firstName+' '+event.target.value;
        }
        this.value = name;
        this.$emit('input', this.value);
      }
    },
    computed:{
      firstName(){
        return this.value.split(" ")[0];
      },
      lastName(){
        return this.value.split(" ")[1];
      },
    }
  }
</script>
