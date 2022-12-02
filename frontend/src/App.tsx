import { useEffect, useState } from 'react';
import './App.css';
import Map from './Components/map';

interface pos{
    pos: number;
}

interface Coordinates {
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
    
   <Map  pos= {pos}/>

  );
};



export default App;

