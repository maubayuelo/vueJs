<template>
  <div class="container">
    <compHeader></compHeader>
    <div class="row mt-5 mb-5">
      <comp-content></comp-content>
      <side></side>
    </div>
    <comp-footer></comp-footer>
  </div>
</template>

<script>
    import Header from './components/header.vue';
    import Content from './components/content.vue';
    import Side from './components/side.vue';
    import Footer from './components/footer.vue';
    export default{
      components:{
        // variations how you can call components
        compHeader : Header,
        // this is the second most commun
        compContent : Content,
        // this option works but is not clear to understand
        Side,
        // This is the most commun
        'comp-footer': Footer,
      }
    }
</script>
