import { ORDERS_ACTION_TYPES } from './orders.types';

const ORDERS_INITIAL_STATE = {
  orders: [{items: ['orderToAdd'], uuid:'uuid'}],
};

export const ordersReducer = (state = ORDERS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ORDERS_ACTION_TYPES.SET_ORDERS:
      return {
        ...state,
        orders: payload,
      };
  
    default:
      return state;
  }
};