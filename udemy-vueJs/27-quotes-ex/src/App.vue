<template>
    <div class="container mt-5">
        <app-Header  :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-Header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="quoteDeleted"></app-quote-grid>

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
            appHeader: Header,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
</style>
