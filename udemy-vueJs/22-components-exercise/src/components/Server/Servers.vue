<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group mb-4">
          <appServer
            v-for="server in servers"
            :server="server"></appServer>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue';

  export default{
    data: function(){
      return{
        servers:[
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknow'},
          {id: 4, status: 'G2G'},
          {id: 5, status: 'Great'}
        ]
      }
    },
    components: {
      appServer : Server
    }
  }
</script>

<style>

</style>
