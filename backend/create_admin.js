const mongoose = require('mongoose');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    username: "admin",
    password: hashedPassword
  });

  await admin.save();
  console.log("Admin created successfully");

  await mongoose.disconnect();
}

createAdmin();

