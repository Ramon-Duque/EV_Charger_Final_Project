import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { Station } from './components/Chargestations';
import { getRestaurantsNearby } from './components/Restaurants';
import { getMyTestResult } from './components/Restaurants';

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
      console.log("RESULT OF GET RESTAURANT IS!: " + getRestaurantsNearby);
      console.log("TEST RESULT!: " + getMyTestResult);

 return ( 
    <div>
    <Station></Station>
   <Map  pos= {pos}/>
   {/* {getRestaurantsNearby} */}
   
   </div>

  );
};



export default App;

