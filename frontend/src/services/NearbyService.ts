import axios from 'axios';
 
const restaurantUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/restaurants';
 
export const getRestaurantsNearby = (latitude: any, longitude: any) => {
   console.log("Get station lat and long " + latitude, longitude);
   return axios.get(restaurantUrl, {
   params: {
       latitude: latitude,
       longitude: longitude
   }}).then(res => res.data.results);
};
 
const cafeUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/cafes';
 
export const getCafesNearby = (latitude: any, longitude: any) => {
   return axios.get(cafeUrl, {
       params: {
           latitude: latitude,
           longitude: longitude
       }}).then(res => res.data.results);
};
 
const movieTheaterUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/movie-theaters';
 
export const getMovieTheatersNearby = (latitude: any, longitude: any) => {
   return axios.get(movieTheaterUrl, {
       params: {
           latitude: latitude,
           longitude: longitude
       }}).then(res => res.data.results);
};
 
const spaUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/spas';
 
export const getSpasNearby = (latitude: any, longitude: any) => {
   return axios.get(spaUrl, {
       params: {
           latitude: latitude,
           longitude: longitude
       }}).then(res => res.data.results);
};
 
const artGalleryUrl = 'http://127.0.0.1:5001/evcharger-a2044/us-central1/api/art-galleries';
 
export const getArtGalleriesNearby = (latitude: any, longitude: any) => {
   return axios.get(artGalleryUrl, {
       params: {
           latitude: latitude,
           longitude: longitude
       }}).then(res => res.data.results);
};
