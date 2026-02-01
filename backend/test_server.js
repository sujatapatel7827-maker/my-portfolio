console.log("=== SERVER TEST ===");
console.log("1. Loading dotenv...");
require("dotenv").config();

console.log("2. MONGO_URI:", process.env.MONGO_URI ? "EXISTS" : "MISSING");
console.log("3. Testing mongoose...");

const mongoose = require("mongoose");

if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing in .env file!");
    console.log("\n.env file should contain:");
    console.log("MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname");
    process.exit(1);
}

console.log("4. Attempting MongoDB connection...");
mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
        console.log("✅ MongoDB Connected!");
        process.exit(0);
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err.message);
        process.exit(1);
    });
