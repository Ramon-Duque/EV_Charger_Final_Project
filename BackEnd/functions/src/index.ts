import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { favRoutes } from "./routes/favorites";
// import { reviewRoutes } from "./routes/reviews";
// import restaurantRoutes from "./routes/restaurants";
// import cafeRoutes from "./routes/cafes";
// import spaRoutes from "./routes/spa";
// import movieTheaterRoutes from "./routes/movieTheater";
// import artGalleryRoutes from "./routes/artGallery";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/favorites", favRoutes) 
        // reviewRoutes, 
        // restaurantRoutes, 
        // cafeRoutes, 
        // spaRoutes, 
        // movieTheaterRoutes,
        // artGalleryRoutes);



export const api = functions.https.onRequest(app);