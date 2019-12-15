import {VuexModule, Module, getModule, Action} from "vuex-module-decorators";
import store from '@/store'
import {Api} from "@/store/api";
import {AirQuality, AirQualityService} from "@/models/AirQuality/AirQuality";
const qs = require('qs');

@Module({
    namespaced: true,
    name: 'airQualityModule',
    dynamic: true,
    store
})

class AirQualityModule extends VuexModule implements AirQualityService{
    @Action
    async loadAirQuality(stationId: number): Promise<AirQuality> {
        return await Api.get(`/stations/${stationId}/air-quality/`).then(({ data }) => data) as AirQuality
    }
}

export default getModule(AirQualityModule)