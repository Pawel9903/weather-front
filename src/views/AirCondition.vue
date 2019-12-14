<template>
    <div>
        <jumbotron header="Air Condition" text="The panel allows you to choose a city and see the air quality on a given day." />
        <div class="container" >
            <city-select :value="stationIds" @update:value="stationIds = $event" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator'
    import Jumbotron from "@/components/Jumbotron.vue";
    import CitySelect from "@/components/fields/CitySelect.vue";
    import {Station} from "@/models/Station";
    import StationModule from "@/services/Station";

    @Component({
        components: {CitySelect, Jumbotron}
    })
    export default class AirCondition extends Vue{
        stationIds: number[] = []
        stations: Station[] = []
        get stationFilter(): object {
            return this.stationIds
        }
        @Watch('stationIds') onStationIdsChanged(val: number[], nevVal: number[]): void {
            this.getStations()
        }
        getStations(): void {
            StationModule.loadStation(this.stationFilter).then(response => { this.stations = response });
        }
    }
</script>

<style scoped>

</style>