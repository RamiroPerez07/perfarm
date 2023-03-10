import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CartProduct } from '../CartProduct/CartProduct';
import { removeAllProductsFromCart } from '../../../../redux/actions/cartActions';
import { toggleCart } from '../../../../redux/actions/menuManagerActions';
import { useNavigate } from 'react-router-dom';


const StyledCart = styled.div`
  width: 100%;
  max-width: 450px;
  height: calc(100% - 60px);
  right: 0px;
  top: 60px;
  position: fixed;
  z-index: 1;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0px 0px 5px -2px ${({theme}) => theme.secondary};
  padding: 15px;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  grid-auto-rows: min-content;
  gap: 1em;
  overflow-y: scroll;
  transform: ${({ showCart }) => showCart ? 'translateX(0%)' : 'translateX(100%)'};
  transition: all 0.2s linear;

  &::-webkit-scrollbar{
    visibility: hidden;
  }
`;

const StyledCloseCartBtn = styled.button`
  width: 18px;
  height: 18px;
  background-color: #ff0000;
  position: relative;
  box-shadow: 0px 0px 5px -2px #0f0f0f;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  justify-self: end;
  

  &::after{
    content:"";
    height: 2px;
    width: 14px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotateZ(45deg);
  }

  &::before{
    content:"";
    height: 2px;
    width: 14px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotateZ(-45deg);
  }

`;

const StyledH2 = styled.h2`
  text-align: left;
  font-weight: 700;
  font-size: 1.4rem;
  justify-self:start;
`;

const StyledProductContainer = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: ${({theme}) => theme.primary };
  display: grid;
  align-items: start;
  justify-items: center;
  padding: 1em;
  gap: 1em;
  grid-auto-rows: min-content;
  border-radius: 5px;
`;

const StyledSeparator = styled.div`
  height: 1px;
  width: 85%;
  background-color: ${({theme}) => theme.secondary};
`;

const StyledContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 1em;
`;

const StyledSubtitles = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`;

const StyledSpan = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  justify-self: end;
`;

const StyledBtn = styled.button`
  padding: 15px 25px;
  border-radius: 10px;
  font-size: 1rem;
  width: 70%;

  &.last-btn{
    margin-bottom: 30px;
  }
`;

export const Cart = () => {

  //funcion para navegar en las rutas
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //llamo al estado del menu
  const menuManagerState = useSelector(state => state.menuManager);
  const {showCart} = menuManagerState;

  const state = useSelector(state => state.cart);
  const {cart,shippingCost} = state;

  const calculateSubtotal = () => {
    return cart.reduce((acc, cartProduct) => {
      return acc + cartProduct.price * cartProduct.quantity;
    },0)
  }

  const calculateShippingCost = () => {
    if (cart.length === 0) return 0; //si no hay productos, que el costo sea 0.
    return (cart.some(cartProduct => !cartProduct.free_shipping)) ? shippingCost : 0;
  }

  //me genero una funcion de total por si el dia de ma??ana hay que agregar otras cosas. Ej: descuentos, etc
  const calculateTotal = () => calculateSubtotal() + calculateShippingCost();

  return (
    <StyledCart showCart={showCart}>
      <StyledCloseCartBtn onClick={() => dispatch(toggleCart())} />
      <StyledH2>Tus productos</StyledH2>
      <StyledProductContainer>
        {
          state.cart.map(product => {
            console.log("carrito ==>", product)
            return (
              <CartProduct {...product} key = {product.id} />
            )
          })
        }

      </StyledProductContainer>
      <StyledSeparator />
      <StyledContainer>
        <StyledSubtitles>Subtotal</StyledSubtitles>
        <StyledSpan>${calculateSubtotal()}</StyledSpan>
        <StyledSubtitles>Env??o</StyledSubtitles>
        <StyledSpan>${calculateShippingCost()}</StyledSpan>
      </StyledContainer>
      <StyledSeparator />
      <StyledContainer>
        <StyledSubtitles>Total</StyledSubtitles>
        <StyledSpan>${calculateTotal()}</StyledSpan>
      </StyledContainer>
      <StyledBtn className="btn-style1" onClick={() => navigate("/confirmar-pedido") }>Comprar</StyledBtn>
      <StyledBtn className="btn-style2 last-btn" onClick = {()=> dispatch(removeAllProductsFromCart())}>Limpiar Carrito</StyledBtn>
    </StyledCart>
  )
}

