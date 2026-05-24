const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const Message = require("../models/Message");
const sendEmail = require("../utils/sendEmail");


// Setup admin (first time only - run this once to create admin)
router.post("/setup", async (req, res) => {
    try {
        console.log("📥 Admin setup request received");
        console.log("Request body:", req.body);

        const { username, password } = req.body;

        if (!username || !password) {
            console.log("❌ Missing username or password");
            return res.status(400).json({
                success: false,
                message: "Username and password are required",
            });
        }

        // Check if admin already exists
        console.log("🔍 Checking if admin exists...");
        const existingAdmin = await Admin.findOne({ username });

        if (existingAdmin) {
            console.log("⚠️ Admin already exists");
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
            });
        }

        console.log("✅ Creating new admin...");
        const newAdmin = new Admin({
            username,
            password, // Note: Simple storage for now
        });

        await newAdmin.save();
        console.log("✅ Admin created successfully!");

        res.status(201).json({
            success: true,
            message: "Admin created successfully",
        });
    } catch (error) {
        console.error("❌ ADMIN SETUP ERROR:");
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        res.status(500).json({
            success: false,
            message: "Server error: " + error.message,
        });
    }
});

// Login route
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        const admin = await Admin.findOne({ username, password });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            admin: {
                username: admin.username,
            },
        });
    } catch (error) {
        console.error("LOGIN ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

// Get all messages
router.get("/messages", async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            messages,
        });
    } catch (error) {
        console.error("GET MESSAGES ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
});

// Reply to a message
router.post("/messages/:id/reply", async (req, res) => {
    try {
        const { id } = req.params;
        const { status, replyMessage } = req.body;

        if (!status || !replyMessage) {
            return res.status(400).json({
                success: false,
                message: "Status and replyMessage are required",
            });
        }

        const message = await Message.findById(id);
        if (!message) {
            return res.status(404).json({
                success: false,
                message: "Message not found",
            });
        }

        // Send the email
        let emailInfo = {};
        try {
            const interestText = status === "Interested" ? "Interested" : "Not Interested";
            
            emailInfo = await sendEmail({
                to: message.email,
                subject: `Response regarding your message on my Portfolio: ${interestText}`,
                text: `Hello ${message.name},\n\nThank you for reaching out to me. Regarding your message:\n"${message.message}"\n\nI have reviewed your message and I am ${interestText.toLowerCase()} in this opportunity.\n\nMessage:\n${replyMessage}\n\nBest regards,\nPortfolio Admin`,
                html: `
                    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 24px; text-align: center; color: white;">
                            <h2 style="margin: 0; font-size: 24px; font-weight: 700;">Portfolio Response</h2>
                        </div>
                        <div style="padding: 24px; color: #334155; line-height: 1.6;">
                            <p style="font-size: 16px; margin-top: 0;">Hello <strong>${message.name}</strong>,</p>
                            <p>Thank you for reaching out. In response to your message:</p>
                            <div style="background-color: #f8fafc; border-left: 4px solid #cbd5e1; padding: 12px 16px; margin: 16px 0; font-style: italic; color: #475569;">
                                "${message.message}"
                            </div>
                            <p>I have reviewed your message and I am <strong>${interestText}</strong>.</p>
                            
                            <div style="margin: 24px 0; padding: 16px; background-color: #f1f5f9; border-radius: 8px;">
                                <h4 style="margin: 0 0 8px 0; color: #1e293b; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">My Message:</h4>
                                <p style="margin: 0; color: #334155;">${replyMessage.replace(/\n/g, "<br/>")}</p>
                            </div>
                            
                            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
                            <p style="font-size: 14px; color: #64748b; margin-bottom: 0;">Best regards,<br/>Portfolio Admin</p>
                        </div>
                    </div>
                `,
            });
        } catch (mailError) {
            console.error("❌ MAIL SENDING ERROR:", mailError);
            // We still update the database and save, but return email failure
            emailInfo = { error: mailError.message };
        }

        // Update message status and reply details
        message.status = status;
        message.replyMessage = replyMessage;
        message.repliedAt = new Date();
        if (emailInfo.previewUrl) {
            message.emailPreviewUrl = emailInfo.previewUrl;
        }
        await message.save();

        res.status(200).json({
            success: true,
            message: "Reply recorded and email sent successfully",
            messageData: message,
            emailPreviewUrl: emailInfo.previewUrl || null,
        });
    } catch (error) {
        console.error("REPLY MESSAGE ROUTE ERROR:", error);
        res.status(500).json({
            success: false,
            message: "Server error: " + error.message,
        });
    }
});

module.exports = router;
