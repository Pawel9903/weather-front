import {AQSubstanceIndex} from "@/models/AirQuality/AQSubstanceIndex";

export interface AQSubstance {
    name: string
    sourceDate: string | null
    calcDate: string | null
    index: AQSubstanceIndex
}