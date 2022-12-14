import { useEffect, useState } from 'react';
import './App.css';
import Map from './components/map';
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
 
export interface Props {
 stations: StationInfo[]
}
 
function App() {
  // const [currentStation, setCurrentStation]  = useState<StationInfo>()
  // const [currentButton, setCurrentButton] = useState<string>()
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
        <Footer></Footer>
        </Router>
        </FavoritesContextProvider>
    </div>
    );
};

export default App;
