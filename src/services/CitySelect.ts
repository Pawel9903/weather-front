import {VuexModule, Module, getModule, Action, Mutation} from "vuex-module-decorators";
import store from '@/store'
import {Api} from "@/store/api";
import {Select} from "@/models/Select";
import {CitySelectService} from "@/models/City";

@Module({
    namespaced: true,
    name: 'citySelectModule',
    dynamic: true,
    store
})

class CitySelectModule extends VuexModule implements CitySelectService {
    @Action
    async loadCitySelect(): Promise<Select[]> {
        return await Api.get('/stations/select/').then(({ data }) => data.data) as Select[]
    }
}

export default getModule(CitySelectModule)