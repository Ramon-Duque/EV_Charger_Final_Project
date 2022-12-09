// import { useEffect, useState } from 'react'
// import { getStations } from '../services/Stations'
// import { StationType, StationInfo } from '../models/Station';
// import Marker from './Marker';
// import { Data, GoogleMap } from '@react-google-maps/api';
// import { Coordinates } from '../App';


// export function Station({pos}: {pos:Coordinates}) {
//   const [stations, setStations] = useState<StationInfo[]>()
//   useEffect(() => {
//     getStations({pos}).then(response => response.json())
//     .then(data => setStations(data.stations))
//     .catch(err => console.error(err));
    
//   }, []);
//   console.log(stations)
//   // function createBtn() => {
//   //   for (let i = 0; i < stations.length; i++) {
//   //     const element = document.createElement("button");
      
//   //   }
//   // }
 
//    function stationPos(station) {
     
     
//    }
    
//   return (
//    <div>
//    {stations?.map(station => 
//        <Marker onClick={() =>stationPos(station)}>{station.station_name} - {station.street_address} - {station.ev_network}</Marker>)}
//    </div>
//   )

// };




