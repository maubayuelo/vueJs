<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 mt-3 form-group">
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
            }
        },
        methods:{
            createNew(){
                if(this.quote){
                    this.$emit('quoteAdded', this.quote);
                    document.getElementById("alert_message").classList.add("d-none");
                }else{
                    document.getElementById("alert_message").classList.remove("d-none");
                }
                this.quote = '';
            }
        }
    }
</script>

<style>

</style>
