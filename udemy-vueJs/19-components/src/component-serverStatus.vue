<template>
  <div class="mt-5">
    <p>
      <span class="font-weight-bold">Server Status: </span>{{status}}
    </p>
    <button @click="changeStatus" class="btn btn-primary">Change the status</button>
  </div>
</template>

<script>
export default{
  data: function(){
    return{
      status: 'Critical'
    }
  },
  methods:{
    changeStatus(){
      this.status = 'Normal'
    }
  }
}
</script>
