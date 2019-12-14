<template>
  <div>
    <nav-bar />
    <router-view />
  </div>
</template>

<style lang="scss">

</style>
<script>
  import NavBar from "@/components/NavBar";
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    components: {
      NavBar
    }
  })
  export default class App extends Vue {

  }
</script>