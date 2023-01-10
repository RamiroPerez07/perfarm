import React from 'react';
import styled from 'styled-components';
import {FaTrash} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addProductToCart, subtractProductFromCart, removeProductFromCart } from '../../../../redux/actions/cartActions.js';

const StyledCard = styled.div`
  width: 100%;
  min-height: 80px;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  gap: 7px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.frameColor};
`;

const StyledImg = styled.div`
  width: 60px;
  height: 60px;
  background-image: url('${({urlImg}) => urlImg}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  grid-column: 1/2;
  grid-row: 1/4;
  align-self: center;
  justify-self: center;
`;

const StyledName = styled.h3`
  text-align: left;
  font-size: 1rem;
  font-weight: 600;
  grid-column: 2/3;
  grid-row: 1/2;
`;

const StyledBrand = styled.span`
  text-align: left;
  font-size: 0.9rem;
  font-weight: 300;
  grid-column: 2/3;
  grid-row: 2/3;
`;

const StyledPrice = styled.span`
  text-align: left;
  font-size: 1rem;
  font-weight: 800;
  grid-column: 2/3;
  grid-row: 3/4;
`;

const StyledTrash = styled(FaTrash)`
  width: 15px ;
  height: 15px ;
  justify-self: end;
  cursor: pointer;
  transition: all 0.1s linear;
  grid-column: 3/4;
  grid-row: 1/2;

  &:hover{
    color: red;
  }
`;

const StyledControllerContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 3/4;
  grid-row: 2/4;
  place-items: center;
`;

const StyledBtnDecrementQuantity = styled.button`
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 8px;
`;
const StyledBtnIncrementQuantity = styled.button`
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 8px;
  filter: ${({quantity, stock}) => (quantity === stock ? 'grayscale(0.9)' : 'none')};
`;

const StyledQuantity = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
`;

export const CartProduct = ({productId, productDescription, productName, productImg, productBrand, productPrice, productQuantity, productStock, productFreeShipping}) => {
  
  const dispatch = useDispatch();
  
  const product = {
    id: productId,
    name: productName,
    img_url: productImg,
    brand: productBrand,
    price: productPrice,
    description: productDescription,
    quantity: productQuantity,
    stock: productStock,
    free_shipping: productFreeShipping,
  }

  return (
    <StyledCard>
      <StyledImg urlImg = {productImg}></StyledImg>
      <StyledName>{productName}</StyledName>
      <StyledBrand>{productBrand}</StyledBrand>
      <StyledPrice>$ {productPrice}</StyledPrice>
      <StyledTrash onClick={() => dispatch(removeProductFromCart(product))} />
      <StyledControllerContainer>
        <StyledBtnDecrementQuantity className="btn-style1" onClick={() => dispatch(subtractProductFromCart(product))}>-</StyledBtnDecrementQuantity>
        <StyledQuantity>{productQuantity}</StyledQuantity>
        <StyledBtnIncrementQuantity className="btn-style1" quantity={productQuantity} stock={productStock} onClick={() => dispatch(addProductToCart(product))}>+</StyledBtnIncrementQuantity>
      </StyledControllerContainer>
    </StyledCard>
  )
}

