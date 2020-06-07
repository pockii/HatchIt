import axios from "axios";

import {
    GET_ERRORS,
    GET_USERDATA
} from "./types";

// Get userdata with username
export const getUserData = (userData) => dispatch => {
    axios
        .get("/api/users/userdata", userData)
        .then(response => {
            console.log("User data was retrieved sucessfully");
            dispatch(fetchUserData(response.data));
        })
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
};

// Put new userdata with username
export const updateUserData = (newUserData) => dispatch => {
    axios
        .put("/api/users/userdata", newUserData)
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
};

export const fetchUserData = userData => {
    return {
        type: GET_USERDATA,
        payload: userData
    }
};
