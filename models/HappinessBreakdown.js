const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create EventSchema
const EventSchema = new Schema({
    event: {
        type: String,
        required: true
    },
    totalHappinessGained: {
        type: Number,
        default: 0
    }
});

// Create HappinessBreakdownSchema
const HappinessBreakdownSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    events: {
        type: [EventSchema]
    }
});

module.exports = HappinessBreakdown = mongoose.model("happinessBreakdowns", HappinessBreakdownSchema);