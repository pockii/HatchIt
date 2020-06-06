import axios from "axios";

import {
  GET_ERRORS
} from "./types";

// Get userdata with username
export const getUserData = (userData) => dispatch => {
    return axios
        .get("/api/users/userdata", userData)
        .then(response => {
            console.log("User data was retrieved sucessfully");
            return response.data;
        })
        .catch(err =>
            dispatch({
            type: GET_ERRORS,
            payload: err.response.data
            })
        );
}

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
}

// Coins
// Get coins with username
export const getCoins = (name) => {
    return getUserData({ name: name }).coins;
}
// Update coins with username 
export const updateCoins = (name, newCoins) => {
    updateUserData({ 
        name: name, 
        coins: newCoins 
    });
}

// Happiness
// Get happiness with username
export const getHappiness = (name) => {
    return getUserData({ name: name }).happiness;
}
// Update happiness with username 
export const updateHappiness = (name, newHappiness) => {
    updateUserData({ 
        name: name, 
        happiness: newHappiness 
    });
}