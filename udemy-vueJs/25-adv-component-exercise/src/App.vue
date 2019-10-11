<template>
<div class="container mt-3">
  <div class="row">
    <div class="col-xs-12">
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a @click="selectedComponent = 'appHome'" class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appSpring'" class="nav-link" href="#">Spring</a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appSummer'" class="nav-link" href="#">Summer</a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appFall'" class="nav-link" href="#">Fall</a>
            </li>
            <li class="nav-item">
              <a @click="selectedComponent = 'appWinter'" class="nav-link" href="#">Winter</a>
            </li>
          </ul>
        </div>
      </nav>
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</div>
</template>

<script>
import Home from './component/Home.vue';
import Spring from './component/seasonSpring.vue';
import Summer from './component/seasonSummer.vue';
import Fall from './component/seasonFall.vue';
import Winter from './component/seasonWinter.vue';
export default {
  data: function() {
    return {
      selectedComponent: 'appHome'
    }
  },
  components: {
    appHome: Home,
    appSpring: Spring,
    appSummer: Summer,
    appFall: Fall,
    appWinter: Winter,
  }
}
</script>

<style>
.content {
  border: 1px solid #ccc;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
img {
  width:100%
}
</style>
