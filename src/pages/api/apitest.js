import mongoose from "mongoose";
import dbConnect from "../../../lib/db/db";

export default async function handler(req, res) {
  try {
    // Initialize the MongoDB connection
    await dbConnect();

    // Ensure the connection is established by checking `readyState`
    if (mongoose.connection.readyState === 1) {
      // Connection is ready, attempt to ping the database
      const connectionStatus = await mongoose.connection.db
        .admin()
        .command({ ping: 1 });

      if (connectionStatus.ok) {
        return res.status(200).json({
          success: true,
          message: "Successfully connected to MongoDB!",
        });
      }
    }

    res.status(500).json({
      success: false,
      message: "Failed to connect to MongoDB",
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({
      success: false,
      message: "Database connection error",
      error: error.message,
    });
  }
}
