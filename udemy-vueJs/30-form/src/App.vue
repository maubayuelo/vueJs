<template>
    <div class="container mt-5">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-6" v-if="!(isSubmitted)">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <form>
                    <div class="form-group">
                        <app-user-name v-model="userName"></app-user-name>
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
                <!-- v-if="isSubmitted" -->
                <div class="col-xs-12 col-sm-6" >
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4>Your Data</h4>
                        </div>
                        <div class="panel-body">
                            <p>Full Name: <span class="text-primary">{{userName}}</span></p>
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
    import userName from './userName.vue';
    export default {
        data(){
            return{
                userData:{
                    email: '',
                    password:'',
                },
                userName: '',
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
      appUserName : userName
    }
    }
</script>

<style>
</style>
