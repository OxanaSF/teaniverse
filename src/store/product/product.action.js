import { createAction } from '../../utils/reducer/reducer.utils';
import { PRODUCT_ACTION_TYPES } from './product.types';

export const setCurrentProduct = (product) =>
  createAction(PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT, product);
