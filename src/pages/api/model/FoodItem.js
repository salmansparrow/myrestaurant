import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  itemName: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  imageURL: { type: String, required: true },
});

// Check if the model already exists before defining it
const FoodItem =
  mongoose.models.FoodItem || mongoose.model("FoodItem", FoodItemSchema);

export default FoodItem;
