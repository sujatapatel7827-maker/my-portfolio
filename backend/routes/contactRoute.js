const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/Message");
const sendEmail = require("../utils/sendEmail");


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

    // Send email notification to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL || "s80768012@gmail.com",
        subject: `New Portfolio Message from ${name}`,
        text: `You have received a new contact message on your portfolio.\n\nFrom: ${name} (${email})\n\nMessage:\n"${message}"\n\nTo view and reply to this message, visit the Admin Dashboard: http://localhost:5173/admin`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; text-align: center; color: white;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Message</h2>
            </div>
            <div style="padding: 24px; color: #334155; line-height: 1.6;">
              <p style="font-size: 16px; margin-top: 0; color: #1e293b;">Hello Admin,</p>
              <p>You have received a new message from your portfolio contact form:</p>
              
              <div style="margin: 16px 0; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-size: 14px;"><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>)</p>
                <p style="margin: 8px 0 0 0; font-size: 14px; font-weight: bold; color: #475569;">Message:</p>
                <p style="margin: 4px 0 0 0; font-style: italic; color: #1e293b; white-space: pre-wrap;">"${message}"</p>
              </div>

              <div style="text-align: center; margin: 28px 0 10px 0;">
                <a href="http://localhost:5173/admin" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                  Open Admin Dashboard
                </a>
              </div>
            </div>
          </div>
        `
      });
      console.log("✅ Admin notification email sent successfully");
    } catch (emailErr) {
      console.error("❌ Failed to send admin notification email:", emailErr.message);
    }

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
