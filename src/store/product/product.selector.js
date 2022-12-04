import { createSelector } from 'reselect';

export const selectCurrentProduct = (state) => state.product.currentProduct



// export const selectIsProductPicked = (state) => state.product.currentProduct.isProductPicked



 export const selectProductReducer = (state) => state.product;



export const selectIsProductPicked = createSelector(
  [selectProductReducer ],
  (product) => product?.currentProduct?.isProductPicked
);