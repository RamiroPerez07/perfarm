import React from 'react';
import {BsCartFill} from 'react-icons/bs';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledCartIConContainer = styled.div`
  height: 20px;
  width: 20px;
  display:grid;
  position: relative;
  place-items: center;
`;

const StyledCartIcon = styled(BsCartFill)`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

const StyledCartCounter = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: -4px;
  right: -6px;
  display: grid;
  place-items: center;
  background-color: ${({theme}) => theme.primary};
  border: 1px solid ${({theme}) => theme.secondary};
  color: ${({theme}) => theme.secondary};
  font-size: 0.7rem;
  font-weight: 400;
`;

export const CartIcon = ({openCart, setOpenCart}) => {

  const state = useSelector(state => state.cart);
  const {cart} = state;

  const getTotalQuantity = () => {
    return cart.reduce((acc, cartProduct) => {
      return acc + cartProduct.quantity;
    },0)
  };

  return (
    <StyledCartIConContainer openCart={openCart} onClick={() => setOpenCart(!openCart) }>
      <StyledCartIcon />
      <StyledCartCounter>{getTotalQuantity()}</StyledCartCounter>
    </StyledCartIConContainer>
  )
}
