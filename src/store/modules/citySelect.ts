import {VuexModule, Module, getModule, Action, Mutation} from "vuex-module-decorators";
import store from '@/store'
import {Api} from "@/store/api";
import {CitySelect} from "@/models/city";

@Module({
    namespaced: true,
    name: 'citySelect',
    dynamic: true,
    store
})

class CitySelectModule extends VuexModule {
    data: CitySelect[] = [];
    count: number = 0;

    @Mutation
    setCitySelect(data: CitySelect[], count: number) {
        this.data = data
        this.count = count
    }

    @Action({ commit: 'setCitySelect' })
    async loadCitySelect() {
    return await Api.get('/stations/select/').then(({ data }) => data.data) as CitySelect[]
    }
}

export default getModule(CitySelectModule)