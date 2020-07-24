import {
    POST_PET_INFO,
    POST_PET,
    UPDATE_PET
} from "../actions/types";

import { 
    updatePet,
    addPetId
 } from "./petInfoReducerHelper";

const initialState = {
    petIdArr: [],
    pets: {},
    postedPetInfo: false,
    postedPet: false,
    updatedPet: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case POST_PET_INFO:
            return {
                ...state,
                petIdArr: action.payload.entities.petInfo.pets,
                pets: action.payload.entities.pets,
                postedPetInfo: true,
            };
        case POST_PET:
            return {
                ...state,
                petIdArr: addPetId(state.petIdArr, action.payload._id),
                pets: updatePet(state.pets, action.payload),
                postedPet: true
            };
        case UPDATE_PET:
            return {
                ...state,
                pets: updatePet(state.pets, action.payload),
                updatedPet: true
            };
        default:
            return state;
    }
}