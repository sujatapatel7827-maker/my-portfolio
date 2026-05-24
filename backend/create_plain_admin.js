const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const Admin = require("./models/Admin");

async function createPlainAdmin() {
  const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/portfolioDB";
  console.log("Connecting to MongoDB:", mongoUri);

  try {
    await mongoose.connect(mongoUri);
    console.log("Connected successfully!");

    // Delete existing admin with username 'admin' to avoid duplicates
    await Admin.deleteOne({ username: "admin" });

    const admin = new Admin({
      username: "admin",
      password: "admin" // Plain text password to match the login route's implementation
    });

    await admin.save();
    console.log("🎉 Admin user 'admin' with password 'admin' created successfully!");
  } catch (err) {
    console.error("Error creating admin:", err);
  } finally {
    await mongoose.disconnect();
  }
}

createPlainAdmin();
