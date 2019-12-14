<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
<script lang="ts">
  import NavBar from "@/components/NavBar.vue";
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    components: {
      NavBar
    }
  })
  export default class App extends Vue {

  }
</script>