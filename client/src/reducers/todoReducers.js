import {
    insertArr, 
    processSubTaskDelete,
    addSubTask
} from "./todoReducerHelper";

import {
    POST_TODO,
    POST_TASK,
    POST_SUBTASK,
    UPDATE_TODO,
    UPDATE_TASK,
    UPDATE_SUBTASK,
    DELETE_TASK,
    DELETE_SUBTASK
} from "../actions/types";
  
const isEmpty = require("is-empty");

const initialState = {
    tasks: {},
    subTasks: {},
    todo: {}, 
    postedTodo: false,
    postedTask: false,
    postedSubTask: false,
    updatedTodo: false,
    updatedTask: false,
    updatedSubTask: false,
    deletedTask: false,
    deletedSubTask: false
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case POST_TODO:
            return {
                ...state,
                postedTodo: !isEmpty(action.payload),
                tasks: action.payload.entities.tasks,
                subTasks: action.payload.entities.subTasks,
                todo: action.payload.entities.todo.undefined
        };
        case POST_TASK:
            return {
                ...state,
                postedTask: !isEmpty(action.payload),
                tasks: {
                    ...state.tasks,
                    ...action.payload.entities.tasks
                },
                subTasks: {
                    ...state.subTasks,
                    ...action.payload.entities.subTasks
                },
                todo: {
                    ...state.todo,
                    tasks: insertArr(state.todo.tasks, 
                                        action.payload.result + "", 
                                        action.payload.result)
                }
        };
        case POST_SUBTASK:
            const taskId = action.payload.entities.subTasks[action.payload.result].taskId;
            return {
                ...state,
                postedSubTask: !isEmpty(action.payload),
                tasks: {
                    ...state.tasks,
                    ...addSubTask(state.tasks[taskId], action.payload.result)            
                },
                subTasks: {
                    ...state.subTasks,
                    ...action.payload.entities.subTasks
                }                
        };
        case UPDATE_TODO:
            return {
                ...state,
                updatedTodo: !isEmpty(action.payload),
                tasks: action.payload.entities.tasks,
                subTasks: action.payload.entities.subTasks,
                todo: action.payload.entities.todo.undefined                
        };
        case UPDATE_TASK:
            return {
                ...state,
                updatedTask: !isEmpty(action.payload),
                tasks: {
                    ...state.tasks,
                    ...action.payload.entities.tasks
                },
                subTasks: {
                    ...state.subTasks,
                    ...action.payload.entities.subTasks
                }                
        };
        case UPDATE_SUBTASK:
            return {
                ...state,
                updatedSubTask: !isEmpty(action.payload),
                subTasks: {
                    ...state.subTasks,
                    ...action.payload.entities.subTasks,
                }                
        };
        case DELETE_TASK:
            return {
                ...state,
                deletedTask: !isEmpty(action.payload),
                tasks: action.payload.entities.tasks,
                subTasks: action.payload.entities.subTasks,
                todo: action.payload.entities.todo.undefined                
        };       
        case DELETE_SUBTASK:
            return {
                ...state,
                deletedSubTask: !isEmpty(action.payload),
                tasks: {
                    ...state.tasks,
                    ...action.payload.entities.tasks
                },
                subTasks: processSubTaskDelete(state.subTasks, 
                            action.payload.result, 
                            action.payload.entities.subTasks)                
        };        
        default:
            return state;
    }
}