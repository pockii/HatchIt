import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import dataReducers from "./dataReducers";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    userdata: dataReducers
});