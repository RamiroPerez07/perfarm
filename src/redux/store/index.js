import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducers/rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = configureStore({
  reducer,
  composeWithDevTools,
});

store.subscribe(()=> console.log("cambio el estado"));

/*  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
}),*/