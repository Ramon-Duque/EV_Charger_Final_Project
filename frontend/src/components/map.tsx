import React, { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

interface Coordinates {
  lat: number;
  lng: number;
};

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

   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.GoogleApiKey!,
     libraries: ["places"],
   });

   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return <div>Loading Maps</div>
 
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
 }