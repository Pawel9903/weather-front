<template>
    <div>
        <b-navbar type="dark" variant="success">
            <b-navbar-brand>Weather</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Home</b-nav-item>
                    <b-nav-item href="#">Air Condition</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class NavBar extends Vue {
    }
</script>

<style scoped>

</style>