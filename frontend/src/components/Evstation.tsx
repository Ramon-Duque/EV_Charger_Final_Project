import React, { useState } from "react";


// import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
// // import { Coordinates } from "../App";

// interface Coordinates {
//     lat: number;
//     lng: number;
// };

// const Map = ({pos}:{pos:Coordinates}) => {
// let coords = [];
// const [center,setCenter] = useState({pos});
// const [coordsResult, setCoordsResult] = useState([]);

//   const onMapLoad = (map: HTMLDivElement | google.maps.Map) => {
//     let request = {
//       query: "EV Charging Station",
//     keyword: "EV Charging Station",
//       fields: ["name", "geometry"]
//     };

//     let service = new google.maps.places.PlacesService(map);

//     service.findPlaceFromQuery(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK && results !== null) {
//         for (var i = 0; i < results.length; i++) {
//           coords.push(results[i]);
//         }

//         setCenter(center);
//         // setCenter(results[0].geometry.location)
//         setCoordsResult(coordsResult);
//         // setCoordsResult(coords)
        
//      }
//     });
//   };

//     return (
//       <div>
//         <GoogleMap
//           center={pos}
//           zoom={13}
//           onLoad={map => onMapLoad(map)}
//           mapContainerStyle={{ height: "400px", width: "800px" }}
//         >
//           {/* {coordsResult.length !== 0 && */}
//             {/* coordsResult.map(function(results, i) { */}
//                {/* return (
//                  <Marker key={i} position={results.geometry.location}>
//                    <InfoWindow 
//                  options={{ maxWidth: 300 }}>
                    
//                        <span>{results.name}</span>
                    
//                    </InfoWindow>
//                  </Marker>
//                );
//             })} */}
//         </GoogleMap>
//       </div>
//     );
//   }


// export default Map;


