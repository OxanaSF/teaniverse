
import { PRODUCT_ACTION_TYPES } from "./product.types";


const INITIAL_STATE = {
  isProductPicked: false,
  currentProduct: null,
};

export const productReducer = (state=INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: payload };
    
      case PRODUCT_ACTION_TYPES.SET_IS_PRODUCT_PICKED:
        return {
          ...state,
          isProductPicked: payload,
        };  
    default:
      return state
  }
};


