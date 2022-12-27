import {PRODUCT_FILTER_TYPES} from '../types/types.js';

export const filterProducts = (filterParameters,products) => {
  return {
    type: PRODUCT_FILTER_TYPES.FILTER_PRODUCTS,
    payload: {
      filterParameters:filterParameters,
      products:products},
  }
}

export const resetFilterProducts = () => {
  return {
    type: PRODUCT_FILTER_TYPES.RESET_SHOWN_PRODUCTS,
  }
}