const express = require("express");
const router = express.Router();

// Load input validation
const validation = require("../../validation/todos");
const validateToDo = validation.validateTodo;
const validateTaskPOST = validation.validateTaskPOST;
const validateTaskPUT = validation.validateTaskPUT;
const validateTaskDELETE = validation.validateTaskDELETE;
const validateSubTaskPOST = validation.validateSubTaskPOST;
const validateSubTaskPUT = validation.validateSubTaskPUT;
const validateSubTaskDELETE = validation.validateSubTaskDELETE;

// Load Todo model
const Todo = require("../../models/Todo");

// manipulating todos

// @route POST api/todos/
// @desc Add todo
// @access Public 
// req.body is a todo, level and deadline in tasks and subtasks are optional
router.post("/", (req, res) => {

    if (!req.body) {
        return res.status(400).json({ message: "Todo to add cannot be empty!" });
    }

    // Todo validation 
    const { errors, isValid } = validateToDo(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
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
                return res.json(result);
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error adding Todo of user with username: " + req.body.name
            });
        });
});

// @route PUT api/todos/
// @desc Update todo
// @access Public 
// replaces the entire tasks object 
// req.body is a todo, level and deadline in tasks and subtasks are optional
router.put("/", (req, res) => {

    if (!req.body) {
        return res.status(400).json({ message: "Todo to update cannot be empty!" });
    }

    // Todo validation 
    const { errors, isValid } = validateToDo(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOneAndUpdate( { name: req.body.name }, req.body, {returnOriginal: false, useFindAndModify: false} )
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

// manipulating tasks

// @route POST api/todos/task
// @desc Add a task at the end of tasks array 
// @access Public 
/*
req.body = {
    name: "name",
    task: {
        level: "2", // optional 
        description: "des",
        deadline: "date", // optional 
    }
}
*/
router.post("/task", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Task to add cannot be empty!" });
    }

    // Task validation 
    const { errors, isValid } = validateTaskPOST(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot add task of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const len = result.tasks.length;
                result.tasks.push(req.body.task);
                result.tasks[len].id = len + "";
                result.save()
                    .then(todo => res.json(todo.tasks[len]))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error adding task of user with username: " + req.body.name
            });
        });
});

// @route PUT api/todos/task
// @desc Update task
// @access Public  
// replaces the entire task object 
/*
req.body = {
    name: "name",
    task: {
        level: "2", // optional
        _id: "idoftask",
        description: "des",
        deadline: "date", // optional
    }
}
*/
router.put("/task", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Task to update cannot be empty!" });
    }

    // Task validation 
    const { errors, isValid } = validateTaskPUT(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot update task of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const index = result.tasks.findIndex(task => task._id == req.body.task._id);
                if (index == -1) {
                    return res.status(404).json({ message: `Cannot update task of user with username ${req.body.name}. Task was not found.` });
                } else {
                    result.tasks[index] = req.body.task;
                    result.save()
                        .then(todo => res.json(todo.tasks[index]))
                        .catch(err => console.log(err));
                }        
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error updating task of user with username: " + req.body.name
            });
        });
});

// @route DELETE api/todos/task
// @desc Delete task
// @access Public  
/*
req.body = {
    name: "name",
    task_id: "idoftask"
}
*/
router.delete("/task", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "Task to delete cannot be empty!" });
    }

    // name and id validation 
    const { errors, isValid } = validateTaskDELETE(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot delete task of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const len = result.tasks.length;
                result.tasks = result.tasks.filter(element => element._id != req.body.task_id);

                if (result.tasks.length >= len) {
                    return res.status(404).json({ message: `Cannot delete task of user with username ${req.body.name}. Task was not found.` });
                } else {
                    for (let i = 0; i < len - 1; i++) {
                        result.tasks[i].id = i + "";
                    }
                    result.save()
                        .then(todo => res.json(todo))
                        .catch(err => console.log(err));
                }                
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error deleting task of user with username: " + req.body.name
            });
        });
});

// manipulating subTasks

