import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import  geoLocation  from '../App';
import  Marker  from './Marker';


export default function Map({pos}: {pos:any}){
   const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.REACT_APP_API_KEY!,
     libraries: ["places"],
   });
//  console.log(process.env.REACT_APP_API_KEY)

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
       <Marker position={pos}/>
       
         {/* <Marker position={geoLocation}/> */}
       </GoogleMap>
      
     </div>
     );
    };

// import React, { useState } from 'react';
// import GoogleMapReact from 'google-map-react'
// import Marker from './Marker';



// const Map = (props: any) => {
//     const [center, setCenter] = useState({lat: 11.0168, lng: 76.9558 });
//     const [zoom, setZoom] = useState(11);
//     return (
//         <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBd2ryH_WWjW_6Jel-l-G_GA3wuDTnPXtc' }}
//           defaultCenter={center}
//           defaultZoom={zoom}
//         >
//           <Marker
//             lat={11.0168}
//             lng={76.9558}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
// }

// export default Map;
 
