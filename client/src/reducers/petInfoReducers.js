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
<<<<<<< HEAD
                oets: updatePet(state.pets, action.payload),
=======
                pets: updatePet(state.pets, action.payload),
>>>>>>> 4a474be1182107b7d9405ecb28553a6bf0f6da53
                updatedPet: true
            };
        default:
            return state;
    }
}