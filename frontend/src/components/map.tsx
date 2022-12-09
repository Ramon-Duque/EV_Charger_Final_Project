import { GoogleMap, InfoWindow, useLoadScript } from '@react-google-maps/api';
import React, { useRef } from 'react';
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


   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>

   
 
   return (
    
     <div> 
       {/* When button is click function Geolocation runs */}
       {/* <button className='Geolocation-btn' onClick={geoLocation}>Click to locate</button> */}
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={15} 
       center={pos}>
       <Marker pos={pos}/>
       
       
         
       </GoogleMap>
      
     </div>
     );
    };


  


 


