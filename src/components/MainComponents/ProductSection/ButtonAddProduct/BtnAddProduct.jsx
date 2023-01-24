import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {showModal, hideModal} from "../../../../redux/actions/modalActions.js";
import styled from 'styled-components';
import {addProductToCart} from "../../../../redux/actions/cartActions.js"


const StyledButton = styled.button`
  padding: ${(props)=>props.padding};
  border-radius: 8px;
  font-size: ${(props)=>props.fs};
  font-weight: 500;
  filter: ${({stock, quantity}) => (stock === quantity) ? 'grayscale(0.9)' : 'none' };
`;


export const BtnAddProduct = (props) => {

  //llamo al despachador de acciones
  const dispatch = useDispatch();

  //obtengo el estado y selecciono el del carrito
  const state = useSelector(state => state.cart);
  const {cart} = state

  const getProductCartQuantity = () => {
    const cartProduct = cart.find(cartProduct => cartProduct.id === props.product.id);
    return cartProduct ? cartProduct.quantity : 0;
  }

  const addProduct = (product) => {
    const quantity = getProductCartQuantity();
    if (product.stock <= quantity){
      dispatch(showModal(true, `¡No hay stock suficiente del producto ${product.name}!`));
      setTimeout(() => dispatch(hideModal()),3000);
      return;
    }  
    dispatch(addProductToCart(product));
    dispatch(showModal(false, `¡Producto ${product.name} agregado al carrito!`));
    setTimeout(() => dispatch(hideModal()),3000);
  }

  return (
    <StyledButton className='btn-style1' padding={props.padding} fs={props.fs} stock={props.product.stock} quantity={getProductCartQuantity()} onClick={() => addProduct(props.product)}>{props.txt}</StyledButton>
  )
}