// @route POST api/todos/subtask
// @desc Add a subTask at the end of subTasks array of the first task if task_id is unspecified, else the task with task_id
// @access Public 
/*
req.body = {
    name: "name",
    task_id: "idoftask", // optional
    subTask: {
        level: "2", // optional 
        description: "des",
        deadline: "date", // optional
    }
}
*/
router.post("/subtask", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "SubTask to add cannot be empty!" });
    }

    // SubTask validation 
    const { errors, isValid } = validateSubTaskPOST(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot add subTask of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const taskId = req.body.task_id === undefined ? result.tasks[0]._id : req.body.task_id;
                
                const index = result.tasks.findIndex(task => task._id == taskId);

                if (index == -1) {
                    return res.status(404).json({ message: `Cannot add subTask of user with username ${req.body.name}. Task was not found.` });
                } else {
                    const len = result.tasks[index].subTasks.length;
                    result.tasks[index].subTasks.push(req.body.subTask);
                    result.tasks[index].subTasks[len].taskId = index + "";
                    result.tasks[index].subTasks[len].id = len + "";
                    result.save()
                        .then(todo => res.json(todo.tasks[index].subTasks[len]))
                        .catch(err => console.log(err));
                }    
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error adding subTask of user with username: " + req.body.name
            });
        });
});

// @route PUT api/todos/subtask
// @desc Update subTask
// @access Public 
// replaces the entire subTask
/*
req.body = {
    name: "name",
    task_id: "taskid",
    subTask: {
        _id: "idofsubtask",
        level: "2", 
        description: "des",
        deadline: "date"
    }
}
*/
router.put("/subtask", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "SubTask to update cannot be empty!" });
    }
    // SubTask validation 
    const { errors, isValid } = validateSubTaskPUT(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot update subTask of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const taskIndex = result.tasks.findIndex(task => task._id == req.body.task_id);
                if (taskIndex == -1) {
                    return res.status(404).json({ message: `Cannot update subTask of user with username ${req.body.name}. Task was not found.` });
                } 

                const subTaskIndex = result.tasks[taskIndex].subTasks.findIndex(subTask => subTask._id == req.body.subTask._id);
                if (subTaskIndex == -1) {
                    return res.status(404).json({ message: `Cannot update subTask of user with username ${req.body.name}. SubTask was not found.` });
                } else {
                    result.tasks[taskIndex].subTasks[subTaskIndex] = req.body.subTask;
                    result.save()
                        .then(todo => res.json(todo.tasks[taskIndex].subTasks[subTaskIndex]))
                        .catch(err => console.log(err));
                }    
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error updating subTask of user with username: " + req.body.name
            });
        });
});

// @route DELETE api/todos/sub
// @desc Delete subTask
// @access Public  
/*
req.body = {
    name: "name",
    task_id: "idoftask",
    subTask_id: "idofsubtask"
}
*/
router.delete("/subtask", (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: "SubTask to delete cannot be empty!" });
    }

    // name and id validation 
    const { errors, isValid } = validateSubTaskDELETE(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Todo.findOne( { name: req.body.name } )
        .then(result => {
            if (!result) { 
                return res.status(404).json({ message: `Cannot delete subTask of user with username ${req.body.name}. Maybe Todo was not found!` });
            } else {
                const taskIndex = result.tasks.findIndex(task => task._id == req.body.task_id);
                if (taskIndex == -1) {
                    return res.status(404).json({ message: `Cannot delete subTask of user with username ${req.body.name}. Task was not found.` });
                } 

                const len = result.tasks[taskIndex].subTasks.length;
                result.tasks[taskIndex].subTasks =  result.tasks[taskIndex].subTasks.filter(subTask => subTask._id != req.body.subTask_id);

                if (result.tasks[taskIndex].subTasks.length >= len) {
                    return res.status(404).json({ message: `Cannot delete subTask of user with username ${req.body.name}. SubTask was not found.` });
                } else {
                    for (let i = 0; i < len - 1; i++) {
                        result.tasks[taskIndex].subTasks[i].id = i + "";
                    }
                    result.save()
                        .then(todo => res.json(todo.tasks[taskIndex]))
                        .catch(err => console.log(err));
                }                
            }
        })
        .catch(err => {
            res.status(500).send({
                err,
                message: "Error deleting subTask of user with username: " + req.body.name
            });
        });
});

module.exports = router;