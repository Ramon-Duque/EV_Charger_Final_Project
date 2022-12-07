import { Router } from "express";
import axios from "axios";
// import * as functions from 'firebase-functions';
 
const restaurantRoutes = Router();
 
const apiKey = process.env.REACT_APP_API_KEY!;
let latitude = 42.972191;
let longitude = -85.610359;
 
restaurantRoutes.get('/restaurants', async (req, res) => {
   const response = await axios.get(
     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=restaurant&key=${apiKey}`
   );
   console.log("I'm in /resturants in the backend!");
   res.json(response.data);
   return response.data;
 });
 
 
 
export default restaurantRoutes;










// interface NearbyPlace{
//     lat: number;
//     lng: number;
//     // results: []
// }

// export default function getRestaurants(latitude : number, longitude : number) {
//     return axios.get<NearbyPlace>('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.latitude},${this.longitude}&radius=2000&keyword=restaurant&key=REACT_APP_API_KEY', {
//     }).then((response) => {
//         return response.data //.results
//     })
// };





// export const getRestaurants = () => {
//     return axios.get<NearbyPlace>('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.latitude},${this.longitude}&radius=2000&keyword=restaurant&key=REACT_APP_API_KEY', {
//     }).then((response) => {
//         return response.data //.results
//     })
// };

// let myResponseFromWeb = getRestaurants(1500,2000);
// console.log("heres the response: " + myResponseFromWeb);

// export const restaurantsNearby = Router();

// let axios = require('axios');

// let config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.latitude},${this.longitude}&radius=2000&keyword=restaurant&key=REACT_APP_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response: { data: any; }) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error: any) {
//   console.log(error);
// });