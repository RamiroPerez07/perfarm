import { CART_TYPES } from "../types/types.js"


export const addProductToCart = (product) => {
  console.log(product);
  return {
    type: CART_TYPES.ADD_TO_CART,
    payload: product,
  }
}

export const subtractProductFromCart = (product) => {
  return {
    type: CART_TYPES.SUBTRACT_PRODUCT,
    payload: product,
  }
}

export const removeProductFromCart = (product) => {
  return {
    type: CART_TYPES.REMOVE_ONE_PRODUCT,
    payload: product,
  }
}

export const removeAllProductsFromCart = () => {
  return {
    type: CART_TYPES.REMOVE_ALL_PRODUCTS
  }
}