
import { PARAM_ACTION_TYPES } from "./param.types";


const INITIAL_STATE = {
  currentUser: null,
};

export const paramReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PARAM_ACTION_TYPES.SET_CURRENT_PARAM:
      return { ...state, currentParam: payload };
    default:
      return state
  }
};