import {
    GET_USERDATA
  } from "../actions/types";
  
const isEmpty = require("is-empty");

const initialState = {
    hasUserData: false,
    user: {},
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USERDATA:
        return {
          ...state,
          hasUserData: !isEmpty(action.payload),
          user: action.payload
        };
      default:
        return state;
    }
  }