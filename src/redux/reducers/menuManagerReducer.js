import { MENU_MANAGER_TYPES } from "../types/types"

export const initialState = {
  showBurgerMenu :false,
  showCart : false,
  showProductFilterMenu: false,
}

export const menuManagerReducer = (state=initialState,action) => {
  switch(action.type){
    case MENU_MANAGER_TYPES.TOGGLE_BURGER_MENU:{
      return {
        ...state,
        showBurgerMenu: !state.showBurgerMenu,
        showCart: false,
      }
    }
    case MENU_MANAGER_TYPES.TOGGLE_CART:{
      return {
        ...state,
        showBurgerMenu: false,
        showCart: !state.showCart,
      }
    }
    case MENU_MANAGER_TYPES.TOGGLE_FILTER_PRODUCT:{
      return {
        ...state,
        showBurgerMenu: false,
        showCart: false,
        showProductFilterMenu: !state.showProductFilterMenu,
      }
    }
    default:
      return state;
  }
}