import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { getRestaurantsNearby } from './components/Restaurants';
import { Station } from './components/map';

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
      console.log(pos)

 return ( 
    <div>
    <Map  pos= {pos}/>
    {pos &&<Station pos={pos}/>}

   </div>

  );
};


export default App;

