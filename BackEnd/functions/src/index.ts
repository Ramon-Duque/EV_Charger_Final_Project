import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';
import { favRoutes } from "./routes/favorites";
import { reviewRoutes } from "./routes/reviews";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", favRoutes, reviewRoutes)



export const api = functions.https.onRequest(app)