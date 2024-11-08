// pages/api/fooditems/index.js

import dbConnect from "../../../../lib/db/db";
import { addMealItem } from "../controllers/FoodItemsController";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    return addMealItem(req, res);
  } else if (req.method === "GET") {
    return getMealItems(req, res); // Optional: if you want a GET route to fetch all meal items
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
