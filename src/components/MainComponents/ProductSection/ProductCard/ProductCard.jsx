import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BtnAddProduct } from '../ButtonAddProduct/BtnAddProduct.jsx';

const StyledCard = styled.div`
  width: 95%;
  max-width: 300px;
  display: grid;
  align-content: start;
  align-items: start;
  justify-items: center;
  justify-content: center;
  grid-auto-rows: min-content;
  padding: 20px;
  gap: 10px;
  background-color: ${({theme}) => theme.frameColor };
  border-radius: 10px;
  box-shadow: 0px 0px 5px -4px ${({theme}) => theme.primary };
`;

const StyledImg = styled.div`
  width: 180px;
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
  font-weight: 300;
  font-size: 1rem;
`;

const StyledPrice = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 1.1rem;
`;

const StyledBtnContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  place-content: center;
  gap: 20px;
  /*grid-auto-columns: min-content;*/
  width: 100%;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
`;

export const ProductCard = (props) => {

  const navigate = useNavigate();


  const product = {...props};



  return (
    <StyledCard>
      <StyledImg imgUrl={props.img_url} />
      <StyledTitle>{props.name}</StyledTitle>
      <StyledBrand>{props.brand}</StyledBrand>
      <StyledPrice>$ {props.price}</StyledPrice>
      <StyledBtnContainer>
        <BtnAddProduct product={product} padding="10px 15px" fs="1rem" txt="Agregar" />
        <StyledButton className='btn-style2' onClick={()=>navigate(`${props.name}`,{state:{id:props.id}})} >+ Info</StyledButton>
      </StyledBtnContainer>
    </StyledCard>
  )
}

