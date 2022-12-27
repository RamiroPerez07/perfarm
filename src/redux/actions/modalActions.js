import { MODAL_TYPES } from "../types/types";

export const showModal = (error,message) =>{
  return {
    type: MODAL_TYPES.SHOW_MODAL,
    payload: {error: error,message: message}
  }
}

export const hideModal = () => {
  return {
    type: MODAL_TYPES.HIDE_MODAL,
  }
}