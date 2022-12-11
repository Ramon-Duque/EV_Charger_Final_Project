import { Router } from "express";
import axios from "axios";
 
const cafeRoutes = Router();
 
const apiKey = process.env.REACT_APP_API_KEY!;
// let latitude = 42.972191;
// let longitude = -85.610359;

cafeRoutes.get('/cafes', async (req, res) => {
  try{
  let latitude: string = req.query.latitude as string;
  let longitude: string = req.query.longitude as string;
  console.log("Backend lat lng front frontend!" + latitude + " " + longitude);

   const response = await axios.get(
     `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=cafe&key=${apiKey}`
   );
   res.json(response.data);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

 
export default cafeRoutes;