import { StationInfo } from "./Station";
export let favStation: StationInfo[] = []

export function addFavorite(newFavorite:StationInfo) {
    favStation.push(newFavorite)
}

export function deleteFavorite(index: number) {
    favStation.slice(index, 1)
}