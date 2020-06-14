const express = require("express");
const router = express.Router();

// Load input validation
const validation = require("../../validation/todos");
const validateToDos = validation.validateTodos;
const validateTask = validation.validateTask;
const validateSubTask = validation.validateSubTask;

// Load Todo model
const TodoModel = require("../../models/Todo");
const Todo = TodoModel.Todo;
const Task = TodoModel.Task;
const SubTask = TodoModel.Task;

// @route POST api/todos/
// @desc Add todo
// @access Public 
router.post("/", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Todo to add can not be empty!" });
    }

    // Todo validation 
    const { errors, isValid } = validateToDos(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name })
        .then(result => {
            if (!result) { 
                const newTodo = new Todo({
                    name: req.body.name,
                    tasks: req.body.tasks
                });
                newTodo.save()
                    .then(todo => res.json(todo))
                    .catch(err => console.log(err));
            } else {
                return res.status(400).json({ message: `Todo of user with username ${req.body.name} already exists` });
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error adding Todo of user with username: " + req.body.name
            });
        });
});

// @route POST api/todos/
// @desc Update todo
// @access Public 
router.put("/", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Todo to update can not be empty!" });
    }

    // Todo validation 
    const { errors, isValid } = validateToDos(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOneAndUpdate( { name: req.body.name }, req.body, {returnOriginal: false, useFindAndModify: false})
        .then(result => {
            if (!result) { 
                return res.status(404).send({
                    message: `Cannot update Todo of user with username ${req.body.name}. Maybe Todo was not found!`
                });
            } else {
                res.json(result);
            }
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error updating Todo of user with username: " + req.body.name
            });
        });
});

module.exports = router;