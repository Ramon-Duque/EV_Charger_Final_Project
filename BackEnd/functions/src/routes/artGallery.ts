import { Router } from "express";
import axios from "axios";
const artGalleryRoutes = Router();
const apiKey = process.env.REACT_APP_API_KEY!;
 
artGalleryRoutes.get('/art-galleries', async (req, res) => {
 let latitude: string = req.query.latitude as string;
 let longitude: string = req.query.longitude as string;
 
 const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=804.672&keyword=art_gallery&key=${apiKey}`
  
 const response = await axios.get(url);
 res.json(response.data);
});
export default artGalleryRoutes;