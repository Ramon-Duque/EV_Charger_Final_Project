import {useEffect, useState} from 'react';
import { Activities } from '../models/Activities';
import { getRestaurantsNearby, getCafesNearby, 
    getMovieTheatersNearby, getSpasNearby,
    getArtGalleriesNearby } from '../services/NearbyService';

export function DisplayRestaurants(){
    const [restaurants, setRestaurants] = useState<Activities[]>([]);
  
    // useEffect(() => {
    // getRestaurantsNearby().then((response) => {
    //     const { data } = response;
    //     setRestaurants(data.results); 
    // });
    // }, []);

    return (
        <div>
            <h2>Restaurants near your station!</h2>
            {restaurants.map((restaurant, i) => (
                <><h4>{restaurant.name}</h4>
                <ul>Ratings: {restaurant.rating}</ul>
                <ul>Address: {restaurant.vicinity}</ul>
                </>
            ))}
        </div>
    );
}

export function DisplayCafes(){
    const [cafes, setCafes] = useState<Activities[]>([]);
  
    useEffect(() => {
    getCafesNearby().then((response) => {
        const { data } = response;
        setCafes(data.results); 
    });
    }, []);

    return (
        <div>
            <h2>Cafe's near your station!</h2>
            {cafes.map((cafe, i) => (
                <><h4>{cafe.name}</h4>
                <ul>Ratings: {cafe.rating}</ul>
                <ul>Address: {cafe.vicinity}</ul></>            
            ))}
        </div>
    );

}

export function DisplayMovieTheaters(){
    const [movieTheater, setMovieTheater] = useState<Activities[]>([]);
  
    useEffect(() => {
        getMovieTheatersNearby().then((response) => {
        const { data } = response;
        setMovieTheater(data.results); 
    });
    }, []);

    return (
        <div>
            <h2>Movie Theaters near your station!</h2>
            {movieTheater.map((movies, i) => (
                <><h4>{movies.name}</h4>
                <ul>Ratings: {movies.rating}</ul>
                <ul>Address: {movies.vicinity}</ul></>            
            ))}
        </div>
    );
}

export function DisplaySpas(){
    const [spas, setSpas] = useState<Activities[]>([]);
  
    useEffect(() => {
        getSpasNearby().then((response) => {
        const { data } = response;
        setSpas(data.results); 
    });
    }, []);

    return (
        <div>
            <h2>Spa's near your station</h2>
            {spas.map((spa, i) => (
                <><h4>{spa.name}</h4>
                <ul>Ratings: {spa.rating}</ul>
                <ul>Address: {spa.vicinity}</ul></>             
                ))}
        </div>
    );
}

export function DisplayArtGalleries(){
    const [artGalleries, setArtGalleries] = useState<Activities[]>([]);
  
    useEffect(() => {
        getArtGalleriesNearby().then((response) => {
        const { data } = response;
        setArtGalleries(data.results); 
    });
    }, []);

    return (
        <div>
            <h2>Art Galleries near your station!</h2>
            {artGalleries.map((gallery, i) => (
                <><h4>{gallery.name}</h4>
                <ul>{gallery.rating}</ul>
                <ul>Address: {gallery.vicinity}</ul></>
            ))}
        </div>
    );
}