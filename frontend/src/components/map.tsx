import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import  geoLocation, { Coordinates }  from '../App';
import { StationInfo } from '../models/Station';
import { getStations } from '../services/Stations';
import  Marker  from './Marker';


export default function Map({pos}: {pos:any}):any{
   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });


    function Station({pos}: {pos:Coordinates}) {
      const [stations, setStations] = useState<StationInfo[]>()
      useEffect(() => {
        getStations({pos}).then(response => response.json())
        .then(data => setStations(data.stations))
        .catch(err => console.error(err));
        
      }, []);
      console.log(stations)

      // function stationPos(station) {
     
     
      // }
   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>

   Station({pos});
 
   return (
    
     <div> 
       {/* When button is click function Geolocation runs */}
       {/* <button className='Geolocation-btn' onClick={geoLocation}>Click to locate</button> */}
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={15} 
       center={pos}>
        {/* {stations?.map(station => 
       <Marker  position={pos} onClick={() =>stationPos(station)}>{station.station_name} - {station.street_address} - {station.ev_network}</Marker>)} */}
       
       
         
       </GoogleMap>
      
     </div>
     );
    };
  }


 
