import { useEffect, useState } from 'react';
import './App.css';
import Evstation from './components/Evstation';
import Map from './components/map';


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
    
   <Map  pos= {pos}/>
   
   </div>

  );
};



export default App;

