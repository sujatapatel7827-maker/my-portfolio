console.log("Starting server...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allow all origins to avoid CORS issues on different ports
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/contactRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// Connect to MongoDB first, THEN start server
const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    console.log("✅ MongoDB Connected Successfully");

    app.listen(5001, () => {
      console.log("🚀 Server running on port 5001");
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.error("Check your .env file and MongoDB Atlas Network Access settings.");
    process.exit(1);
  }
};

connectDB();