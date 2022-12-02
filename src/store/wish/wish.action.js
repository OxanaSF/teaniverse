import { createAction } from '../../utils/reducer/reducer.utils';
import { WISH_ACTION_TYPES } from './wish.types';

const addRemoveWishItem = (wishItems, productToAdd) => {
  console.log('ACTION wishItems', wishItems);
  const existingWishItem = wishItems.find(
    (wishItem) => wishItem.id === productToAdd.id
  );

  console.log('ACTION wishItems', wishItems);

  if (!existingWishItem) {
    return [...wishItems, productToAdd];
  }
  return wishItems.filter((wishItem) => wishItem.id !== productToAdd.id);
};

export const addRemoveWish = (wishItems, productToAdd) => {
  const newWishItems = addRemoveWishItem(wishItems, productToAdd);

  console.log('newWishItems', newWishItems);
  return createAction(WISH_ACTION_TYPES.SET_WISH_ITEMS, newWishItems);
};
