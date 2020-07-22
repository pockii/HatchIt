import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import todoReducer from "./todoReducers";
import happinessBreakdownReducer from "./happinessBreakdownReducers"
import petInfoReducers from "./petInfoReducers"

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    todo: todoReducer,
    happinessBreakdown: happinessBreakdownReducer,
    petInfo: petInfoReducers
});