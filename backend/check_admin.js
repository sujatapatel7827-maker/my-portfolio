const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();
const Admin = require('./models/Admin');

const LOG_FILE = 'admin_creds_output.txt';

function log(message) {
    console.log(message);
    fs.appendFileSync(LOG_FILE, message + '\n');
}

async function checkAdmins() {
    try {
        // Clear previous log
        fs.writeFileSync(LOG_FILE, '');

        const mongoUri = process.env.MONGO_URI || "mongodb+srv://admin:admin123@cluster0.gvhwx83.mongodb.net/portfolio?retryWrites=true&w=majority";

        log("Connecting to MongoDB...");

        await mongoose.connect(mongoUri);
        log("Connected to MongoDB.");

        const admins = await Admin.find({});

        if (admins.length === 0) {
            log("No admin users found.");
        } else {
            log("Found admin users:");
            admins.forEach(admin => {
                log(`Username: ${admin.username}, Password: ${admin.password}`);
            });
        }

        await mongoose.disconnect();
        log("Done.");
    } catch (error) {
        log("Error: " + error.message);
    }
}

checkAdmins();

