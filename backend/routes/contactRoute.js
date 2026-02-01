const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/Message");

// POST contact message
router.post("/contact", async (req, res) => {
  try {
    console.log("📥 Contact request received:", req.body);

    const { name, email, message } = req.body;

    // Check if DB is connected
    if (mongoose && mongoose.connection && mongoose.connection.readyState !== 1) {
      console.error("❌ Database not connected. ReadyState:", mongoose.connection.readyState);
      return res.status(503).json({
        success: false,
        message: "Database connection error. Please try again later.",
      });
    }

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();
    console.log("✅ Message saved successfully");

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("POST CONTACT ERROR 👉", error);

    res.status(500).json({
      success: false,
      message: error.message || "Server error",
    });
  }
});

module.exports = router;
