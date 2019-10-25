<template>
<div class="container mt-5">

  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-6">
      <form>
        <h1>File a Complaint</h1>
        <hr>
        <div class="form-group">
          <label for="email">Mail</label>
          <input
            type="text"
            id="email"
            class="form-control"
            :value="userData.email"
            @input="userData.email = $event.target.value">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" v-model.lazy="userData.password">
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" class="form-control" v-model.lazy="userData.age">
        </div>
        <label for="message">Message</label><br>
        <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
        <textarea id="message" rows="5" class="form-control"  v-model="message"></textarea>
        <div class="form-group mt-3">
          <label for="sendmail">
            <input type="checkbox" id="sendmail" value="Send Mail" v-model="sendMail"> Send Mail
          </label>
          <label for="sendInfomail">
            <input type="checkbox" id="sendInfomail" value="Send Info Mail" v-model="sendMail"> Send Infomail
          </label>
        </div>
        <label for="male">
          <input type="radio" id="male" value="Male" v-model="gender"> Male
        </label>
        <label for="female">
          <input type="radio" id="female" value="Female" v-model="gender"> Female
        </label>
        <hr />
        <label for="priority">Priority</label>
        <select id="priority" class="form-control" v-model="selectedPriority">
          <option
            v-for="priority in priorities">{{priority}}</option>
        </select>
        <app-switch v-model="dataSwitch"></app-switch>
        <button
          @click.prevent="submitted"
          class="btn btn-primary mt-3">Submit!
        </button>
      </form>

    </div>
    <div class="col-xs-12 col-sm-12 col-md-6" v-if="isSubmitted">
      <div class="card">
        <div class="card-header">
          <h4>Your Data</h4>
        </div>
        <div class="card-body">
          <p>Mail: <span class="text-primary">{{userData.email}}</span></p>
          <p>Password: <span class="text-primary">{{userData.password}}</span></p>
          <p>Age: <span class="text-primary">{{userData.age}}</span></p>
          <p>Message: <span class="text-primary" style="white-space:pre">{{message}}</span></p>
          <p><strong>Send Mail?</strong></p>
          <ul>
            <li v-for="item in sendMail">{{item}}</li>
          </ul>
          <p>Gender:  <span class="text-primary">{{gender}}</span></p>
          <p>Priority:  <span class="text-primary">{{selectedPriority}}</span></p>
          <p>Switched: <span class="text-primary">{{dataSwitch}}</span></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Switch from './switch.vue';
export default {
  data () {
    return{
      userData:{
        email: '',
        password:'',
        age: 27,
      },
      message:'',
      sendMail:[],
      gender: 'Male',
      selectedPriority: 'Low',
      priorities: ['High', 'Medium', 'Low'],
      dataSwitch: true,
      isSubmitted: false,
    }
  },
  methods:{
    submitted(){
      this.isSubmitted = true;
    }
  },
  components:{
    appSwitch : Switch
  }
}
</script>

<style>

</style>
