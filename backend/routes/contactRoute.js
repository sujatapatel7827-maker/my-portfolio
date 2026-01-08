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


// GET all messages (ADMIN PANEL)
router.get("/contact", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error("CONTACT GET ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
