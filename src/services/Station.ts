import {VuexModule, Module, getModule, Action, Mutation} from "vuex-module-decorators";
import store from '@/store'
import {Api} from "@/store/api";
import {Station, StationService} from "@/models/Station";
const qs = require('qs');

@Module({
    namespaced: true,
    name: 'citySelect',
    dynamic: true,
    store
})

class StationModule extends VuexModule implements StationService{
    @Action
    async loadStation(filter: object = {}): Promise<Station[]> {
        return await Api.get('/stations/', {params: filter, paramsSerializer: params => {
                return qs.stringify(params)
            }}).then(({ data }) => data.data) as Station[]
    }
}

export default getModule(StationModule)