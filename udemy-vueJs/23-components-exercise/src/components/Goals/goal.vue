<template>
        <li class="list-group-item"
            @click="goalSelected">
            {{ goal.id }}
        </li>
</template>

<script>
        import {goalsBus} from '../../main';
        export default{
                props: ['goal'],
                methods:{
                  goalSelected(){
                    goalsBus.$emit('goalSelected', this.goal);
                  }
                }
        }
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>
