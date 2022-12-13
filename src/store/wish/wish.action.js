import { createAction } from '../../utils/reducer/reducer.utils';
import { WISH_ACTION_TYPES } from './wish.types';

const addRemoveWishItem = (wishItems, productToAdd, userEmail) => {
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === productToAdd.id
  );

  console.log('ACTION wishItems', wishItems);

  if (!existingWishItem) {
    return [
      ...wishItems,
      { ...productToAdd, quantity: 1, userEmail: userEmail },
    ];
  }

  return wishItems.filter((wishItem) => wishItem.id !== productToAdd.id);
};

const isWishClickedItem = (wishItems, wishToCheck) => {
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === wishToCheck.id
  );
  console.log('existingWishItem', existingWishItem);

  if (existingWishItem) {
    console.log('existingWishItem.clicked', existingWishItem.clicked);
    return existingWishItem.clicked;
  }
  return false;
};

const clearWishItem = (wishItems, wishItemToClear) =>
  wishItems.filter((wishItem) => wishItem.id !== wishItemToClear.id);

export const addRemoveWish = (wishItems, productToAdd, userEmail) => {
  const newWishItems = addRemoveWishItem(wishItems, productToAdd, userEmail);

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
