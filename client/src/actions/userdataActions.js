import axios from "axios";

import {
    GET_ERRORS,
    GET_USERDATA,
    UPDATE_USERDATA
} from "./types";

// Get userdata with username
export const getUserData = (userData) => dispatch => {
    return axios
        .get("/api/users/userdata", userData)
        .then(response => {
            console.log("User data was retrieved sucessfully");
            dispatch(fetchUserData(response.data)); 
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
};

// Put new userdata with username
export const updateUserData = (newUserData) => dispatch => {
    axios
        .put("/api/users/userdata", newUserData)
        .then(response => {
            dispatch(updatingUserData());
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
};

export const fetchUserData = userData => {
    return {
        type: GET_USERDATA,
        payload: userData
    }
};

export const updatingUserData = () => {
    return {
        type: UPDATE_USERDATA
    };
};

// Get Errors 
export const getErrors = err => {
    return {
      type: GET_ERRORS,
      payload: err.response.data
    };
};