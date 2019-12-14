<template>
    <div>
        <jumbotron header="Air Condition" text="The panel allows you to choose a city and see the air quality on a given day." />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import Jumbotron from "@/components/Jumbotron.vue";

    @Component({
        components: {Jumbotron}
    })
    export default class AirCondition extends Vue{
    }
</script>

<style scoped>

</style>