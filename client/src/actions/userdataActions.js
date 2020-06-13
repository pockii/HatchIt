import axios from "axios";

import {
    GET_ERRORS,
    UPDATE_USERDATA
} from "./types";

// Put new userdata with username and return updated userdata
export const updateUserData = (newUserData) => dispatch => {
    axios
        .put("/api/users/userdata", newUserData)
        .then(response => {
            dispatch(updatingUserData(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
};

export const updatingUserData = userData => {
    return {
        type: UPDATE_USERDATA,
        payload: userData
    };
};

// Get Errors 
export const getErrors = err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data
    };
};