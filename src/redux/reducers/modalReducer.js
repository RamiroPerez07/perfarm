import {MODAL_TYPES} from '../types/types.js';

const initialState = {
  active: false,
  error: false,
  message: "", 
}

export const modalReducer = (state=initialState,action) => {
  switch(action.type){
    case MODAL_TYPES.SHOW_MODAL: {
      return {
        ...state,
        active: true,
        error: action.payload.error,
        message: action.payload.message,
      };
    }
    case MODAL_TYPES.HIDE_MODAL: {
      return initialState;
    }
    default:
      return state;
  }
}