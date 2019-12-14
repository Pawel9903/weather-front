<template>
    <div class="form-group">
        <label>City:</label>
        <b-form-select
                v-model="syncedValue"
                :options="options"
                class="mb-3"
                value-field="key"
                text-field="value"
                disabled-field="notEnabled"
                :multiple="false"
        />
    </div>
</template>

<script lang="ts">
    import {Component, PropSync, Vue} from "vue-property-decorator";
    import CitySelectModule from "@/services/CitySelect";
    import {Select as CitySelectModel} from "@/models/Select";

    @Component
    export default class CitySelect extends Vue{
        options : CitySelectModel[] = []
        selected: number | null = null
        @PropSync('value', { type: Array }) syncedValue!: number[]
        created(): void {
            CitySelectModule.loadCitySelect().then(response => { this.options = response });
        }
    }
</script>

<style scoped>

</style>