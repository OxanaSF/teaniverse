import { ORDER_ACTION_TYPES } from './order.types';

const ORDER_INITIAL_STATE = {
  currentOrder: null,
};

export const orderReducer = (state = ORDER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_CURRENT_ORDER:
      return { ...state, currentOrder: payload };

    default:
      return state;
  }
};
