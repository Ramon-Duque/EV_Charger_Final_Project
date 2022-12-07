import { useEffect, useState } from 'react';

export interface Coordinates {
    lat: number;
    lng: number;
};

import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import  geoLocation  from '../App';
import { useCallback } from 'react';
export default function Map({pos}: {pos:any}){
  const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });
 console.log(process.env.REACT_APP_API_KEY)
   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>
    function onLoad (mapInstance: google.maps.Map) {
      loadNearby(mapInstance)
      console.log("here");
    }
  const loadNearby = (map: google.maps.Map) => {
    let request = {
      keyword: "cafe",
      query: "cafe",
      fields: ["name", "geometry"],
      location: pos,
      radius: 500
    };
    let service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, callback);
    service.nearbySearch(request, () => callback);
    function callback(results: string | any[], status: google.maps.places.PlacesServiceStatus) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log(results[i]);
        }
      };
    }
    console.log("here");
  }
   return (
     <div>
       {/* When button is click function Geolocation runs */}
       {/* <button className='Geolocation-btn' onClick={geoLocation}>Click to locate</button> */}
       <GoogleMap
       mapContainerClassName="map-container"
       zoom={15}
       center={pos}
       onLoad={onLoad}
       >
         {/* <Marker position={geoLocation}/> */}
       </GoogleMap>
     </div>
     );
    };