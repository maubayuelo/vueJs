<template>
    <div class="container">
        <app-header></app-header>
        <div class="row">
            <app-goals></app-goals>
            <app-goal-details></app-goal-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Goals from './components/Goals/goals.vue';
    import goalDetails from './components/Goals/goalDetails.vue';
    export default {
        components: {
            appHeader: Header,
            'app-goals': Goals,
            'app-goal-details': goalDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
