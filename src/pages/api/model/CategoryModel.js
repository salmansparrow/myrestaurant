import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const categorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(), // Generate a unique ID for each category
    },
    categoryName: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Category =
  mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
