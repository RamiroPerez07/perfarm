import { Products } from "../../data/products";
import {PRODUCT_FILTER_TYPES} from '../types/types.js'; 

const initialState = {
  products : Products,
  shownProducts: Products,
  filterValues: {
    sort: "default",
    price: "all",
    brand: "all",
    shipping: "all",
    stock: "all",
  }
}

export const productFilterReducer = (state = initialState, action) => {
  switch(action.type){
    case PRODUCT_FILTER_TYPES.FILTER_PRODUCTS:{
      return state;
    }
    case PRODUCT_FILTER_TYPES.RESET_SHOWN_PRODUCTS:{
      return initialState;
    }
    default:
      return state;
  }
}