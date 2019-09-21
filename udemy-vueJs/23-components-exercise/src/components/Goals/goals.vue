<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group mb-3">
            <appGoal
            v-for="goal in goals"
            :goal="goal">
            </appGoal>
        </ul>
    </div>
</template>

<script>
  import Goal from './goal.vue';

  export default{
    data: function(){
      return{
        goals:[
          {id: 'Auto', date: 'Normal'},
          {id: 'Atletic body', date: 'Critical'},
          {id: 'Rooller', date: 'Unknow'},
          {id: 'SupraVibe', date: 'Unknow'},
          {id: 'Toilets', date: 'Unknow'},
        ]
      }
    },
    components: {
      appGoal : Goal
    }
  }
</script>

<style>

</style>
