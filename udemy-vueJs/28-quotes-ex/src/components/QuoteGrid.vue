<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">{{quote}}</app-quote>
    </div>
</template>

<script>
    import Quote from './Quote.vue';
    export default {
        props: ['quotes'],
        components:{
            appQuote: Quote
        },
        methods:{
            deleteQuote(index){
                //console.log(this.$el.querySelector('button'));
                this.$emit('quoteDeleted', index);
                //console.log(this.$emit('quoteDeleted', index));
            }
        }
    }
</script>

<style>
</style>
