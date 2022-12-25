import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";

export const reducer = combineReducers({
  cart : cartReducer,
})