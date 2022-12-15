import { WISH_ACTION_TYPES } from './wish.types';

const WISH_INITIAL_STATE = {
  wishItems: [],
  wishHistory: []
};

export const wishReducer = (state = WISH_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case WISH_ACTION_TYPES.SET_WISH_ITEMS:
      return {
        ...state,
        wishItems: payload,
      };

    case WISH_ACTION_TYPES.SET_WISH_HISTORY:
      return {
        ...state,
        wishHistory: payload,
      };

      case WISH_ACTION_TYPES.SET_WISH_IS_CLICKED:
        return {
          ...state,
          isWishChecked: payload,
        };
   
    default:
      return state;
  }
};