import { Products } from "../../data/products";
import {PRODUCT_FILTER_TYPES} from '../types/types.js'; 
import { filterProducts } from "../utils/productFilterUtils.js";

const initialState = {
  products : Products,
  shownProducts: Products,
  filterValues: {
    sort: "All",
    price: "All",
    brand: "All",
    shipping: "All",
    stock: "All",
  }
}

export const productFilterReducer = (state = initialState, action) => {
  switch(action.type){
    case PRODUCT_FILTER_TYPES.FILTER_PRODUCTS:{
      return {
        ...state,
        shownProducts: filterProducts(action.payload.filterParameters, action.payload.products),
        filterValues: action.payload.filterParameters,
      };
    }
    case PRODUCT_FILTER_TYPES.RESET_SHOWN_PRODUCTS:{
      return initialState;
    }
    default:
      return state;
  }
}