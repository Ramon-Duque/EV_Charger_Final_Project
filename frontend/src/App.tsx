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
import FavoritesContextProvider from './context/FavoriteContextProvider';
import ToggleButtonOptionTwo from './components/button';
 

export interface Coordinates {
   lat: number;
   lng: number;
};

export interface Props {
  stations: StationInfo[]
}

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

     const [stations, setStations] = useState<StationInfo[]>([]);
     useEffect(() => {
     // getStations({pos}).then(response => response.json())
       getStations()
         .then((response) => response.json())
         .then((data) => setStations(data.stations))
         .catch((err) => console.error(err));
     }, []);

     function selectStation(station: StationInfo) {
       setCurrentStation(station)
     }
 

     
return (
   <div>
           <FavoritesContextProvider>

     <Router>
     <Header></Header>
    
     <Routes>
     <Route path= '/' element={<Map pos={pos} stations={stations}/>}/>
       <Route path= '/favorites' element={<FavoritePage/>}/>
      
     {/* <Map  pos= {pos}/> */}
     {/* {pos &&<Station pos={pos}/>} */}
    
     </Routes>
      {/* <Station></Station> */}
      <ToggleButtonOptionTwo></ToggleButtonOptionTwo>
      <Station selectStation={selectStation} stations={stations}></Station>
     {/* <Station selectStation={selectStation}></Station> */}
     {currentStation && <DisplayRestaurants station={currentStation}></DisplayRestaurants> }
     {/* {currentStation && <DisplayCafes station={currentStation}></DisplayCafes>} */}
     {/* {currentStation && <DisplayMovieTheaters station={currentStation}></DisplayMovieTheaters>} */}
     {/* {currentStation && <DisplaySpas station={currentStation}></DisplaySpas>} */}
     {/* {currentStation && <DisplayArtGalleries station={currentStation}></DisplayArtGalleries>} */}
     <Footer></Footer>
     </Router>
     </FavoritesContextProvider>
    </div>
 );
};
 
export default App;

