import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import  geoLocation  from '../App';



export default function Map({pos}: {pos:any}){
  const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });
 console.log(process.env.REACT_APP_API_KEY)

   if (loadError) return <div>Error Loading Map</div>
   if (!isLoaded) return<div>Loading Maps</div>
 
   return (
     <div> 
       {/* When button is click function Geolocation runs */}
       {/* <button className='Geolocation-btn' onClick={geoLocation}>Click to locate</button> */}
       <GoogleMap 
       mapContainerClassName="map-container"
       zoom={15} 
       center={pos}
       >
         {/* <Marker position={geoLocation}/> */}
       </GoogleMap>
 
     </div>
     );
    };
 
