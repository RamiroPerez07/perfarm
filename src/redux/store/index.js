import { createStore } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit';
import { persistedReducer } from '../reducers/rootReducer.js';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

/*store.subscribe(()=> console.log("cambio el estado"));*/

export const persistor = persistStore(store);

/*middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
})*/