import { VuexModule, Module, getModule } from "vuex-module-decorators";
import store from '@/store'

@Module({
    namespaced: true,
    name: 'city',
    store
})

class CityModule extends VuexModule {
    id: any
    name: any
    commune: any
}

export default getModule(CityModule)