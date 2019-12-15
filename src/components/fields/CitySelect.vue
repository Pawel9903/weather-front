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
    import {Component, Inject, PropSync, Vue} from "vue-property-decorator";
    import {Select} from "@/models/Select";
    import {CitySelectService} from "@/models/City";

    @Component
    export default class CitySelect extends Vue {
        @Inject() readonly citySelectService!: CitySelectService
        options : Select[] = []
        @PropSync('value', { type: Array }) syncedValue!: number[]
        created(): void {
            this.citySelectService.loadCitySelect().then(response => this.options = response);
        }
    }
</script>

<style scoped>

</style>