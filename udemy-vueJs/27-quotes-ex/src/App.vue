<template>
    <div class="container mt-5">
        <h1 class="mb-4">Quotes App</h1>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="quoteDeleted"></app-quote-grid>

    </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
    export default {
        data: function(){
          return {
            quotes:[
              'This is a default quote!'
            ],
            maxQuotes: 10
          }
        },
        methods:{
            newQuote(quote){
                this.quotes.push(quote);
            },
            quoteDeleted(index){
                this.quotes.splice(index, 1)
            }
        },
        components:{
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
