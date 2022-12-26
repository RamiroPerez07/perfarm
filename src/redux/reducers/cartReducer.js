import { CART_TYPES } from "../types/types";
import {Products} from '../../data/products.js';
import { addProduct, removeProduct, subtractProduct, removeAllProducts } from "../utils/cartUtils";

export const initialState = {
  products:[...Products],
  shippingCost: 300,
  cart:[],
}

export const cartReducer = (state=initialState, action) => {
  switch(action.type){
    case CART_TYPES.ADD_TO_CART:{
      return {
        ...state,
        cart: addProduct(state.cart, action.payload),
      }
    }
    case CART_TYPES.SUBTRACT_PRODUCT:{
      return {
        ...state,
        cart: subtractProduct(state.cart, action.payload),
      }
    }
    case CART_TYPES.REMOVE_ONE_PRODUCT:{
      return {
        ...state,
        cart: removeProduct(state.cart, action.payload),
      }
    }
    case CART_TYPES.REMOVE_ALL_PRODUCTS:{
      return {
        ...state,
        cart: removeAllProducts(state.cart),
      }
    }
    default:
      return state;
  }
}

