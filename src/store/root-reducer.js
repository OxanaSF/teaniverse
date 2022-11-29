import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { paramReducer } from './param/param.reducer';
import { productReducer } from './product/product.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  param: paramReducer,
  product: productReducer
});