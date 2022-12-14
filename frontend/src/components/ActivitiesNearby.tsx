import {useEffect, useState} from 'react';
import { Activities } from '../models/Activities';
import { StationInfo } from '../models/Station';
import { getRestaurantsNearby, getCafesNearby,
   getMovieTheatersNearby, getSpasNearby,
   getArtGalleriesNearby } from '../services/NearbyService';
import '../CSS/ActivityList.css'; 
import { BsFillStarFill } from 'react-icons/bs';
import {MdLocalMovies} from 'react-icons/md';
import { IoMdRestaurant } from 'react-icons/io';
import {TbMassage} from 'react-icons/tb';
import {AiOutlinePicture} from 'react-icons/ai';
import{IoIosCafe} from 'react-icons/io';

export function DisplayRestaurants({station}: {station:StationInfo}){
   const [restaurants, setRestaurants] = useState<Activities[]>([]);
   useEffect(() => {
       getRestaurantsNearby(station.latitude, station.longitude).then((response) => {
           setRestaurants(response);
       });
   }, []);
       console.log(restaurants);
   return (
       <div className='restaurant-list'>
           <h2 id='list-header'><IoMdRestaurant/>Restaurants near your station!</h2>
           {restaurants.slice(0,5).map((restaurant, i) => (
               <><h4 id='location-name'>{restaurant.name}</h4>
               <ul id='rating'>{restaurant.rating} <BsFillStarFill/>'s</ul>
               <ul id='address'>{restaurant.vicinity} MI</ul>
               </>
           ))}
       </div>
   );
}
 
export function DisplayCafes({station}: {station:StationInfo}){
   const [cafes, setCafes] = useState<Activities[]>([]);
   useEffect(() => {
       getCafesNearby(station.latitude, station.longitude).then((response) => {
           setCafes(response);
       });
   }, []);
 
   return (
       <div className='cafe-list'>
           <h2 id='list-header'><IoIosCafe/>Cafe's near your station!</h2>
           {cafes.slice(0,5).map((cafe, i) => (
               <><h4 id='location-name'>{cafe.name}</h4>
               <ul id='rating'>{cafe.rating} <BsFillStarFill/>'s</ul>
               <ul id='address'>Address: {cafe.vicinity} MI</ul></>           
           ))}
       </div>
   );
}
 
export function DisplayMovieTheaters({station}: {station:StationInfo}){
   const [movieTheater, setMovieTheater] = useState<Activities[]>([]);
    useEffect(() => {
       getMovieTheatersNearby(station.latitude, station.longitude).then((response) => {
           setMovieTheater(response);
   });
   }, []);
 
   return (
       <div className='movie-list'>
           <h2 id='list-header'><MdLocalMovies/>Movie Theaters near your station!</h2>
           {movieTheater.slice(0,5).map((movies, i) => (
               <><h4 id='location-name'>{movies.name}</h4>
               <ul id='rating'>{movies.rating} <BsFillStarFill/>'s</ul>
               <ul id='address'>Address: {movies.vicinity} MI</ul></>           
           ))}
       </div>
   );
}
 
export function DisplaySpas({station}: {station:StationInfo}){
   const [spas, setSpas] = useState<Activities[]>([]);
    useEffect(() => {
       getSpasNearby(station.latitude, station.longitude).then((response) => {
           setSpas(response);
   });
   }, []);
 
   return (
       <div className='spa-list'>
           <h2 id='list-header'><TbMassage/>Spa's near your station</h2>
           {spas.slice(0,5).map((spa, i) => (
               <><h4 id='location-name'>{spa.name}</h4>
               <ul id='rating'>{spa.rating} <BsFillStarFill/>'s</ul>
               <ul id='address'>Address: {spa.vicinity} MI</ul></>            
               ))}
       </div>
   );
}
 
export function DisplayArtGalleries({station}: {station:StationInfo}){
   const [artGalleries, setArtGalleries] = useState<Activities[]>([]);
    useEffect(() => {
       getArtGalleriesNearby(station.latitude, station.longitude).then((response) => {
           setArtGalleries(response);
   });
   }, []);
 
   return (
       <div className='art-gallery-list'>
           <h2 id='list-header'><AiOutlinePicture/>Art Galleries near your station!</h2>
           {artGalleries.slice(0,5).map((gallery, i) => (
               <><h4 id='location-name'>{gallery.name}</h4>
               <ul id='rating'>{gallery.rating} <BsFillStarFill/>'s</ul>
               <ul id='address'>Address: {gallery.vicinity} MI</ul></>
           ))}
       </div>
   );
}
