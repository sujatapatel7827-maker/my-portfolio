// 🔴 MUST BE FIRST LINES
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, ".env"),
});

// ================== IMPORTS ==================
const fs = require("fs");
const util = require("util");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ================== LOG SETUP (OPTIONAL) ==================
const logFile = fs.createWriteStream(path.join(__dirname, "server.log"), {
  flags: "a",
});
const logStdout = process.stdout;

console.log = function (...args) {
  const message = util.format(...args);
  logFile.write(message + "\n");
  logStdout.write(message + "\n");
};

console.error = console.log;

// ================== DEBUG ENV (REMOVE LATER IF YOU WANT) ==================
console.log("CWD:", process.cwd());
console.log("ENV FILE:", path.resolve(__dirname, ".env"));
console.log("MONGO_URI:", process.env.MONGO_URI);

// ================== APP SETUP ==================
console.log("Starting server...");

const app = express();
app.use(cors());
app.use(express.json());

// ================== ROUTES ==================
app.use("/api", require("./routes/contactRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// ================== HEALTH CHECK ==================
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    port: process.env.PORT || 5000,
  });
});

// ================== SERVER START ==================
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);

  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("❌ CRITICAL ERROR: MONGO_URI is missing in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB Connected Successfully");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err.message);
    process.exit(1);
  }
});

// ================== SERVER ERROR HANDLING ==================
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use`);
  } else {
    console.error("❌ Server Error:", error.message);
  }
});
