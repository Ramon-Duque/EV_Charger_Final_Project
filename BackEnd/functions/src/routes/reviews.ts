import { getClient } from "../db";
import { Router } from "express";
import { ObjectId } from "mongodb";
import Review from "../models/reviews";
export const reviewRoutes = Router();

reviewRoutes.get("/reviews", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<Review>("reviews")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

reviewRoutes.post("/reviews", async (req, res) => {
  const review = req.body as Review;
  try {
    const client = await getClient();
    await client.db().collection<Review>("reviews").insertOne(review);
    res.status(201).json(review);
  } catch (err) {
    console.error("ERROR", err);
    res.status(500);
  }
});

reviewRoutes.delete("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Review>("reviews")
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

reviewRoutes.put("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body as Review;
  delete data._id;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Review>("reviews")
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
