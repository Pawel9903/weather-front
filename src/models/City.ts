import {Commune} from "@/models/Commune";

export interface City {
    id: number,
    name: string
    commune: Commune
}