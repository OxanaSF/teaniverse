import { AUTH_ACTION_TYPES } from './auth.types';

const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    isLoggedOut: true
};

export const authReducer = (state = AUTH_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
   
    case AUTH_ACTION_TYPES.SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };
      case AUTH_ACTION_TYPES.SET_IS_LOGGED_OUT:
        return {
          ...state,
          isLoggedOut: payload,
        };
    default:
      return state;
  }
};