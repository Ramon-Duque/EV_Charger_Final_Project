export interface StationType {
    region: string;
    total: number;
    stations: Array<Object> | null
}

export interface StationInfo {
    geometry: any;
    latitude: number;
    longitude: number;
    station_name: string;
    street_address: string;
    ev_network: string;
    id: number;
}