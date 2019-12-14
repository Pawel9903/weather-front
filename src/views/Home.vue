<template>
    <div>
        <jumbotron />
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Jumbotron from "@/components/Jumbotron.vue";

    @Component({
        components: {Jumbotron}
    })
    export default class Home extends Vue {
    }
</script>

<style scoped>

</style>