import {
    POST_HAPPINESS_BREAKDOWN,
    POST_HAPPINESS_EVENT,
    UPDATE_HAPPINESS_EVENT
} from "../actions/types";
import { 
    updateHappinessEvent,
    addHappinessEventId
 } from "./happinessBreakdownReducerHelper";

const initialState = {
    eventIdArr: [],
    events: {},
    postedHappinessBreakdown: false,
    postedHappinessEvent: false,
    updatedHappinessEvent: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case POST_HAPPINESS_BREAKDOWN:
            return {
                ...state,
                eventIdArr: action.payload.entities.happinessBreakdown.undefined.events,
                events: action.payload.entities.events,
                postedHappinessBreakdown: true,
            };
        case POST_HAPPINESS_EVENT:
            return {
                ...state,
                eventIdArr: addHappinessEventId(state.eventIdArr, action.payload._id),
                events: updateHappinessEvent(state.events, action.payload),
                postedHappinessEvent: true
            };
        case UPDATE_HAPPINESS_EVENT:
            return {
                ...state,
                events: updateHappinessEvent(state.events, action.payload),
                updatedHappinessEvent: true
            };
        default:
            return state;
    }
}