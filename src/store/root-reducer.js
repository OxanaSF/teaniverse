import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { productReducer } from './product/product.reducer';
import { wishReducer } from './wish/wish.reducer'
import { authReducer } from './auth/auth.reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  product: productReducer,
  wishCart: wishReducer,
  auth: authReducer 
});