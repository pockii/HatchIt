/*
Structure of a ToDos Object
const todos = {
    name: "username",
    tasks: {task1, task2}
};
const task1 = {
    id: "int",
    description: "string here",
    deadline: "ISOString here",
    level: "2", // number from 1 to 5
    subTasks: {subTask1, subTask2}
};
const subTask1 = {
    taskId: "int",
    id: "int",
    description: "string here",
    deadline: "ISOString here",
    level: "2" // number from 1 to 5
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

function validateName(name) {
    let errors = {};
    
    name = !isEmpty(name) ? name : "";
    
    if (Validator.isEmpty(name)) {
        errors.name = "Name is required";
    } 
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}

function validateTaskId(id) {
    let errors = {};

    id = !isEmpty(id) ? id : "";
    
    if (Validator.isEmpty(id)) {
        errors.id = "Task id is required";
    } 
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}

function validateSubTaskId(id) {
    let errors = {};

    id = !isEmpty(id) ? id : "";
    
    if (Validator.isEmpty(id)) {
        errors.id = "SubTask id is required";
    } 
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
}

function validateTask(task) {
    let errors = {};
    let isValid = true;

    task.description = !isEmpty(task.description) ? task.description : "";
    if (task.id !== undefined) {
        task.id = !isEmpty(task.id) ? task.id : "";
    }
    if (task.deadline !== undefined) {
        task.deadline = !isEmpty(task.deadline) ? task.deadline : "";
    }
    if (task.level !== undefined) {
        task.level = !isEmpty(task.level) ? task.level : "";
    }

    if (task.id !== undefined && Validator.isEmpty(task.id)) {
        errors.id = "Id for task is required";
        isValid = false;
    }
    if (task.id !== undefined && !Validator.isInt(task.id, { min: 0 } )) {
        errors.id = "Id for task is invalid";
        isValid = false;
    }

    if (Validator.isEmpty(task.description)) {
        errors.description = "Description for task is required";
        isValid = false;
    }

    if (task.deadline !== undefined && !Validator.isISO8601(task.deadline)) {
        errors.deadline = "Deadline for task is invalid";
        isValid = false;
    }

    if (task.level !== undefined && !Validator.isInt(task.level, { min: 1, max: 5 } )) {
        errors.level = "Level for task is invalid";
        isValid = false;
    }

    let isSubTasksValid = true;
    if (task.subTasks !== undefined) {
        errors.subTasks = [];
        for (let i = 0; i < task.subTasks.length; i++) {
            const subTaskErrors = validateSubTask(task.subTasks[i]);
            if (!subTaskErrors.isValid) {
                errors.subTasks[i] = subTaskErrors.errors;
                isSubTasksValid = false;
            }
        }
    }
    
    return {
        errors,
        isValid: isValid && isSubTasksValid
    };
}

function validateSubTask(subTask) {
    let errors = {};

    if (subTask.taskId !== undefined) {
        subTask.taskId = !isEmpty(subTask.taskId) ? subTask.taskId : "";
    }
    if (subTask.id !== undefined) {
        subTask.id = !isEmpty(subTask.id) ? subTask.id : "";
    }
    subTask.description = !isEmpty(subTask.description) ? subTask.description : "";
    if (subTask.deadline !== undefined) {
        subTask.deadline = !isEmpty(subTask.deadline) ? subTask.deadline : "";
    }
    if (subTask.level !== undefined) {
        subTask.level = !isEmpty(subTask.level) ? subTask.level : "";
    }

    if (subTask.taskId !== undefined && Validator.isEmpty(subTask.taskId)) {
        errors.taskId = "TaskId for subTask is required";
    }
    if (subTask.taskId !== undefined && !Validator.isInt(subTask.taskId, { min: 0 } )) {
        errors.taskId = "TaskId for subTask is invalid";
    }

    if (subTask.id !== undefined && Validator.isEmpty(subTask.id)) {
        errors.id = "Id for subTask is required";
    }
    if (subTask.id !== undefined && !Validator.isInt(subTask.id, { min: 0 } )) {
        errors.id = "Id for subTask is invalid";
    }
    
    if (Validator.isEmpty(subTask.description)) {
        errors.description = "Description for subTask is required";
    }
    
    if (subTask.deadline !== undefined && !Validator.isISO8601(subTask.deadline)) {
        errors.deadline = "Deadline for subTask is invalid";
    }

    if (subTask.level !== undefined && !Validator.isInt(subTask.level, { min: 1, max: 5 } )) {
        errors.level = "Level for subTask is invalid";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

// export functions from here 

function validateTodo(todo) {
    let errors = {};

    const nameError = validateName(todo.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (todo.tasks === undefined) {
        errors.tasks = "Tasks is required";
        isValid = false;
    } else {
        errors.tasks = [];
        for (let i = 0; i < todo.tasks.length; i++) {
            const error = validateTask(todo.tasks[i]);
            if (!error.isValid) {
                errors.tasks[i] = error.errors;
                isValid = false;
            }
        }
    }    
    
    return {
        errors,
        isValid: nameError.isValid && isValid
    };
};

function validateTaskPOST(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.task === undefined) {
        errors.task = "Task is required";
        isValid = false;
    } else {
        const taskError = validateTask(data.task);
        if (!taskError.isValid) {
            errors.task = taskError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid
    };
}

function validateTaskPUT(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.task === undefined) {
        errors.task = "Task is required";
        isValid = false;
    } else {
        const taskError = validateTask(data.task);
        if (!taskError.isValid) {
            errors.task = taskError.errors;
            isValid = false;
        }

        const taskIdError = validateTaskId(data.task._id);
        if (!taskIdError.isValid) {
            if (errors.task === undefined) {
                errors.task = {};
            }
            errors.task._id = taskIdError.errors.id;
            isValid = false;
        }
    }
    
    return {
        errors,
        isValid: nameError.isValid && isValid
    };
}

function validateTaskDELETE(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    const taskIdError = validateTaskId(data.task_id);
    if (!taskIdError.isValid) {
        errors.task_id = taskIdError.errors.id;
    }

    return {
        errors,
        isValid: nameError.isValid && taskIdError.isValid
    };
}

function validateSubTaskPOST(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    let isValid = true;
    if (data.subTask === undefined) {
        errors.subTask = "SubTask is required";
        isValid = false;
    } else {
        const subTaskError = validateSubTask(data.subTask);
        if (!subTaskError.isValid) {
            errors.subTask = subTaskError.errors;
            isValid = false;
        }
    }

    return {
        errors,
        isValid: nameError.isValid && isValid
    };
}

function validateSubTaskPUT(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    const taskIdError = validateTaskId(data.task_id);
    if (!taskIdError.isValid) {
        errors.task_id = taskIdError.errors.id;
    }

    let isValid = true;
    if (data.subTask === undefined) {
        errors.subTask = "SubTask is required";
        isValid = false;
    } else {
        const subTaskError = validateSubTask(data.subTask);
        if (!subTaskError.isValid) {
            errors.subTask = subTaskError.errors;
            isValid = false;
        }

        const subTaskIdError = validateSubTaskId(data.subTask._id);
        if (!subTaskIdError.isValid) {
            if (errors.subTask === undefined) {
                errors.subTask = {};
            }
            errors.subTask._id = subTaskIdError.errors.id;
            isValid = false;
        }
    }    

    return {
        errors,
        isValid: nameError.isValid && taskIdError.isValid && isValid 
    };
}

function validateSubTaskDELETE(data) {
    let errors = {};

    const nameError = validateName(data.name);
    if (!nameError.isValid) {
        errors.name = nameError.errors.name;
    }

    const taskIdError = validateTaskId(data.task_id);
    if (!taskIdError.isValid) {
        errors.task_id = taskIdError.errors.id;
    }

    const subTaskIdError = validateSubTaskId(data.subTask_id);
    if (!subTaskIdError.isValid) {
        errors.subTask_id = subTaskIdError.errors.id;
    }

    return {
        errors,
        isValid: nameError.isValid && taskIdError.isValid && subTaskIdError.isValid
    };
}

module.exports = {
    validateTodo,
    validateTaskPOST,
    validateTaskPUT,
    validateTaskDELETE,
    validateSubTaskPOST,
    validateSubTaskPUT,
    validateSubTaskDELETE
}