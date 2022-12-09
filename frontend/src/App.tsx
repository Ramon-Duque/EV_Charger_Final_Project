import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
// import { Station } from './components/map';
import { getRestaurantsNearby } from './components/Restaurants';
import { getMyTestResult } from './components/Restaurants';
import Restaurants from './models/Restaurants';

export interface Coordinates {
    lat: number;
    lng: number;
};

function App() {

    useEffect(() => {
      testGetNearby();
    }, []);

    const testGetNearby = async () => {
      const response = await getRestaurantsNearby();
      console.log(response.data);
    }

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
    {/* {pos &&<Station pos={pos}/>} */}
    <button className='btn' onClick={testGetNearby}>BIG Btn</button>  
   </div>

  );
};



export default App;

