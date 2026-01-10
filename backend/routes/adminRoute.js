const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const Message = require("../models/Message");

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

module.exports = router;
