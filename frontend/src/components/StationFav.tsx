import React, { useContext } from 'react';
import { FavoritesContext } from "../context/FavoriteContext";
import { StationInfo } from '../models/Station';
import { CiSquareRemove } from "react-icons/ci";



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
            
              <p className="station-name">{station.station_name} - {station.street_address}</p>
              </div>
              {favoritesClicked(station.id) ? (
              <button className="remove-btn" onClick={() => removeFavorite(station.id)}>
                <CiSquareRemove size={25} /> <p className="remove-text">Remove</p>
              </button>
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
)}