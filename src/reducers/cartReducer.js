import { TYPES } from "../types/types";
import {Products} from '../data/products.js';

export const initialState = {
  products:[...Products],
  shippingCost: 300,
  cart:[],
}

export const cartReducer = (state=initialState, action) => {
  switch(action.type){
    case TYPES.ADD_TO_CART:{
      const newProduct = state.products.find(product => product.id === action.payload);
      return {
        ...state,
        cart: [...state.cart, {...newProduct, quantity: 1}]
      }
    }
    default:
      return state;
  }
}

