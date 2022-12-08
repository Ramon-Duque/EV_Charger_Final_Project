import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { Station } from './components/Chargestations';
import { DisplayCafes, DisplayRestaurants, 
  DisplayMovieTheaters, DisplaySpas, 
  DisplayArtGalleries } from './components/ActivitiesNearby';

export interface Coordinates {
    lat: number;
    lng: number;
};

function App() {

    const [pos, setPos] = useState<Coordinates>();
  
    useEffect(() => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const Coordinates = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
          }
          setPos(Coordinates);
          })
      }},[]);

 return ( 
    <div>
    {/* <Station></Station> */}
    <Map  pos= {pos}/>
    {/* <DisplayRestaurants></DisplayRestaurants>  */}
    {/* <DisplayCafes></DisplayCafes> */}
    {/* <DisplayMovieTheaters></DisplayMovieTheaters> */}
    {/* <DisplaySpas></DisplaySpas> */}
    {/* <DisplayArtGalleries></DisplayArtGalleries> */}
   </div>

  );
};

export default App;
