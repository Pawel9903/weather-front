import {AQSubstance} from "@/models/AirQuality/AQSubstance";

export interface AirQuality {
    id: number | null
    indexStatus: boolean | null
    indexCRParam: string | null
    substances: AQSubstance[]
}

export interface AirQualityService {
    loadAirQuality(stationId: number): Promise<AirQuality>
}