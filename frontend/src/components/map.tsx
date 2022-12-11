import { GoogleMap, InfoWindow, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import  geoLocation, { Coordinates }  from '../App';
import { StationInfo } from '../models/Station';
import { getStations } from '../services/Stations';
import  Marker  from './Marker';

// export function Station({pos}: {pos:Coordinates}) {
export function Station() {
  const [stations, setStations] = useState<StationInfo[]>()
  useEffect(() => {
    // getStations({pos}).then(response => response.json())
    getStations().then(response => response.json())
    .then(data => setStations(data.stations))
    .catch(err => console.error(err));
    
  }, []);
  console.log(stations)

  function stationPos(station: StationInfo) {
    let lat = station.latitude;
    let lng = station.longitude;
    let name = station.station_name;
    console.log("A Station: " + station.station_name + " " + lat + " " + lng );

    // return (name + " " + lat + " " + lng);  
    return (lat + " " + lng);  

  }

  return (   
    <div> 
      {stations?.map(station => 
        <ul>
          <li>{station.station_name}</li>
          <li>{station.street_address}</li>
          <li>{station.ev_network}</li>
          <button>Click For Places</button>
        </ul>
      )} 

    {/* <Marker onClick={stationPos(station)}><p>{station.station_name} - {station.latitude} - {station.longitude}</p></Marker> */}
    </div>
    );
};

export default function Map({pos}: {pos:any}):any{
   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });

   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>

   return (
     <div> 
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={15} 
       center={pos}>
       <Marker pos={pos}/>
      {/* {pos &&<Station pos={pos}/>}       */}
       </GoogleMap> 
     </div>
     );
};

