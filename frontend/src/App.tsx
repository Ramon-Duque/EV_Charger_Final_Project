import { useEffect, useState } from 'react';
import './App.css';
<<<<<<< HEAD
import Map from './Components/map';

interface pos{
    pos: number;
}

interface Coordinates {
    lat: number;
    lng: number;
};
=======
import  Map  from './components/map';

>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c

function App() {
    

    const [pos, setPos] = useState<Coordinates>();
  
<<<<<<< HEAD
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

=======
  return (
      <Map/>
>>>>>>> 31769b9640a0c97aa5db63780dad302ff284af7c
  );
};



export default App;

