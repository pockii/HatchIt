import {
    GET_USERDATA, 
    UPDATE_USERDATA
} from "../actions/types";
  
const isEmpty = require("is-empty");

const initialState = {
    hasUserData: false,
    user: {},
    updated: false,
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERDATA:
            return {
                ...state,
                hasUserData: !isEmpty(action.payload),
                user: action.payload
            };
        case UPDATE_USERDATA:
            return {
                ...state,
                updated: true,
            };
        default:
            return state;
    }
}