import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
import { DisplayCafes, DisplayRestaurants,
 DisplayMovieTheaters, DisplaySpas,
 DisplayArtGalleries } from './components/ActivitiesNearby';
import { Station } from './components/map';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FavoritePage from './components/FavoritePage';
import { StationInfo } from './models/Station';
import { getStations } from './services/Stations';
import { Data } from '@react-google-maps/api';
 
 
export interface Coordinates {
   lat: number;
   lng: number;
};
 
function App() {
   const [currentStation, setCurrentStation]  = useState<StationInfo>()
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
     function selectStation(station: StationInfo) {
       setCurrentStation(station)
     }
 
return (
   <div>
     <Router>
     <Header></Header>
    
     <Routes>
       <Route path= '/' element={<Map pos={pos}/>}/>
       <Route path= '/favorites' element={<FavoritePage/>}/>
      
     {/* <Map  pos= {pos}/> */}
     {/* {pos &&<Station pos={pos}/>} */}
    
     </Routes>
     <Station selectStation={selectStation}></Station>
     {currentStation && <DisplayRestaurants station={currentStation}></DisplayRestaurants> }
     {/* {currentStation && <DisplayCafes station={currentStation}></DisplayCafes>} */}
     {/* {currentStation && <DisplayMovieTheaters station={currentStation}></DisplayMovieTheaters>} */}
     {/* {currentStation && <DisplaySpas station={currentStation}></DisplaySpas>} */}
     {/* {currentStation && <DisplayArtGalleries station={currentStation}></DisplayArtGalleries>} */}
     <Footer></Footer>
     </Router>
    </div>
 );
};
 
export default App;
