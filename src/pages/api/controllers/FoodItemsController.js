import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Ensure this is the client SDK
import Category from "../model/CategoryModel";
import FoodItem from "../model/FoodItem";
import { multerMiddleware, runMiddleware } from "../multer";
// import { initializeApp } from "firebase-admin";
import { getfirestorage } from "../../../../lib/db/firebase";

// Initialize Firebase storage instance
const storage = getStorage();

export const addMealItem = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  console.log("Request body before multer:", req.body);
  console.log("Request file before multer:", req.file);

  try {
    // console.log("Request Body:", req.body);
    console.log("Uploaded File:", req.file);
    // Run multer middleware to parse file
    await runMiddleware(req, res, multerMiddleware);
    const { categoryId, itemName, itemDescription, itemPrice } = req.body;

    const itemImage = req.file; // Image from multer

    // Fetch category
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Category Not Found" });
    }

    // Define Firebase Storage path: fooditem/(categoryName)
    const storageRef = ref(
      getfirestorage,
      `fooditem/${category.categoryName}/${itemImage.originalname}`
    );

    // Upload the image to Firebase Storage
    await uploadBytes(storageRef, itemImage.buffer);
    const imageURL = await getDownloadURL(storageRef);

    // Create and save the meal item in MongoDB
    const foodItem = new FoodItem({
      categoryId,
      itemName,
      itemDescription,
      itemPrice,
      imageURL,
    });

    await foodItem.save();

    return res.status(201).json({
      message: "Meal Item Added Successfully",
      foodItem,
    });
  } catch (error) {
    console.error("Error adding meal item:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
