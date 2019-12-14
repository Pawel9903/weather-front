<template>
    <div>
        <jumbotron header="Air Condition" />
    </div>
</template>

<script>
    import { Component, Vue } from 'vue-property-decorator'
    import Jumbotron from "@/components/Jumbotron";
    @Component({
        components: {Jumbotron}
    })
    export default class AirCondition extends Vue{
    }
</script>

<style scoped>

</style>