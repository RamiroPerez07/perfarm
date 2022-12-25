import { TYPES } from "../types/types"


export const addProductToCart = (productId) => {
  console.log(productId);
  return {
    type: TYPES.ADD_TO_CART,
    payload: productId,
  }
}