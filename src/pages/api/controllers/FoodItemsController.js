import { foodItem, Category } from "../model/FoodItem"; // Importing the foodItem and Category models
import multer from "multer"; // For handling file uploads
import admin from "firebase-admin"; // Firebase Admin SDK to interact with Firebase Storage
import path from "path";
import dbConnect from "../../../../lib/db/db";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  });
}

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// POST endpoint for adding a new food item
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Connect to the database
      await dbConnect();

      // Get the categoryId and other fields from the body
      const { categoryId, itemName, itemDescription, itemPrice } = req.body;
      const category = await Category.findById(categoryId);

      if (!category) {
        return res.status(400).json({
          success: false,
          message: "Category not found.",
        });
      }

      // Upload image to Firebase Storage (handle the image upload part)
      const file = req.files[0]; // Assuming we get the image file in the `files` field from the request

      const imageRef = admin
        .storage()
        .bucket()
        .file(`food_images/${Date.now()}_${file.originalname}`);

      const fileUpload = imageRef.createWriteStream({
        metadata: {
          contentType: file.mimetype,
        },
      });

      fileUpload.on("error", (error) => {
        console.error("Error uploading file:", error);
        return res.status(500).json({
          success: false,
          message: "Error uploading image to Firebase.",
        });
      });

      fileUpload.on("finish", async () => {
        const downloadURL = `https://storage.googleapis.com/${
          process.env.FIREBASE_STORAGE_BUCKET
        }/food_images/${Date.now()}_${file.originalname}`;

        // Now create a new food item and save it to MongoDB
        const newFoodItem = new foodItem({
          categoryId,
          itemName,
          itemDescription,
          itemPrice,
          imageUrl: downloadURL, // Store the image URL
        });

        await newFoodItem.save();

        return res.status(201).json({
          success: true,
          message: "Food item created successfully!",
          item: newFoodItem,
        });
      });

      // Pipe the file to the Firebase storage
      fileUpload.end(file.buffer);
    } catch (error) {
      console.error("Error creating food item:", error);
      return res.status(500).json({
        success: false,
        message: "Server error. Could not create food item.",
        error: error.message,
      });
    }
  } else {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }
}
