import { Router } from "express";
import axios from "axios";

const restaurantRoutes = Router();
const apiKey = process.env.REACT_APP_API_KEY!;
 
restaurantRoutes.get('/restaurants', async (req, res) => {
 let latitude: string = req.query.latitude as string;
 let longitude: string = req.query.longitude as string;
 console.log("Backend lat lng front frontend!" + latitude + " " + longitude);

 const response = await axios.get(
    // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=` + {latitude} + `,` + {longitude} + `&radius=2000&keyword=restaurant&key=` + apiKey
    // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=restaurant&key=${apiKey}`
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=42.34351,-83.052619&radius=2000&keyword=restaurant&key=${apiKey}`

  );
  console.log("Backend lat lng front AFTER!" + latitude + " " + longitude);
  res.json(response.data);

  // console.log(response.data);

  // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=2000&keyword=restaurant&key=${apiKey}`;
  // console.log(url);

  // const response = await axios.get(url);
  // res.json(response.data);

  // return (response.data);
});


 
export default restaurantRoutes;
