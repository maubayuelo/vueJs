import Vue from 'vue';
import App from './App.vue';
import Home from './home.vue';
import Side from './component-side.vue';

Vue.component('app-servers', Home);
Vue.component('app-side', Side);

new Vue({
  el: '#app',
  render: h => h(App)
})
