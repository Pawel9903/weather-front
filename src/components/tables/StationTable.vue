<template>
    <div>
        <h3>Stations in city</h3>
        <b-table :items="items" :fields="fields">
            <template v-slot:cell(coords)="{ item }">
                {{ item.coords.geometry.coordinates }}
            </template>
            <template v-slot:cell(district)="{ item }">
                {{ item.city.commune.district }}
            </template>
            <template v-slot:cell(province)="{ item }">
                {{ item.city.commune.province }}
            </template>
            <template v-if="!items.length" v-slot:table-caption>No Results.</template>
        </b-table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Station} from "@/models/Station";

    @Component
    export default class StationTable extends Vue {
        @Prop() items!: Station[]
        fields: string[] = ['name', 'address', 'district', 'province', 'coords']
    }
</script>

<style scoped>

</style>