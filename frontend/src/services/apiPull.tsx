
import { useContext } from "react";
import axios from "axios";
import { Place } from "../models/Place";


export const getPlaces = () => {
    return axios.get<Place>(`https://maps.googleapis.com/maps/api/js?key=GoogleApiKey&libraries=places&callback=initMap`)
};