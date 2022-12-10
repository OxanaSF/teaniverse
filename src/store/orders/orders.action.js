import { createAction } from '../../utils/reducer/reducer.utils';
import { ORDERS_ACTION_TYPES } from './orders.types';

// const addOrder = (orders, orderToAdd, uuid) => {
//   return [...orders, { orderToAdd, receiptNumber: uuid }];
// };
const addOrder = (orders, orderToAdd, uuid) => {
  return [...orders, {items: orderToAdd, uuid: uuid}];
};





export const addOrderToHistory = (orders, orderToAdd, uuid) => {
  const newOrders = addOrder(orders, orderToAdd, uuid);
  return createAction(ORDERS_ACTION_TYPES.SET_ORDERS, newOrders);
};






