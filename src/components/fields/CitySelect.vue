<template>
    <div class="form-group">
        <label>City:</label>
        <b-form-select
                placeholder="Select City"
                v-model="syncedValue"
                :options="options"
                class="mb-3"
                value-field="key"
                text-field="value"
                disabled-field="notEnabled"
                :multiple="false">
            <template v-slot:first>
                <option :value="[]" disabled>-- Please select city --</option>
            </template>
        </b-form-select>
    </div>
</template>

<script lang="ts">
    import {Component, PropSync, Vue} from "vue-property-decorator";
    import CitySelectModule from "@/services/CitySelect";
    import {Select} from "@/models/Select";

    @Component
    export default class CitySelect extends Vue{
        options : Select[] = []
        @PropSync('value', { type: Array }) syncedValue!: number[]
        created(): void {
            CitySelectModule.loadCitySelect().then(response => { this.options = response });
        }
    }
</script>

<style scoped>

</style>