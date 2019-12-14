<template>
    <div>
        <b-jumbotron bg-variant="info" text-variant="white" class="text-center" >
            <template v-slot:header>{{ header }}</template>
            <template v-slot:lead>
                {{ text }}
            </template>
        </b-jumbotron>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from "vue-property-decorator"

    @Component
    export default class Jumbotron extends Vue {
        @Prop({
            default: 'Weather'
        })
        header?: string
        @Prop({
            default: 'Platform providing weather news.'
        })
        text?: string
    }
</script>

<style lang="scss" scoped>
    .jumbotron {
        border-radius: unset;
    }
</style>