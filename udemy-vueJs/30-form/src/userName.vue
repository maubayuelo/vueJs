<template>
  <div>
    <!-- Rounded switch -->
      <label class="mt-3">First Name</label>
      <input id="userFirstName" type="stream" v-model.lazy="userFirstName" class="form-control">
      <label class="mt-3">Last Name</label>
      <input id="userLastName" type="stream" v-model.lazy="userLastName" class="form-control mb-3">
  </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return{
      userFirstName:'Mau',x
      userLastName:'Bay',
      userName: this.userFirstName+' '+this.userLastName,
    }
  },
  methods:{

  }
}
</script>
