
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import geoLocation, { Coordinates } from "../App";
import { FavoritesContext } from "../context/FavoriteContext";
import { StationInfo } from "../models/Station";
import { getStations } from "../services/Stations";
// import Marker from "./Marker";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import '../CSS/Stations.css';
// import RestaurantToggleButton from "./ToggleButton";

interface Place{
  geometry:{location: google.maps.LatLng};
  name: string;
}

const libraries: ('places' | 'geometry' | 'localContext' | 'visualization' | 'drawing')[] = [];

export interface IStationProps {
 selectStation:(station: StationInfo,buttonName: string)=> void, pos?: Coordinates, stations: StationInfo[]
}

export function Station({selectStation, pos, stations}: IStationProps) { 
// export function Station({selectStation, pos}: IStationProps) {

  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const favoritesClicked = (id: number) => {
      const clicked = favorites.some((station: StationInfo) => station.id === id);
      return clicked;
  }

  const [toggle, setToggle] = useState(false);

  return (
    <div className='station-container'>
      {stations?.map((station) => (
        <>
          <ul>
            <h4 id='station-header'>{station.station_name}</h4>
          </ul>
          <ul>Address: {station.street_address}</ul>
          <ul>Electric Vehicle Network: {station.ev_network}</ul>        
          <ul className="station-buttons">
            {/* <RestaurantToggleButton/> */}
            <button className="restaurant-btn" onClick={() => selectStation(station, "RestaurantButton")}> Restaurants </button>
            <button className="cafe-btn" onClick={() => selectStation(station, "CafeButton")}> Cafes </button>
            <button className="movie-theater-btn" onClick={() => selectStation(station, "MovieTheaterButton")}> Movie Theaters </button>
            <button className="spa-btn" onClick={() => selectStation(station, "SpaButton")}> Spas </button>
            {/* <button className="art-gallery-btn" onClick={() => selectStation(station, "ArtGalleryButton")}> Art Galleries </button> */}
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
          </>
      ))}
    </div>
  );
}

export default function Map({ pos, stations }: { pos: any, stations: StationInfo[] } ): any {

  const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: process.env.REACT_APP_API_KEY!,
  libraries: ["places"],
  });

  if (loadError) return <div>Error Loading Map</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div><main>
      <GoogleMap mapContainerClassName="map-container" zoom={15} center={pos}>
      {stations?.map((station, id) =>(
        <Marker position={{lat:station.latitude, lng:station.longitude}} visible={true} key= {id} />))}
        <Marker position={pos} />
        {/* {pos &&<Station pos={pos}/>}       */}
        {/* <Station></Station> */}
      </GoogleMap>


      </main>
    </div>
  );
}
