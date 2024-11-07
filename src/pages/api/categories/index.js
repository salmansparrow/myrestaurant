import dbConnect from "../../../../lib/db/db";
import { Category } from "../model/FoodItem";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const { categoryName } = req.body;
      const newCategory = new Category({ categoryName });
      await newCategory.save();

      res.status(201).json({ success: true, category: newCategory });
    } catch (error) {
      console.error("Error adding category:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
