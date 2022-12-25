import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addProductToCart } from '../../../../actions/cartActions.js';

const StyledCard = styled.div`
  width: 95%;
  max-width: 300px;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  justify-content: center;
  grid-auto-rows: min-content;
  padding: 1em;
  gap: 1.5em;
  background-color: ${({theme}) => theme.frameColor };
  border-radius: 10px;
  box-shadow: 0px 0px 5px -4px ${({theme}) => theme.primary };
`;

const StyledImg = styled.div`
  width: 200px;
  height: 150px;
  background-image: ${({imgUrl})=>`url('${imgUrl}')`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
`;

const StyledBrand = styled.p`
  text-align: center;
  font-weight: 100;
  font-size: 1rem;
`;

const StyledPrice = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
`;

const StyledButton = styled.button`
  padding: 15px 20px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
`;

export const ProductCard = ({productId, productName,productBrand,productDescription,productPrice,productStock, productImg}) => {

  const dispatch = useDispatch()

  return (
    <StyledCard>
      <StyledImg imgUrl={productImg} />
      <StyledTitle>{productName}</StyledTitle>
      <StyledBrand>{productBrand}</StyledBrand>
      <StyledPrice>$ {productPrice}</StyledPrice>
      <StyledButton className='btn-style1' onClick={() => dispatch(addProductToCart(productId))}>Agregar</StyledButton>
    </StyledCard>
  )
}

