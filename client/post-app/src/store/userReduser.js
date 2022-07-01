import { SET_AUTH, SET_USER } from "./types";

const initialState = false;

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        ...action.payload,
      };
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
