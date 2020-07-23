import axios from "axios";

import { normalizePetInfo } from '../normalizr/petInfo.js';

import {
    GET_ERRORS,
    POST_PET_INFO,
    POST_PET,
    UPDATE_PET
} from "./types";

// Add pet and return updated petInfo
export const addPetInfo = petInfo => dispatch => {
    axios
        .post("api/petinfo/", petInfo)
        .then(response => {
            dispatch(addingPetInfo(normalizePetInfo(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingPetInfo = normalizePetInfo => {
    return {
        type: POST_PET_INFO,
        payload: normalizePetInfo
    };
};

// Add pet and return pet
export const addPet = pet => dispatch => {
    axios
        .post("api/petinfo/pet", pet)
        .then(response => {
            dispatch(addingPet(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingPet = pet => {
    return {
        type: POST_PET,
        payload: pet
    };
};


// Update pet and return pet
export const updatePet = pet => dispatch => {
    axios
        .put("api/petinfo/pet", pet)
        .then(response => {
            dispatch(updatingPet(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
};

export const updatingPet = pet => {
    return {
        type: UPDATE_PET,
        payload: pet
    };
};

// Get Errors 
export const getErrors = err => {
    return {
        type: GET_ERRORS,
        payload: err.response.data
    };
};