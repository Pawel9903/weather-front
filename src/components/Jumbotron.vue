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

<script>
    import { Component, Vue, Prop } from "vue-property-decorator"

    @Component
    export default class Jumbotron extends Vue {
        @Prop() header: string = 'Weather';
        @Prop() text: string = 'Platform providing weather news.'
    }
</script>

<style lang="scss" scoped>
    .jumbotron {
        border-radius: unset;
    }
</style>