import { createContext } from "react";
import {StationInfo} from '../models/Station'

interface FavoriteContextModel {
    favorites: StationInfo[];
    addFavorite: (newStation: StationInfo) => void;
    removeFavorite: (removeStation: number) => void;
}

const defaultValue: FavoriteContextModel =  {
    favorites:[],
    addFavorite: () => {},
    removeFavorite: () => {}
};

export const FavoritesContext = createContext(defaultValue)