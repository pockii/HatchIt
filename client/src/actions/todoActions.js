import axios from "axios";

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
            dispatch(addingTodo(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Add task and return updated todo
export const addTask = task => dispatch => {
    axios
        .post("api/todos/task", task)
        .then(response => {
            dispatch(addingTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Add subTask and return updated todo
export const addSubTask = subTask => dispatch => {
    axios
        .post("api/todos/subtask", subTask)
        .then(response => {
            dispatch(addingSubTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update todo and return updated todo
export const updateTodo = newTodo => dispatch => {
    axios
        .put("api/todos/", newTodo)
        .then(response => {
            dispatch(updatingTodo(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update task and return updated todo
export const updateTask = newTask => dispatch => {
    axios
        .put("api/todos/task", newTask)
        .then(response => {
            dispatch(updatingTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update subTask and return updated todo
export const updateSubTask = newSubTask => dispatch => {
    axios
        .put("api/todos/subtask", newSubTask)
        .then(response => {
            dispatch(updatingSubTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Delete task and return updated todo
export const deleteTask = task => dispatch => {
    axios
        .delete("api/todos/task", task)
        .then(response => {
            dispatch(deletingTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Delete subTask and return updated todo
export const deleteSubTask = subTask => dispatch => {
    axios
        .delete("api/todos/subtask", subTask)
        .then(response => {
            dispatch(deletingSubTask(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingTodo = userData => {
    return {
        type: POST_TODO,
        payload: userData
    };
};

export const addingTask = userData => {
    return {
        type: POST_TASK,
        payload: userData
    };
};

export const addingSubTask = userData => {
    return {
        type: POST_SUBTASK,
        payload: userData
    };
};

export const updatingTodo = userData => {
    return {
        type: UPDATE_TODO,
        payload: userData
    };
};

export const updatingTask = userData => {
    return {
        type: UPDATE_TASK,
        payload: userData
    };
};

export const updatingSubTask = userData => {
    return {
        type: UPDATE_SUBTASK,
        payload: userData
    };
};

export const deletingTask = userData => {
    return {
        type: DELETE_TASK,
        payload: userData
    }
}

export const deletingSubTask = userData => {
    return {
        type: DELETE_SUBTASK,
        payload: userData
    }
}

// Get Errors 
export const getErrors = err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data
    };
};