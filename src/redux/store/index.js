import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducers/rootReducer.js';


export const store = configureStore({
  reducer,
});

store.subscribe(()=> console.log("cambio el estado"));