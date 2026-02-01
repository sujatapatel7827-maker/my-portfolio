const fs = require('fs');
const util = require('util');
const logFile = fs.createWriteStream(__dirname + '/server_debug.log', { flags: 'w' });
const logStdout = process.stdout;

console.log = function (d) { //
  logFile.write(util.format(d) + '\n');
  logStdout.write(util.format(d) + '\n');
};

console.error = function (d) { //
  logFile.write(util.format(d) + '\n');
  logStdout.write(util.format(d) + '\n');
};

console.log("Starting server...");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Allow all origins to avoid CORS issues
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/contactRoute"));
app.use("/api/admin", require("./routes/adminRoute"));

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    port: 5000
  });
});

const PORT = 5000;

// Start server first
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);

  // Then connect to MongoDB
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error("❌ CRITICAL ERROR: MONGO_URI is not defined in .env file!");
    console.error("The server is running but database features will fail.");
    return;
  }

  console.log("⏳ Connecting to MongoDB...");
  mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 5000,
  })
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => {
      console.error("❌ MongoDB Connection Error:", err.message);
      console.error("👉 Please check your .env file and MongoDB Atlas settings.");
      console.error("👉 Ensure your IP address is whitelisted in MongoDB Atlas.");
      console.error("⚠️ The server is still running, but API calls requiring the database will fail.");
    });
});

// Handle server errors
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`❌ Error: Port ${PORT} is already in use.`);
    console.error(`👉 Try killing the process using port ${PORT} or use a different port.`);
  } else {
    console.error("❌ Server Error:", error.message);
  }
});