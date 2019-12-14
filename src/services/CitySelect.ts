import {VuexModule, Module, getModule, Action, Mutation} from "vuex-module-decorators";
import store from '@/store'
import {Api} from "@/store/api";
import {Select} from "@/models/Select";

@Module({
    namespaced: true,
    name: 'citySelect',
    dynamic: true,
    store
})

class CitySelectModule extends VuexModule {
    @Action
    async loadCitySelect(): Promise<Select[]> {
        return await Api.get('/stations/select/').then(({ data }) => data.data) as Select[]
    }
}

export default getModule(CitySelectModule)