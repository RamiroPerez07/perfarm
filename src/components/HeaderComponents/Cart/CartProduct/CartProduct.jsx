import React from 'react';
import styled from 'styled-components';
import {FaTrash} from 'react-icons/fa';

const StyledCard = styled.div`
  width: 100%;
  min-height: 80px;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  gap: 1em;
  padding: 1em;
  border-radius: 8px;
  background-color: ${({theme}) => theme.frameColor};
`;

const StyledImg = styled.div`
  width: 80px;
  height: 80px;
  background-image: url('${({urlImg}) => urlImg}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  grid-column: 1/2;
  grid-row: 1/4;
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
`;

const StyledQuantity = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
`;

export const CartProduct = ({productName, productImg, productBrand, productPrice}) => {
  return (
    <StyledCard>
      <StyledImg urlImg = {productImg}></StyledImg>
      <StyledName>{productName}</StyledName>
      <StyledBrand>{productBrand}</StyledBrand>
      <StyledPrice>$ {productPrice}</StyledPrice>
      <StyledTrash />
      <StyledControllerContainer>
        <StyledBtnDecrementQuantity className="btn-style1">-</StyledBtnDecrementQuantity>
        <StyledQuantity>1</StyledQuantity>
        <StyledBtnIncrementQuantity className="btn-style1">+</StyledBtnIncrementQuantity>
      </StyledControllerContainer>
    </StyledCard>
  )
}

