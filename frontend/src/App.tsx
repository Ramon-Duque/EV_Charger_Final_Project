import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { DisplayCafes, DisplayRestaurants, 
  DisplayMovieTheaters, DisplaySpas, 
  DisplayArtGalleries } from './components/ActivitiesNearby';
import { getRestaurantsNearby } from './components/Restaurants';
import { Station } from './components/map';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


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

      // console.log(pos);

 return ( 
    <div>
      <Header></Header>
      <Map  pos= {pos}/>
      {/* {pos &&<Station pos={pos}/>} */}
      <Station></Station>
      <Footer></Footer>
    {/* <DisplayRestaurants></DisplayRestaurants>  */}
    {/* <DisplayCafes></DisplayCafes> */}
    {/* <DisplayMovieTheaters></DisplayMovieTheaters> */}
    {/* <DisplaySpas></DisplaySpas> */}
    {/* <DisplayArtGalleries></DisplayArtGalleries> */}
   </div>

  );
};

export default App;
