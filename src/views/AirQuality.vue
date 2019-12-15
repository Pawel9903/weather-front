<template>
    <div>
        <jumbotron header="Air quality" text="The panel allows you to choose a city and see the air quality on a given day." />
        <div class="container" >
            <div class="text-center">
                <h2>Choose a city to display stations.</h2>
            </div>
            <city-select :value="stationIds" @update:value="stationIds = $event" />
            <station-table :items="stations" />
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Inject, Vue, Watch} from 'vue-property-decorator'
    import Jumbotron from "@/components/Jumbotron.vue";
    import CitySelect from "@/components/fields/CitySelect.vue";
    import {Station, StationService} from "@/models/Station";
    import StationTable from "@/components/tables/StationTable.vue";

    @Component({
        components: {CitySelect, Jumbotron, StationTable}
    })
    export default class AirQuality extends Vue{
        @Inject() readonly stationService!: StationService
        stationIds: number[] = []
        stations: Station[] = []
        get stationFilter(): object {
            return { filter: {id: this.stationIds} }
        }
        @Watch('stationIds') onStationIdsChanged(): void {
            this.getStations()
        }
        getStations(): void {
            this.stationService.loadStation(this.stationFilter).then(response => { this.stations = Object.values(response) });
        }
    }
</script>

<style scoped>

</style>