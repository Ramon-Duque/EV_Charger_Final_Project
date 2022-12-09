import { useEffect, useState } from 'react'
import { getStations } from '../services/Stations'
import { StationType, StationInfo } from '../models/Station';
import Marker from './Marker';
import { Data, GoogleMap } from '@react-google-maps/api';
import { Coordinates } from '../App';

export function Station() {
  const [stations, setStations] = useState<StationInfo[]>()
  useEffect(() => {
    getStations().then(response => response.json())
    .then(data => setStations(data.stations))
    .catch(err => console.error(err));
    
  }, []);


 
   
    
  return (
   <div>
   {stations?.map(station => 
       <p>{station.longitude} - {station.street_address} - {station.ev_network}</p>)}
   </div>
  )

};




