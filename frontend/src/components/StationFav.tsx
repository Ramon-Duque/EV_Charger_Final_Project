import React, { useContext } from 'react';
import { FavoritesContext } from "../context/FavoriteContext";
import { StationInfo } from '../models/Station';
import { CiSquareRemove } from "react-icons/ci";
import  '../CSS/StationFav.css'



export const StationFav = () => {

    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const favoritesClicked = (id: number) => {
        const clicked = favorites.some((station: StationInfo) => station.id === id);
        return clicked;
    }


    return (
        <div className="Favorites">
            {favorites.length > 0 ? (favorites.map((station) => (
          <div className="favorite-card" key={station.id}>
            <div className="">
              <p>
              <li
               className="station-name"><label>Name:</label> {station.station_name} <br></br>
               <label>Location: </label> {station.street_address}<br></br>
               <label>Network: </label> {station.ev_network}
               </li>
              </p>
              </div>
              {favoritesClicked(station.id) ? (
              <button className="remove-btn" onClick={() => removeFavorite(station.id)}>X</button>
            ) : (
            <button onClick={() => addFavorite(station)}>
                Add to Favorites
            </button>
            )}
          </div>
        )) 
        ) : (
        <h1></h1>
        )}
        </div>
)

// return (
//     <div className='favoritesCont'>

//     </div>
// )


}