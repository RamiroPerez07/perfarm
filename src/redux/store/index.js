import { configureStore } from '@reduxjs/toolkit';
import { reducer } from '../reducers/rootReducer.js';


export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})
});

store.subscribe(()=> console.log("cambio el estado"));