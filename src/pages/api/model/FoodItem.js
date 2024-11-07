import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; // Importing uuid to generate custom IDs

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

// FoodItem Schema with custom itemId
const foodItemSchema = new mongoose.Schema(
  {
    itemId: { type: String, unique: true, required: true },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    itemName: {
      type: String,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    itemPrice: {
      type: Number,
      required: true,
    },
    itemPrice: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

foodItemSchema.pre("save", function (next) {
  if (!this.itemId) {
    this.itemId = uuidv4();
  }
  next();
});

const foodItem = mongoose.model("FoodItem", foodItemSchema);

export { Category, foodItem };
