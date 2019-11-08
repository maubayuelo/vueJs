<template>
    <div class="container mt-5">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6" v-if="!submitted">
                    <div class="form-group">
                        <app-full-name v-model="FullName"></app-full-name>
                        <label class="mt-3">Email Address</label>
                        <input type="email" class="form-control" v-model="email"/>
                        <label class="mt-3">Password</label>
                        <input type="password" class="form-control" v-model="password"/>
                        <label class="mt-3 mr-3">
                            <input type="radio" value="Yes" v-model="storeData"/> Yes
                        </label>
                        <label class="mt-3">
                            <input type="radio" value="No" v-model="storeData"/> No
                        </label>
                        <hr />
                        <button
                            type="submit"
                            @click.prevent="submitted = true"
                            class="btn btn-primary">Submit</button>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6" v-if="submitted">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: {{FullName}}</p>
                            <p>Mail: {{email}}</p>
                            <p>Password: {{password}}</p>
                            <p>Store in Database?: {{storeData}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import FullName from './FullName.vue';
    export default {
        data(){
            return{
                FullName: 'Mauricio Bay',
                email:'',
                password:'',
                storeData: 'Yes',
                submitted: false
            }
        },
        components:{
            appFullName: FullName
        }
    }
</script>

<style>
</style>
