import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useState } from 'react'; 

interface Coordinates {
  lat: number;
  lng: number;
};

export default function Map(){
  const [pos, setPos] = useState<Coordinates>();
  
  function geoLocation (){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const Coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        setPos(Coordinates);
        });
      }};
   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.GoogleApiKey!,
     libraries: ["places"],
   });
 
   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return( <><div>Loading Maps</div>
   <button onClick={geoLocation}></button></>)
 
   return (
     <div> 
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={10} 
       center={pos}
       >
       </GoogleMap>
 
     </div>
     );
 }
