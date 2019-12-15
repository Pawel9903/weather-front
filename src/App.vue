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
  import {Vue, Component, Provide} from 'vue-property-decorator'
  import FooterApp from "@/components/FooterApp.vue";
  import StationModule from "@/services/Station";
  import CitySelectModule from "@/services/CitySelect";
  import AirQualityModule from "@/services/AirQuality";
  import {CitySelectService} from "@/models/City";
  import {StationService} from "@/models/Station";
  import {AirQualityService} from "@/models/AirQuality/AirQuality";

  @Component({
    components: {
      FooterApp,
      NavBar
    }
  })
  export default class App extends Vue {
    @Provide() stationService:StationService = StationModule
    @Provide() citySelectService: CitySelectService = CitySelectModule
    @Provide() airQualityService: AirQualityService = AirQualityModule
  }
</script>

<style lang="scss">
  .app-content {
    min-height: 70vh;
  }
</style>