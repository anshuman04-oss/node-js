const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
  },
  ip_address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const User = mongoose.model("user", userSchema);

module.exports = { User };