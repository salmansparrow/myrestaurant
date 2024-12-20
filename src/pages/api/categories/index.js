// pages/api/categories/index.js

import dbConnect from "../../../../lib/db/db";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    return createCategory(req, res);
  } else if (req.method === "GET") {
    return getCategories(req, res);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
