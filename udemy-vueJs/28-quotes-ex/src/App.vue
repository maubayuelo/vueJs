<template>
    <div class="container mt-5">
        <app-Header  :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-Header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="quoteDeleted"></app-quote-grid>
        <div v-if="display_max_quote" id="alert_message" class="alert alert-danger alert-dismissible fade show panel-body mb-5" role="alert">
          <p>
              Max. quotes are 10. Delete some quote!
          </p>
        </div>
    </div>
</template>

<script>
import Header from './components/Header.vue';
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
    export default {
        data: function(){
          return {
            quotes:[
              'This is a default quote!'
            ],
            maxQuotes: 10,
            display_max_quote: 0
          }
        },
        methods:{
            newQuote(quote){
              if( this.quotes.length < this.maxQuotes){
                this.quotes.push(quote);
                this.display_max_quote = 0;
              }else{
                this.display_max_quote = 1;
              }
            },
            quoteDeleted(index){
                this.quotes.splice(index, 1)
                if( this.quotes.length < this.maxQuotes){
                  this.display_max_quote = 0;
                }else{
                  this.display_max_quote = 1;
                }
            }
        },
        components:{
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
