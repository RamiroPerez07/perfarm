import React from 'react';
import styled from 'styled-components';
import { CartProduct } from '../CartProduct/CartProduct';


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
  padding: 2em 1.5em;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  gap: 1em;
  overflow-y: scroll;
  transform: ${({ openCart }) => openCart ? 'translateX(0%)' : 'translateX(100%)'};
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
  width: 95%;
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
  width: 50%;
`;

export const Cart = ({openCart, setOpenCart}) => {
  return (
    <StyledCart openCart={openCart} setOpenCart={setOpenCart}>
      <StyledCloseCartBtn onClick={() => setOpenCart(!openCart)} />
      <StyledH2>Tus productos</StyledH2>
      <StyledProductContainer>
        <CartProduct 
          productImg="./img/products/shalimar.png"
          productName = "Shalimar"
          productBrand = "Ramiro Perez"
          productPrice = "1650"
        />
      </StyledProductContainer>
      <StyledSeparator />
      <StyledContainer>
        <StyledSubtitles>Subtotal</StyledSubtitles>
        <StyledSpan>$2000</StyledSpan>
        <StyledSubtitles>Envío</StyledSubtitles>
        <StyledSpan>$300</StyledSpan>
      </StyledContainer>
      <StyledSeparator />
      <StyledContainer>
        <StyledSubtitles>Total</StyledSubtitles>
        <StyledSpan>$2300</StyledSpan>
      </StyledContainer>
      <StyledBtn className="btn-style1">Comprar</StyledBtn>
      <StyledBtn className="btn-style2">Limpiar Carrito</StyledBtn>
    </StyledCart>
  )
}

