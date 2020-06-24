function cloneSubTask(subTask) {
    return {
        _id: subTask._id,
        id: subTask.id,
        taskId: subTask.taskId,
        description: subTask.description,
        deadline: subTask.deadline,
        level: subTask.level       
    };
}

function cloneTask(task) {
    return {
        _id: task._id,
        id: task.id,
        description: task.description,
        deadline: task.deadline,
        level: task.level,
        subTasks: [...task.subTasks]       
    };
}

// todoReducers.js
export function insertArr(array, item, index) { // shallow copy is sufficient
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index)
    ];
}

export function processSubTaskDelete(subTasksState, taskId, subTasks) {
    // make a copy of subTasks and remove all subtasks with taskId 
    const newSubTasksState = {};
    for (const subTasksProperty in subTasksState) {
        if (subTasksState[subTasksProperty].taskId !== taskId) {
            newSubTasksState[subTasksProperty] = cloneSubTask(subTasksState[subTasksProperty]);
        }
    }

    // add all the new subtasks with taskId
    for (const subTasksProperty in subTasks) {
        newSubTasksState[subTasksProperty] = subTasks[subTasksProperty];
    }

    return newSubTasksState;
}

export function addSubTask(task, subTaskId) {
    const newTask = cloneTask(task);
    newTask.subTasks.push(subTaskId);
    const newTasks = {};
    newTasks[task.id] = newTask;
    return newTasks;
}