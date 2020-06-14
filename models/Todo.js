const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create SubTaskSchema
const SubTaskSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    level: {
        type: Number,
        default: 2,
    }
})

// Create TaskSchema
const TaskSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    level: {
        type: Number,
        default: 2,
    }, 
    subTasks: {
        type: [SubTaskSchema],
        default: undefined
    } 
})

// Create TodoSchema 
const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tasks: {
        type: [TaskSchema],
        default: undefined
    }
})

module.exports = {
    Todo: mongoose.model("todos", TodoSchema),
    Task: mongoose.model("tasks", TaskSchema),
    SubTask: mongoose.model("subTasks", SubTaskSchema)
};