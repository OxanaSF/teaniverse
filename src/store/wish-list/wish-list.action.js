import { createAction } from '../../utils/reducer/reducer.utils';
import { WISH_LIST_ACTION_TYPES } from './wish-list.types';

const addWishListItem = (wishListItems, productToAdd) => {
  const existingWishListItem = wishListItems.find(
    (wishListItem) => wishListItem.id === productToAdd.id
  );

  if (existingWishListItem) {
    return 
  }

  return [...wishListItems, { ...productToAdd, quantity: 1 }];
};

const removeWishListItem = (wishListItems, productToRemove) => {
  // find the cart item to remove
  const existingCartItem = wishListItems.find(
    (wishListItem) => wishListItem.id === productToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return wishListItems.filter((wishListItem) => wishListItem.id !== productToRemove.id);
  }

  return 
};



// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToWishList = (wishListItems, productToAdd) => {
  const newWishListItems = addWishListItem(wishListItems, productToAdd);
  return createAction(WISH_LIST_ACTION_TYPES.SET_WISH_LIST_ITEMS, newWishListItems);
};

export const removeItemFromWishList = (wishListItems, productToRemove) => {
  const newWishListItems = removeWishListItem(wishListItems, productToRemove);
  return createAction(WISH_LIST_ACTION_TYPES.SET_WISH_LIST_ITEMS, newWishListItems);
};

// export const clearItemFromCart = (cartItems, cartItemToClear) => {
//   const newCartItems = clearCartItem(cartItems, cartItemToClear);
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
// };

// export const setIsCartOpen = (boolean) =>
//   createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);


