import { Router } from "express";
import axios from "axios";
 
const artGalleryRoutes = Router();
 
const apiKey = process.env.REACT_APP_API_KEY!;
let latitude = 42.972191;
let longitude = -85.610359;

artGalleryRoutes.get('/art-galleries', async (req, res) => {
   const response = await axios.get(
     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=art_gallery&key=${apiKey}`
   );
   res.json(response.data);
 });
 
 
 
export default artGalleryRoutes;