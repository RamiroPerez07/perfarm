import {PRODUCT_FILTER_TYPES} from '../types/types.js';

export const filterProducts = () => {
  return {
    type: PRODUCT_FILTER_TYPES.FILTER_PRODUCTS,
  }
}

export const resetFilterProducts = () => {
  return {
    type: PRODUCT_FILTER_TYPES.RESET_SHOWN_PRODUCTS,
  }
}