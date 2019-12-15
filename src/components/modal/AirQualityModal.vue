<template>
    <div>
        <b-button variant="success" size="sm" id="show-btn" @click="openModal">Air Quality</b-button>
        <b-modal :id="uniqueId" hide-footer>
            <template v-slot:modal-title>
                {{ `Air quality: ${stationName}` }}
            </template>
            <div  v-if="loading" class="loader" >
                <b-spinner variant="success" label="Spinning"/>
            </div>
            <div v-else class="d-block text-center">
                <a-q-substance-table :items="getSubstances" />
            </div>
            <b-button class="mt-3 float-md-right" variant="danger" @click="closeModal">Close</b-button>
        </b-modal>
    </div>
</template>

<script lang="ts">
    import {Component, Inject, Prop, Vue} from "vue-property-decorator";
    import {AirQuality, AirQualityService} from "@/models/AirQuality/AirQuality";
    import AQSubstanceTable from "@/components/tables/AQSubstanceTable.vue";
    import {AQSubstance} from "@/models/AirQuality/AQSubstance";
    @Component({
        components: {AQSubstanceTable}
    })
    export default class AirQualityModal extends Vue{
        @Inject() readonly airQualityService!: AirQualityService
        @Prop({ required: true }) stationId!: number
        @Prop({ default: '' }) stationName?: string
        loading: boolean = true
        uniqueId: string = ''
        airQuality: AirQuality | null = null
        get getSubstances(): AQSubstance[] {
            return this.airQuality && this.airQuality.substances? this.airQuality.substances : []
        }
        created(): void {
            this.uniqueId = Math.random().toString(36).substr(2, 9)
        }
        openModal(): void {
            this.$bvModal.show(this.uniqueId)
            if(this.airQuality === null) {
                this.loading = true
                this.loadAirQuality()
                this.loading = false
            }
        }
        closeModal() {
            this.$bvModal.hide(this.uniqueId)
        }
        loadAirQuality(): void {
            this.airQualityService.loadAirQuality(this.stationId).then(response => this.airQuality = response)
        }
    }
</script>

<style scoped lang="scss">
    .loader {
        width: 100%;
        text-align: center;
    }
</style>