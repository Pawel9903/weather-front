<template>
    <div>
        <jumbotron />
    </div>
</template>

<script>
    import {Component, Vue} from "vue-property-decorator";
    import Jumbotron from "@/components/Jumbotron";

    @Component({
        components: {Jumbotron}
    })
    export default class Home extends Vue {
    }
</script>

<style scoped>

</style>