const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST contact message
router.post("/contact", async (req, res) => {
  try {
    console.log("BODY 👉", req.body);   // 👈 ADD THIS

    const { name, email, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });
  } catch (error) {
    console.error("POST CONTACT ERROR 👉", error); // 👈 ADD THIS

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});




module.exports = router;
