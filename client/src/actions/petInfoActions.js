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
        .post("api/petinfos", petInfo)
        .then(response => {
            dispatch(addingPetInfo(normalizePetInfo(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingPetInfo = normalizedPetInfo => {
    return {
        type: POST_PET_INFO,
        payload: normalizedPetInfo
    };
};

// Add pet and return pet
export const addPet = pet => dispatch => {
    axios
        .post("api/petinfos/pet", pet)
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
        .put("api/petinfos/pet", pet)
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