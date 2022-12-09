import { GoogleMap, useLoadScript } from '@react-google-maps/api';

export default function Map({pos}: {pos:any}){
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
       center={pos}
       >
       </GoogleMap>
 
     </div>
     );
};
 
