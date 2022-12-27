import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import {productFilterReducer} from '../reducers/productFilterReducer.js';
import {modalReducer} from '../reducers/modalReducer.js';

export const reducer = combineReducers({
  productFilter : productFilterReducer,
  cart : cartReducer,
  modal: modalReducer,
})