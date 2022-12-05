import React, { useState } from "react";
import { getPositionOfLineAndCharacter } from "typescript";
import Map from "./map";
import  geoLocation  from '../App';

// cafe = 'cafe';
// artGallery = 'art_gallery';
// movieTheater = 'movie_theater';
// restaurant = 'restaurant';
// spa = 'spa';

interface Coordinates {
    lat: number;
    lng: number;
};

let map: google.maps.Map;
let service: google.maps.places.PlacesService;
let infowindow: google.maps.InfoWindow;

const Nearby = ({pos}:{pos:Coordinates}) => {

    // let coords: google.maps.places.PlaceResult[] = [];
    // let myLocation = new google.maps.LatLng(pos);
    
      const loadNearby = (map: HTMLDivElement | google.maps.Map) => {
        let request = {
          keyword: "cafe",
          query: "cafe",
          fields: ["name", "geometry"]
        };
    
        service = new google.maps.places.PlacesService(map);
        // service.nearbySearch(request, callback);
        service.nearbySearch(request, () => callback);

        function callback(results: string | any[], status: google.maps.places.PlacesServiceStatus) {
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
              createMarker(results[i]);
            }
          };
        }
      }

      function createMarker(place: google.maps.places.PlaceResult) {
        if (!place.geometry || !place.geometry.location) return;
      
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
        });
      
        google.maps.event.addListener(marker, "click", () => {
          infowindow.setContent(place.name || "");
          infowindow.open(map);
        });
      }

    }

  export default Nearby;


  
    // function callback(results: string | any[], status: google.maps.places.PlacesServiceStatus) {


  // function cafeNearby({pos}:{pos:Coordinates}){
  //   let myLocation = new google.maps.LatLng(pos);
      
  //   const loadNearby = (map: HTMLDivElement | google.maps.Map) => {
  //     let request = {
  //       location: pos,
  //       radius: '500',
  //       type: ['cafe']
  //     };
  //   }

  //   let service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch(request, callback);
  // }

  // function callback(results, status) {
  //   if (status == google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //   }
  // }


  // export const Nearby = ({pos}:{pos:Coordinates}) => {
  //   // const [pos, setPos] = useState<Coordinates>();


  //   //let coords = [{GeolocationCoordinates}];  //[{GeolocationCoordinates}] //[{}]
  //   //let coords = pos;//useState<Coordinates>();
  //   let coords: google.maps.places.PlaceResult[] = [];
  //   //const [center,setCenter] = useState({pos});
  //   //const [coordsResult, setCoordsResult] = useState([]);
    
    
  //     const loadNearby = (map: HTMLDivElement | google.maps.Map) => {
  //       let request = {
  //         keyword: "cafe",
  //         query: "cafe",
  //       // location: position,
  //       // rankBy: google.maps.places.RankBy.DISTANCE,
  //         fields: ["name", "geometry"]
  //       };
    
  //       let service = new google.maps.places.PlacesService(map);
    
  //       service.findPlaceFromQuery(request, (results, status) => {
  //         if (status === google.maps.places.PlacesServiceStatus.OK && results ) { //!== null
  //           for (let i = 0; i < results.length; i++) {
  //             coords.push(results[i]);
  //             console.log("result: " + results[i]);
  //           }
    
  //           // setCenter(center);
  //           //setCenter(results[0].geometry.location);
  //           // setCoordsResult(coordsResult);
  //           //setCoordsResult(coords);
            
  //        }
  //       });
  //     };
  //   }