<<<<<<< HEAD:frontend/src/Components/map.tsx
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import  geoLocation  from '../App';
=======
import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c:frontend/src/components/map.tsx


<<<<<<< HEAD:frontend/src/Components/map.tsx

export default function Map({pos}: {pos:any}){
=======
export default function Map(){
  const [pos, setPos] = useState<Coordinates>();
  
  function geoLocation (){
    console.log(navigator.geolocation) //test
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const TheCoordinates = { //this was originally Coordinates
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
        setPos(TheCoordinates);
        //console.log("Navigator Current Position is: " + TheCoordinates)
      });
    }
  };

>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c:frontend/src/components/map.tsx
   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });
<<<<<<< HEAD:frontend/src/Components/map.tsx
 console.log(process.env.REACT_APP_API_KEY)

   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>
=======

   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return <div>Loading Maps</div>
>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c:frontend/src/components/map.tsx
 
   return (
     <div> 
       {/* When button is click function Geolocation runs */}
       <button className='Geolocation-btn' onClick={geoLocation}>Click to locate</button>
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={15} 
       center={pos}
       >
         {/* <Marker position={geoLocation}/> */}
       </GoogleMap>
 
     </div>
     );
<<<<<<< HEAD:frontend/src/Components/map.tsx
    };
 
=======
 }
>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c:frontend/src/components/map.tsx
