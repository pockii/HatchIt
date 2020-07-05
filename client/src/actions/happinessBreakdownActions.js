import axios from "axios";

import { normalizeHappinessBreakdown } from '../normalizr/happinessBreakdown.js';

import {
    GET_ERRORS,
    POST_HAPPINESS_BREAKDOWN,
    POST_HAPPINESS_EVENT,
    UPDATE_HAPPINESS_EVENT
} from "./types";

// Add happinessBreakdown and return updated happinessBreakdown
export const addHappinessBreakdown = happinessBreakdown => dispatch => {
    axios
        .post("api/happinessbreakdown/", happinessBreakdown)
        .then(response => {
            dispatch(addingHappinessBreakdown(normalizeHappinessBreakdown(response.data)));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Add happiness event and return happiness event
export const addHappinessEvent = event => dispatch => {
    axios
        .post("api/happinessbreakdown/event", event)
        .then(response => {
            dispatch(addingHappinessEvent(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

// Update happiness event and return happiness event
export const updateHappinessEvent = event => dispatch => {
    axios
        .put("api/happinessbreakdown/event", event)
        .then(response => {
            dispatch(updatingHappinessEvent(response.data));
        })
        .catch(err => {
            dispatch(getErrors(err));
        });
}

export const addingHappinessBreakdown = normalizeHappinessBreakdown => {
    return {
        type: POST_HAPPINESS_BREAKDOWN,
        payload: normalizeHappinessBreakdown
    };
};

export const addingHappinessEvent = event => {
    return {
        type: POST_HAPPINESS_EVENT,
        payload: event
    };
};

export const updatingHappinessEvent = event => {
    return {
        type: UPDATE_HAPPINESS_EVENT,
        payload: event
    };
};

// Get Errors 
export const getErrors = err => {
    return {
        type: GET_ERRORS,
        payload: err.response.data
    };
};