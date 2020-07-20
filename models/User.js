const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create PetSchema
const PetSchema = new Schema({
    petId: {
        type: Number,
        required: true
    },
    happiness: {
        type: Number,
        default: 50
    },
    unlocked: {
        type: Boolean,
        required: true
    }
})

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
  petsUnlocked: {
      type: [Boolean],
      default: []
  },
  happiness: {
      type: [Number],
      default: []
  },
  totalHappinessGained: {
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

UserSchema.pre("save",function(next) {
    if (this.petsUnlocked.length == 0) {
        this.petsUnlocked.push(true);
        this.petsUnlocked.push(false);
    }  
    if (this.happiness.length == 0) {
        this.happiness.push(50);
        this.happiness.push(50);
    }
    next();
  });

module.exports = User = mongoose.model("users", UserSchema);
 