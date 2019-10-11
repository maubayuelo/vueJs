<template>
  <div class="row mb-2">
    <div class="col-sm-12 form-group">
      <h3>New Quote</h3>
      <textarea class="form-control" rows="3" v-model="quote"></textarea>
      <button @click.prevent="createNew" class="btn btn-primary mt-3 mb-3">Add Quote</button>
      <div id="alert_message" class="alert alert-danger alert-dismissible fade show d-none panel-body mb-5" role="alert">
        <p>
            Introduce some text!
        </p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        quote:''
      };
    },
    methods:{
      createNew(){
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
</script>

<style>
</style>
