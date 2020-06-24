import axios from "axios";

import { 
    normalizeTodo, 
    normalizeTask, 
    normalizeSubTask, 
} from '../normalizr/todo.js';

import {
    GET_ERRORS,
    POST_TODO,
    POST_TASK,
    POST_SUBTASK,
    UPDATE_TODO,
    UPDATE_TASK,
    UPDATE_SUBTASK,
    DELETE_TASK,
    DELETE_SUBTASK
} from "./types";

// Add todo and return updated todo
export const addTodo = todo => dispatch => {
    axios
        .post("api/todos/", todo)
        .then(response => {
            dispatch(addingTodo(normalizeTodo(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Add task and return updated task
export const addTask = task => dispatch => {
    axios
        .post("api/todos/task", task)
        .then(response => {
            dispatch(addingTask(normalizeTask(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Add subTask and return updated subTask
export const addSubTask = subTask => dispatch => {
    axios
        .post("api/todos/subtask", subTask)
        .then(response => {
            dispatch(addingSubTask(normalizeSubTask(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update todo and return updated todo
export const updateTodo = todo => dispatch => {
    axios
        .put("api/todos/", todo)
        .then(response => {
            dispatch(updatingTodo(normalizeTodo(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update task and return updated task
export const updateTask = task => dispatch => {
    axios
        .put("api/todos/task", task)
        .then(response => {
            dispatch(updatingTask(normalizeTask(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update subTask and return updated subTask
export const updateSubTask = subTask => dispatch => {
    axios
        .put("api/todos/subtask", subTask)
        .then(response => {
            dispatch(updatingSubTask(normalizeSubTask(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Delete task 
export const deleteTask = task => dispatch => {
    axios
        .delete("api/todos/task", { data: task })
        .then(response => {
            dispatch(deletingTask(normalizeTodo(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Delete subTask 
export const deleteSubTask = subTask => dispatch => {
    axios
        .delete("api/todos/subtask", { data: subTask })
        .then(response => {
            dispatch(deletingSubTask(normalizeTask(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingTodo = normalizedTodo => {
    return {
        type: POST_TODO,
        payload: normalizedTodo
    };
};

export const addingTask = normalizedTask => {
    return {
        type: POST_TASK,
        payload: normalizedTask
    };
};

export const addingSubTask = normalizedSubTask => {
    return {
        type: POST_SUBTASK,
        payload: normalizedSubTask
    };
};

export const updatingTodo = normalizedTodo => {
    return {
        type: UPDATE_TODO,
        payload: normalizedTodo
    };
};

export const updatingTask = normalizedTask => {
    return {
        type: UPDATE_TASK,
        payload: normalizedTask
    };
};

export const updatingSubTask = normalizedSubTask => {
    return {
        type: UPDATE_SUBTASK,
        payload: normalizedSubTask
    };
};

export const deletingTask = normalizedTodo => {
    return {
        type: DELETE_TASK,
        payload: normalizedTodo
    }
}

export const deletingSubTask = normalizedTask => {
    return {
        type: DELETE_SUBTASK,
        payload: normalizedTask
    }
}

// Get Errors 
export const getErrors = err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data,
    };
};