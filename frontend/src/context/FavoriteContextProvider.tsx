import { ReactNode, useState } from "react";
import { StationInfo } from "../models/Station";
import { FavoritesContext } from "./FavoriteContext";

interface Props {
    children: ReactNode;
}


export default function FavoritesContextProvider ({ children }: Props) {
    const [favorites, setFavorites] = useState<StationInfo[]>([]);

    const addFavorite = (station: StationInfo): void => {
        
        const oldFavorites = [...favorites];

        
        const newFavorites = oldFavorites.concat(station);

        setFavorites(newFavorites);
    };

    const removeFavorite = (id: number): void => {
        const oldFavorites = [...favorites];

        const newFavorites = oldFavorites.filter((station) => station.id !== id);

        setFavorites(newFavorites);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};