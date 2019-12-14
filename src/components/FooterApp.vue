<template>
    <div class="footer"><p>&copy; 2019 Created by PG</p></div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class FooterApp extends Vue{
    }
</script>

<style scoped lang="scss">
    .footer {
        margin-top: 100px;
        width: 100vw;
        background: black;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
            color: white;
        }
    }
</style>