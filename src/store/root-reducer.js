import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { categoriesReducer } from './categories/category.reducer';
import { cartReducer } from './cart/cart.reducer';
import { productReducer } from './product/product.reducer';
import { wishListReducer } from './wish-list/wish-list.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  product: productReducer,
  wishList: wishListReducer 
});