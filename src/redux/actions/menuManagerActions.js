import { MENU_MANAGER_TYPES } from "../types/types";

export const toggleCart = () => {
  return {
    type: MENU_MANAGER_TYPES.TOGGLE_CART,
  }
}

export const toggleBurgerMenu = () => {
  return {
    type: MENU_MANAGER_TYPES.TOGGLE_BURGER_MENU,
  }
}

export const toggleFilterProductMenu = () => {
  return {
    type: MENU_MANAGER_TYPES.TOGGLE_FILTER_PRODUCT,
  }
}