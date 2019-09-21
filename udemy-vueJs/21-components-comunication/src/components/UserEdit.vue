<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>
            User Age: {{userAge}}
        </p>
        <button @click="changeAge" type="button" class="btn btn-primary mt-1">Edit Age</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    props: {
        userAge : Number
    },
    methods: {
        changeAge() {
            this.userAge = 30;
            //this.$emit('ageWasEdited', this.userAge )
            eventBus.$emit('ageWasEdited', this.userAge )
        }
    },
    created(){
    }
}
</script>

<style scoped>
    div {
        background-color: #55efc4;
    }
</style>
