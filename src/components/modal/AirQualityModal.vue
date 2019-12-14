<template>
    <div>
        <b-button squared variant="success" size="sm" id="show-btn" @click="$bvModal.show(uniqueId)">Air Quality</b-button>
        <b-modal :id="uniqueId" hide-footer>
            <template v-slot:modal-title>
                {{ 'Air quality' + stationName }}
            </template>
            <div class="d-block text-center">
                <h3>Hello From This Modal!</h3>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide(uniqueId)">Close</b-button>
        </b-modal>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class AirQualityModal extends Vue{
        @Prop({ required: true }) stationId!: number
        @Prop() stationName!: string = ''
        uniqueId: string
        created() {
            this.uniqueId = Math.random().toString(36).substr(2, 9)
        }
    }
</script>

<style scoped>

</style>