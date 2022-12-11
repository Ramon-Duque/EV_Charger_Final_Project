export interface StationType {
    region: string;
    total: number;
    stations: Array<Object> | null
}

export interface StationInfo {
    latitude: number;
    longitude: number;
    station_name: string;
    street_address: string;
    ev_network: string;
}