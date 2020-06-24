export function cloneSubTask(subTask) {
    return {
        _id: subTask._id,
        id: subTask.id,
        taskId: subTask.taskId,
        description: subTask.description,
        deadline: subTask.deadline,
        level: subTask.level       
    };
}

export function cloneTask(task) {
    return {
        _id: task._id,
        id: task.id,
        description: task.description,
        deadline: task.deadline,
        level: task.level,
        subTasks: [...task.subTasks]       
    };
}

export function cloneAndDenormalizeTask(tasks, subTasks, taskId) {
    const newTask = cloneTask(tasks[taskId]);
    newTask.subTasks = newTask.subTasks.map(property => cloneSubTask(subTasks[property]));
    return newTask;
}

export function cloneAndDenormalizeToDo(todo) {
    const newTodo = {};
    newTodo._id = todo.todo._id;
    newTodo.name = todo.todo.name;
    newTodo.tasks = todo.todo.tasks.map(property => cloneAndDenormalizeTask(todo.tasks, todo.subTasks, property));
    return newTodo;
}

export function updateSubTaskTaskId(subTask, newTaskId) {
    subTask.taskId = newTaskId + "";
    return subTask;
}


export function updateSubTaskId(subTask, newId) {
    subTask.id = newId + "";
    return subTask;
}

export function updateTaskId(task, newId) {
    task.id = newId + "";
    task.subTasks = task.subTasks.map(subTask => {
        subTask.taskId = newId + "";
        return subTask;
    });
    return task;
}

export function getStyle(deadline) {
    const style = ["border border-darkblue rounded-lg h-auto relative flex flex-col bg-lightpinkwindowbg", 
    "border border-darkblue rounded-lg h-auto relative flex flex-col bg-pinkwindowbg", 
    "border border-darkblue rounded-lg h-auto relative flex flex-col bg-darkpinkwindowbg"];

    const deadlineDate = new Date(deadline);
    const currDate = new Date();
    const diffTime = deadlineDate - currDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24); 
    if (diffDays <= 0) { // overdue
        return style[2];
    } else if (diffDays <= 3) {
        return style[1];
    } else {
        return style[0];
    }
}

export function getDroppableStyle(isDraggingOver) {
    const style = ["pt-1 pb-1 bg-transparent rounded-lg", "pt-1 pb-1 bg-indigo-100 rounded-lg"];
    return isDraggingOver ? style[1] : style[0];
}
