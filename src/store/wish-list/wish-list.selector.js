import { createSelector } from 'reselect';

const selectWishListReducer = (state) => state.wishList;

export const selectWishListItems = createSelector(
  [selectWishListReducer],
  (wishList) => wishList.wishListItems
);



export const selectWishListCount = createSelector([selectWishListItems], (wishListItems) =>
wishListItems.reduce((total, wishListItem) => total + wishListItem.quantity, 0)
);
