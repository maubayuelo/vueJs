<template>
  <div class="col-sm-6">
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>
<script>
  import serverStatus from './component-serverStatus.vue';
  export default{
    components:{
      'app-server-status': serverStatus
    }
  }
</script>
