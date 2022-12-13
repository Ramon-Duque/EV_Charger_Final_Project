import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { DisplayCafes, DisplayRestaurants, 
  DisplayMovieTheaters, DisplaySpas, 
  DisplayArtGalleries } from './components/ActivitiesNearby';
// import { getRestaurantsNearby } from './components/Restaurants';
import { Station } from './components/map';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FavoritePage from './components/FavoritePage';
import { StationInfo } from './models/Station';
import { getStations } from './services/Stations';
import { Data } from '@react-google-maps/api';
import FavoritesContextProvider from './context/FavoriteContextProvider';


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
      <FavoritesContextProvider>
      <Router>
      <Header></Header>
      
      <Routes>
        <Route path= '/' element={<Map pos={pos}/>}/>
        <Route path= '/favorites' element={<FavoritePage/>}/>
        
      {/* <Map  pos= {pos}/> */}
      {/* {pos &&<Station pos={pos}/>} */}
      
      </Routes>
      <Station></Station>
      <Footer></Footer>
      {/* <DisplayRestaurants></DisplayRestaurants>  */}
      {/* <DisplayCafes></DisplayCafes> */}
      {/* <DisplayMovieTheaters></DisplayMovieTheaters> */}
      {/* <DisplaySpas></DisplaySpas> */}
      {/* <DisplayArtGalleries></DisplayArtGalleries> */}
      </Router>
      </FavoritesContextProvider>
     </div>
  );
};

export default App;
