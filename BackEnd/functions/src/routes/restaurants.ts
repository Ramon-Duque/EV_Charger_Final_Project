import { Router } from "express";
import axios from "axios";
 
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
  //  return response.data;
 });
 
 
 
export default restaurantRoutes;
