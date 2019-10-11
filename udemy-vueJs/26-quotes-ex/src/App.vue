<template>
    <div class="container mt-5">
        <h1 class="text-uppercase text-bold mb-3">Quote App</h1>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-progress-bar>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    </div>
</template>

<script>
    import progressBar from './components/progressBar.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';
    export default {
        data: function(){
            return{
                quotes: [
                    'Holy guacamole! You should check in on some of those fields below.'
                ],
                maxQuotes:10
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length >= this.maxQuotes){
                    return alert ('please delete quote first')
                }else{
                    this.quotes.push(quote);
                }
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components:{
            appProgressBar : progressBar,
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote
        }
    }
</script>

<style>
    div {font-family: 'Montserrat', sans-serif;}h1 {font-weight: 700}
</style>
