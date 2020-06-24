const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create SubTaskSchema
const SubTaskSchema = new Schema({
    id: { // for redux and normalizr, index
        type: String, 
        required: true
    },
    taskId: { // for redux and normalizr, taskindex
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        default: new Date(new Date().getTime()+(3*24*60*60*1000)), // 3 days + Date.now
        required: true,
    },
    level: {
        type: String,
        default: "2",
        required: true,
    }
})

// Create TaskSchema
const TaskSchema = new Schema({
    id: { // for redux and normalizr, index
        type: String, 
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        default: new Date(new Date().getTime()+(3*24*60*60*1000)), // 3 days + Date.now
        required: true
    },
    level: {
        type: String,
        default: "2",
        required: true,
    }, 
    subTasks: {
        type: [SubTaskSchema]
    } 
})

// Create TodoSchema 
const TodoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tasks: {
        type: [TaskSchema]
    }
})

module.exports = Todo = mongoose.model("todos", TodoSchema);