import { createSelector } from 'reselect';

const selectWishReducer = (state) => state.wishCart;

export const selectWishItems = createSelector(
  [selectWishReducer],
  (wishCart) => wishCart.wishItems
);

export const selectWishCount = createSelector(
  [selectWishReducer],
  (wishCart) => wishCart.wishItems.length
);

// export const selectIsWishClicked = createSelector(
//   [selectWishReducer],
//   (wishCart) => wishCart.wishItems.isWishChecked
// );




