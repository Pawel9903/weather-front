<template>
    <div>
        <h3>Air condition</h3>
        <b-table :items="items" :fields="fields">
            <template v-slot:cell(substance)="{ item }">
                {{ item.name }}
            </template>
            <template v-slot:cell(status)="{ item }">
                {{ item.index | objectProp('status') }}
            </template>
            <template v-slot:cell(calculate)="{ item }">
                {{ item | objectProp('calc_date') }}
            </template>
            <template v-slot:cell(source)="{ item }">
                {{ item | objectProp('source_date') }}
            </template>
            <template v-if="!items.length" v-slot:table-caption>No Results.</template>
        </b-table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {AQSubstance} from "@/models/AirQuality/AQSubstance";
    @Component({
        filters: {
            objectProp(value: object | [], prop: string | number) {
                return value[prop] === undefined? 'No results' : value[prop]
            }
        }
    })
    export default class AQSubstanceTable extends Vue {
        @Prop() items!: AQSubstance[]
        fields: string[] = ['substance', 'status', 'calculate', 'source']
    }
</script>

<style scoped>

</style>