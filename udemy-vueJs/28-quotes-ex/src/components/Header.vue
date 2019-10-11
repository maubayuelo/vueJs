<template>
    <div class="row">
        <div class="col-sm-12 mb-5">
            <h1 class="mb-4">Quotes App</h1>
            <div class="progress">
              <div v-if="quoteCount" class="progress-bar" role="progressbar" :style="{width: (quoteCount/maxQuotes)*100 + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  {{quoteCount}} / {{maxQuotes}}
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['quoteCount', 'maxQuotes']
    }
</script>

<style>
</style>
