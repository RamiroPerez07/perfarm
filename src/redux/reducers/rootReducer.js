import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer.js";
import {productFilterReducer} from '../reducers/productFilterReducer.js';
import {modalReducer} from '../reducers/modalReducer.js';
import { menuManagerReducer } from "./menuManagerReducer.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key : "root",
  storage: storage,
  whiteList : ["cart"],
}

export const reducer = combineReducers({
  productFilter : productFilterReducer,
  cart : cartReducer,
  modal: modalReducer,
  menuManager: menuManagerReducer,
})

export const persistedReducer = persistReducer(persistConfig, reducer)