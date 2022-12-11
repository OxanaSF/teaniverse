import { createAction } from '../../utils/reducer/reducer.utils';
import { ORDER_ACTION_TYPES } from './order.types';

export const setCurrentOrder = (order) =>
  createAction(ORDER_ACTION_TYPES.SET_CURRENT_ORDER, order);
