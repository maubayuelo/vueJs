<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please sessslect a server</p>
        <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
        <button @click="resetStatus" class="btn btn-primary">Change to Magnifico</button>
    </div>
</template>

<script>
    import {serverBus} from '../../main';
    export default{
        data: function(){
            return{
                server: null
            }
        },
        methods: {
            resetStatus(){
                this.server.status = 'Magnifico!';
            }
        },
        created(){
            serverBus.$on('serverSelected', (server)=>{
                this.server = server;
            });
        }
    }
</script>

<style>

</style>
