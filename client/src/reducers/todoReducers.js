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
                todo: action.payload
        };
        case POST_TASK:
            return {
                ...state,
                postedTask: !isEmpty(action.payload),
                todo: action.payload
        };
        case POST_SUBTASK:
            return {
                ...state,
                postedSubTask: !isEmpty(action.payload),
                todo: action.payload
        };
        case UPDATE_TODO:
            return {
                ...state,
                updatedTodo: !isEmpty(action.payload),
                todo: action.payload
        };
        case UPDATE_TASK:
            return {
                ...state,
                updatedTask: !isEmpty(action.payload),
                todo: action.payload
        };
        case UPDATE_SUBTASK:
            return {
                ...state,
                updatedSubTask: !isEmpty(action.payload),
                todo: action.payload
        };
        case DELETE_TASK:
            return {
                ...state,
                deletedTask: !isEmpty(action.payload),
                todo: action.payload
        };       
        case DELETE_SUBTASK:
            return {
                ...state,
                deletedSubTask: !isEmpty(action.payload),
                todo: action.payload
        };        
        default:
            return state;
    }
}