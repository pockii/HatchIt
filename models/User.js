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
    default: new Date()
  },
  coins: {
    type: Number,
    default: 0
  },
  petId: {
      type: Number,
      default: 0
  },
  totalHappinessGained: {
    type: Number, 
    default: 0
  },
  happinessGained: {
    type: Number, 
    default: 0
  },
  tasks: {
    type: Number, 
    default: 0
  },
  subTasks: {
    type: Number, 
    default: 0
  },
  dateGuessed: {
    type: Date,
    default: new Date(0)
  },
  dateRescued: {
    type: Date,
    default: new Date(0)
  }, 
  bestTimeRescued: {
      type: Number,
      default: 10.0
  }
});

module.exports = User = mongoose.model("users", UserSchema);
 