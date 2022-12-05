import React, { useState } from "react";
import { getPositionOfLineAndCharacter } from "typescript";
// import { useQuery } from 'react-query';
import Map from "./map";
import  geoLocation  from '../App';

let map: google.maps.Map; //| HTMLDivElement remove to alleviate error
let service;
let infowindow: google.maps.InfoWindow;

export default function initMap() {
  const sydney = new google.maps.LatLng(-33.867, 151.195);
  const 

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, { //type assertion '...'
    center: sydney,
    zoom: 15,
  });

  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };

  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      //map.setCenter(results[0].geometry.location);
    }
  });
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

// window.initMap = initMap;
