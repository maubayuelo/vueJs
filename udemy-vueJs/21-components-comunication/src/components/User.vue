<template>
    <div class="component">
        
        <h1>The User Component</h1>
        <p>
            Actual name is {{name}}
        </p>
        <button type="button" class="btn btn-primary btn-block mt-1" @click="changeName">Change my name</button>
        <hr>
        <div class="row">
            <div class="col-12">
                <app-user-detail
                    :myName="name"
                    :resetFromParent="resetFcEx"
                    @nameWasReset="name = $event"
                    :userAge="age"
                    ></app-user-detail>
            </div>
            <div class="col-12 mt-3">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'Max',
                age: 28
            }
        },
        methods: {
            changeName(){
                this.name = 'Mauricio'
            },
            resetFcEx(){
                this.name = 'Max reset from parent'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    .container{
        max-width: 300px;
    }
    div {
        background-color: #dfe6e9;
    };
    hr {
        border-top-color: #b2bec3;
    }
</style>
