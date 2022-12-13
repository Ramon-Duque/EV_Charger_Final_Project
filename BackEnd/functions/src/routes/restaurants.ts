import { Router } from "express";
import axios from "axios";
 
const restaurantRoutes = Router();
const apiKey = process.env.REACT_APP_API_KEY!;
restaurantRoutes.get('/restaurants', async (req, res) => {
 let latitude: string = req.query.latitude as string;
 let longitude: string = req.query.longitude as string;
 
 const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=804.672&keyword=restaurant&key=${apiKey}`;
 
 const response = await axios.get(url);
 res.json(response.data);
});
export default restaurantRoutes;
