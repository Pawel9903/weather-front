<template>
  <div>
    <nav-bar />
    <div class="app-content">
      <router-view />
    </div>
    <footer-app />
  </div>
</template>

<script lang="ts">
  import NavBar from "@/components/NavBar.vue";
  import { Vue, Component } from 'vue-property-decorator'
  import FooterApp from "@/components/FooterApp.vue";

  @Component({
    components: {
      FooterApp,
      NavBar
    }
  })
  export default class App extends Vue {

  }
</script>

<style lang="scss">
  .app-content {
    min-height: 65vh;
  }
</style>