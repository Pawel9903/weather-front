<template>
    <div>
        <jumbotron header="Air Condition" text="The panel allows you to choose a city and see the air quality on a given day." />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import Jumbotron from "@/components/Jumbotron.vue";
    import {CitySelect} from "@/models/city";
    import CitySelectModule from "@/store/modules/citySelect";

    @Component({
        components: {Jumbotron}
    })
    export default class AirCondition extends Vue{
        select : CitySelect[] = []
        created() {
            CitySelectModule.loadCitySelect().then(response => { this.select = response });
        }
    }
</script>

<style scoped>

</style>