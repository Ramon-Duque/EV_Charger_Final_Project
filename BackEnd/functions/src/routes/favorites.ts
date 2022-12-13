import { getClient } from "../db";
import Favorite from "../models/favorites";
import { Router } from "express";
import { ObjectId } from "mongodb";
export const favRoutes = Router();

favRoutes.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<Favorite>("favorites")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

favRoutes.post("/", async (req, res) => {
  const favorite = req.body as Favorite;
  try {
    const client = await getClient();
    await client.db().collection<Favorite>("favorites").insertOne(favorite);
    res.status(201).json(favorite);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500);
  }
});

favRoutes.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Favorite>("favorites")
      .deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Not Found" });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    console.error("ERROR", err);
    res.status(500);
  }
});

favRoutes.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body as Favorite;
  delete data._id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Favorite>("favorites")
      .replaceOne({ _id: new ObjectId(id) }, data);
    if (result.modifiedCount === 0) {
      res.status(404).json({ message: "Not Found" });
    } else {
      data._id = new ObjectId(id);
      res.json(data);
    }
  } catch (err) {
    console.error("ERROR", err);
    res.status(500);
  }
});
