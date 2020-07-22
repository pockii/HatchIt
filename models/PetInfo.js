const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create PetInfoSchema
const PetSchema = new Schema({
    pet: {
        type: String,
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
});

// Create PetSchema
const PetInfoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pets: {
        type: [PetSchema]
    }
});

module.exports = PetInfo = mongoose.model("petInfos", PetSchema);