/*
Structure of a ToDos Object
const todos = {
    name: "username",
    tasks: {task1, task2}
};
const task1 = {
    description: "string here",
    deadline: "ISOString here",
    level: 1, // number from 1 to 5
    subTasks: {subTask1, subTask2}
};
const subTask1 = {
    description: "string here",
    deadline: "ISOString here",
    level: 1 // number from 1 to 5
};

Structure of a Todos Object error Object
const todosErrors = {
    name: "username",
    tasks: {taskErrors1, taskErrors2}
};
const taskErrors1: {
    description: "description errors",
    deadline: "deadline errors",
    level: "level errors",
    subTasks: {subTaskError1, subTaskError2}
};
const subTaskError1 = {
    description: "description errors",
    deadline: "deadline errors",
    level: "level errors"
};
*/

const Validator = require("validator");
const isEmpty = require("is-empty");

function validateTask(task) {
    let errors = {};

    task.description = !isEmpty(task.description) ? task.description : "";
    task.deadline = !isEmpty(task.deadline) ? task.deadline : "";
    task.level = !isEmpty(task.level) ? task.level : "";

    if (Validator.isEmpty(task.description)) {
        errors.description = "Description for task is required";
    }

    if (Validator.isEmpty(task.deadline)) {
        errors.taskDeadline = "Deadline for task is required";
    }

    if (Validator.isEmpty(task.level)) {
        errors.taskDeadline = "Level for task is required";
    }

    errors.subTasks = {};
    let isSubTasksValid = true;
    for (let i = 0; i < task.subTasks.length; i++) {
        const subTaskErrors = validateSubTask(task.subTasks[i]);
        if (!subTaskErrors.isValid) {
            errors.subTasks[i] = subTaskErrors.errors;
            isSubTasksValid = false;
        }
    }

    return {
        errors,
        isValid: !isEmpty(errors) && isSubTasksValid
    };
}

function validateSubTask(subTask) {
    let errors = {};

    subTask.description = !isEmpty(subTask.description) ? subTask.description : "";
    subTask.deadline = !isEmpty(subTask.deadline) ? subTask.deadline : "";

    if (Validator.isEmpty(subTask.description)) {
        errors.description = "Description for subTask is required";
    }

    if (Validator.isEmpty(subTask.deadline)) {
        errors.subTaskDeadline = "Deadline for subTask is required";
    }

    if (Validator.isEmpty(subTask.level)) {
        errors.taskDeadline = "Level for subTask is required";
    }

    return {
        errors,
        isValid: !isEmpty(errors)
    };
}

function validateTodos(todos) {
    let errors = {};
    let isValid = true;
    for (let i = 0; i < todos.length; i++) {
        const error = validateTask(todos[i]);
        if (!error.isValid) {
            errors[i] = error.errors;
            isValid = false;
        }
    }
    
    return {
        errors,
        isValid
    };
};

module.exports = {
    validateTodos,
    validateTask,
    validateSubTask
}