import { WISH_LIST_ACTION_TYPES } from './wish-list.types';

const WISH_LIST_INITIAL_STATE = {
  wishListItems: [],
};

export const wishListReducer = (
  state = WISH_LIST_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case WISH_LIST_ACTION_TYPES.SET_WISH_LIST_ITEMS:
      return {
        ...state,
        wishListItems: payload,
      };

    default:
      return state;
  }
};
