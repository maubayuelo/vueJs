<template>
    <div class="component">
        <h3>User Details</h3>
        <p>User Name: {{myName}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="reverseName" type="button" class="btn btn-primary btn-block mt-1">Reverse name</button>
        <button @click="resetName" type="button" class="btn btn-primary  btn-block mt-1">Reset name</button>
        <button @click="resetFromParent()" type="button" class="btn btn-primary  btn-block mt-1">Reset From Parent</button>

    </div>
</template>

<script>
import {eventBus} from '../main.js';
    export default {
        props: {
            myName: {
                type: String,
                required: true
            },
            resetFromParent : Function,
            userAge : Number,
        },
        methods: {
            reverseName() {
                this.myName = this.myName.split("").reverse().join("");
            },
            resetName(){
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName)
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: #fab1a0;
    }
</style>
