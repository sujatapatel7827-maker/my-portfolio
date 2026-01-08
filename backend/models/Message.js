const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
