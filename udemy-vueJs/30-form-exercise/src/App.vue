<template>
    <div class="container mt-5">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-6" v-if="!(isSubmitted)">
                    <form>
                    <div class="form-group">
                        <app-full-name v-model="fullName"></app-full-name>
                        <label for="email">Mail</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            v-model="userData.email"
                            >
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model="userData.password">
                        <label for="onDb" class="mt-4 mr-3">Store in Database?</label>
                        <label for="no">
                          <input type="radio" id="no" value="false" v-model="onDb"> No
                        </label>
                        <label for="yes">
                            <input type="radio" id="yes" value="true" v-model="onDb"> Yes
                        </label>
                      <button
                        @click.prevent="submitted"
                        style="display:block;clear:both"
                        class="btn btn-primary mt-3">Submit!
                      </button>
                    </div>
                    </form>
                </div>
                <div class="col-xs-12 col-sm-6" v-if="isSubmitted">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: <span class="text-primary">{{fullName}}</span></p>
                            <p>Mail: <span class="text-primary">{{userData.email}}</span></p>
                            <p>Password: <span class="text-primary">{{userData.password}}</span></p>
                            <p>Store in Database: <span class="text-primary">{{onDb}}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import FullName from './fullName.vue';
    export default {
        data(){
            return{
                userData:{
                    email: '',
                    password:'',
                },
                fullName: 'Mauricio Bayuelo',
                onDb: false,
                isSubmitted: false,
            }
        },
      methods:{
        submitted(){
          this.isSubmitted = true;
        }
      },
      components:{
      appFullName : FullName
    }
    }
</script>

<style>
</style>
