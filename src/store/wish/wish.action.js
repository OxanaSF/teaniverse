// import { createWish, deleteWish } from '../../utils/firebase/firebase.utils'


import { createAction } from '../../utils/reducer/reducer.utils';
import { WISH_ACTION_TYPES } from './wish.types';

const addRemoveWishItem = (wishItems, productToAdd, user) => {
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === productToAdd.id
  );



  if (!existingWishItem) {
    // createWish(existingWishItem)
    return [...wishItems, { ...productToAdd, user: user }];
  }

  // deleteWish(existingWishItem.id)
  return wishItems.filter((wishItem) => wishItem.id !== productToAdd.id);
};



const isWishClickedItem = (wishItems, wishToCheck) => {
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === wishToCheck.id
  );
console.log('existingWishItem', existingWishItem)

  if (existingWishItem) {
    console.log('existingWishItem.clicked', existingWishItem.clicked)
    return existingWishItem.clicked
  }
  return false
}


const clearWishItem = (wishItems, wishItemToClear) =>
  wishItems.filter((wishItem) => wishItem.id !== wishItemToClear.id);



const wishHistory = (wishItems) => {
  return [...wishItems]
}

export const setWishHistory = (wishItems) => {
  const newWishHistory = wishHistory(wishItems);

  return createAction(WISH_ACTION_TYPES.SET_WISH_HISTORY, newWishHistory);
};



export const addRemoveWish = (wishItems, productToAdd, user) => {
  const newWishItems = addRemoveWishItem(wishItems, productToAdd, user);

  console.log('newWishItems', newWishItems);
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, newWishItems);
};


export const isWishClicked = (wishItems, wishToCheck) => {
  const wishPickedBoolean = isWishClickedItem(wishItems, wishToCheck);

  console.log('isWishClickedItem', wishPickedBoolean);
  return createAction(WISH_ACTION_TYPES.SET_WISH_IS_CLICKED, wishPickedBoolean);
};

export const clearItemFromWishList = (wishItems, wishItemToClear) => {
  const newWishItems = clearWishItem(wishItems, wishItemToClear);
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, newWishItems);
};


export const clearWholeWishList = (wishList) => {
  wishList.length = 0;
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, wishList);
};

