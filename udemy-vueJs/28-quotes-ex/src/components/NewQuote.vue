<template>
  <div class="row mb-2">
    <div class="col-sm-12 form-group">
      <h3>New Quote</h3>
      <textarea class="form-control" rows="3" v-model="quote"></textarea>
      <button @click.prevent="createNew" class="btn btn-primary mt-3 mb-3">Add Quote</button>
      <div v-if="display" id="alert_message" class="alert alert-danger alert-dismissible fade show panel-body mb-5" role="alert">
        <p>
            Introduce some text!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        quote:'',
        display: 0
      };
    },
    methods:{
      createNew(){
      if(this.quote != ''){
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
        this.display = 0;
      }else{
        this.display = 1;
      }

      }
    }
  }
</script>

<style>
</style>
