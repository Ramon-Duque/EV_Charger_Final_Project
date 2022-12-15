import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useContext,  useState } from "react";
import  { Coordinates } from "../App";
import { FavoritesContext } from "../context/FavoriteContext";
import { StationInfo } from "../models/Station";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import '../CSS/Stations.css';
import { DisplayCafes, DisplayRestaurants,
  DisplayMovieTheaters, DisplaySpas,
  DisplayArtGalleries } from './ActivitiesNearby';
import { FcChargeBattery, FcLowBattery, FcMiddleBattery, FcHighBattery  } from 'react-icons/fc';



export interface IStationProps {
 selectStation:(station: StationInfo,buttonName: string)=> void, pos?: Coordinates, stations: StationInfo[]
}

export function Station({selectStation, pos, stations}: IStationProps) { 


  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const favoritesClicked = (id: number) => {
      const clicked = favorites.some((station: StationInfo) => station.id === id);
      return clicked;
  }

  

  return (
    <div className='station-container'>
      <h1>Electric Vehicle Charging Stations Near You</h1>
      {stations?.map((station) => (
        <>
      <div className='stations'>
          <ul>
            <h4 id='station-header'><FcChargeBattery/>{station.ev_network}</h4>
          </ul>
          <ul> {station.station_name}</ul>
          <p>Address: {station.street_address}</p>
          <ul>Detriot, MI</ul>
          <ul className="station-buttons">
            <button className="restaurant-btn" onClick={() => selectStation(station, "RestaurantButton")}><FcMiddleBattery/> Restaurants </button>
            <button className="cafe-btn" onClick={() => selectStation(station, "CafeButton")}><FcHighBattery/> Cafes </button>
            <button className="movie-theater-btn" onClick={() => selectStation(station, "MovieTheaterButton")}><FcLowBattery/> Movie Theaters </button>
            <button className="spa-btn" onClick={() => selectStation(station, "SpaButton")}><FcMiddleBattery/> Spas </button>
            <button className="art-gallery-btn" onClick={() => selectStation(station, "ArtGalleryButton")}><FcLowBattery/> Art Galleries </button>
            <div className="favButtons">
            {favoritesClicked(station.id) ? (
              <button className="rem-btn"
              onClick ={() => removeFavorite(station.id)}>
              <BsFillStarFill/> Remove Favorite
              </button>
            ): (
              <button className="fav-btn"
              onClick={() => addFavorite(station)}>
                <BsStar/> Add Favorite
              </button>
            )}
            </div>
          </ul>
            </div>
          </>
      ))}
    </div>
  );
}

export default function Map({ pos, stations }: { pos: any, stations: StationInfo[] } ): any {
  const [currentStation, setCurrentStation]  = useState<StationInfo>()
  const [currentButton, setCurrentButton] = useState<string>()
  
  const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: process.env.REACT_APP_API_KEY!,
  libraries: ["places"],
  });

  if (loadError) return <div>Error Loading Map</div>;
  if (!isLoaded) return <div>Loading Maps</div>;



  function selectStation(station: StationInfo, buttonName: string) {
    setCurrentStation(station);
    setCurrentButton(buttonName);
  }

  return (
    <div className='webpage'>
     
      
      
      <GoogleMap mapContainerClassName="map-container" zoom={15} center={pos}>
        
      {stations?.map((station, id) =>(
        <Marker position={{lat:station.latitude, lng:station.longitude}} visible={true} key= {id} />))}

      </GoogleMap>
      <div className='results'>
      <Station selectStation={selectStation} stations={stations}></Station>
     {(currentStation && currentButton === 'RestaurantButton') && <DisplayRestaurants station={currentStation}></DisplayRestaurants> }
     {(currentStation && currentButton === 'CafeButton' ) && <DisplayCafes station={currentStation}></DisplayCafes>}
     {(currentStation && currentButton === 'MovieTheaterButton' ) && <DisplayMovieTheaters station={currentStation}></DisplayMovieTheaters>}
     {(currentStation && currentButton === 'SpaButton' ) && <DisplaySpas station={currentStation}></DisplaySpas>}
     {(currentStation && currentButton === 'ArtGalleryButton' ) && <DisplayArtGalleries station={currentStation}></DisplayArtGalleries>}
          </div>
    </div>
  );
}
