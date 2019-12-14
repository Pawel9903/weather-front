<template>
    <div>
        <b-navbar type="dark" variant="success">
            <b-navbar-brand href="#">Weather</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item :active="routerName === 'home'" href="/">Home</b-nav-item>
                    <b-nav-item :active="routerName === 'airCondition'" href="air-condition">Air Condition</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class NavBar extends Vue {
        get routerName(): string | undefined {
            return this.$router.currentRoute.name
        }
    }
</script>

<style scoped>

</style>