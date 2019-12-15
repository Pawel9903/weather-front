import {Commune} from "@/models/Commune";
import {Select} from "@/models/Select";

export interface City {
    id: number,
    name: string
    commune: Commune
}

export interface CitySelectService {
    loadCitySelect(): Promise<Select[]>
}