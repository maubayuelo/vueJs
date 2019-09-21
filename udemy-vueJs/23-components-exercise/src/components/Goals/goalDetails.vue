<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!goal">Please select a goal</p>
        <p v-else>Goal: {{goal.id}}. Date: {{goal.date}}</p>
        <div class="form-group">
            <input type="text" name="name" id="date_field" value="5 de mayo" class="form-control"/>
        </div>
        <button @click="resetDate" class="btn btn-primary">Change Date</button>
    </div>
</template>

<script>
    import {goalsBus} from '../../main';
    export default{
        data: function(){
            return{
                goal: null
            }
        },
        methods: {
            resetDate(){
                this.goal.date = document.getElementById("date_field").value;;
            }
        },
        created(){
            goalsBus.$on('goalSelected', (goal)=>{
                this.goal = goal;
            });
        }
    }
</script>

<style>

</style>
