import { Router } from "express";
import axios from "axios";
 
const movieTheaterRoutes = Router();
 
const apiKey = process.env.REACT_APP_API_KEY!;
let latitude = 42.972191;
let longitude = -85.610359;

movieTheaterRoutes.get('/movie-theaters', async (req, res) => {
   const response = await axios.get(
     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=movie_theater&key=${apiKey}`
   );
   res.json(response.data);
 });
 
export default movieTheaterRoutes;