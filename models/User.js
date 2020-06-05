const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create UserSchema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  coins: {
    type: Number,
    default: 0
  },
  happiness: {
    type: Number,
    default: 50
  }
});

module.exports = User = mongoose.model("users", UserSchema);