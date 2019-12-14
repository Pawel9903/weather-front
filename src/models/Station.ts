import {City} from "@/models/City";
import {GeoJson} from "@/models/GeoJson";

export interface Station {
    id: number
    name: string
    address: string
    coords: GeoJson
    city: City
}