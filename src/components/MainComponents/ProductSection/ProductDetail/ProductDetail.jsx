import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {IoArrowBackOutline} from 'react-icons/io5';

const StyledMain = styled.main`
  width: 100%;
  max-width: 1980px;
  min-height: calc(60px - min(1080px, 100vh));
  display: grid;
  align-items: start;
  justify-items: center;
  grid-auto-rows: min-content;
  padding: 0px 30px 10px 30px;
  margin-top: 90px;
`;

const StyledFrame = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 10px 15px;
  display:grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  gap: 15px;
  align-items: center;
  justify-items: center;
`;

const StyledImg = styled.div`
  width: 100%;
  min-height: 400px;
  background-image: ${({imgUrl})=>`url('${imgUrl}')`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const StyledDescriptionContainer = styled.div`
  background-color: ${({theme})=>theme.frameColor};
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: row;
  gap: 10px;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
  grid-auto-rows: min-content;
  padding: 30px;
  border-radius: 8px;
`;

const StyledH3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({theme}) => theme.secondary};
  text-align: center;
`;

const StyledH4 = styled.h4`
  font-size: 1.2rem;
  font-weight: 300;
  color: ${({theme}) => theme.secondary};
  text-align: center;
`;

const StyledText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({theme}) => theme.secondary};
  text-align: justify;
  margin-top: 25px;
`;

const StyledPrice = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({theme}) => theme.secondary};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledShippingMessage = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: #5ab65a;
  text-align: justify;
  margin-top: 15px;
`;

const StyledBtn = styled.button`
  font-size: 1.2rem;
  padding: 15px 20px;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  justify-self: start;
`;

const StyledArrow = styled(IoArrowBackOutline)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({theme}) => theme.secondary};
`;

export const ProductDetail = () => {

  //llamo al estado del carro (Esto me va a servir para obtener el listado de productos)
  const cartState = useSelector(state => state.cart)
  const {products} = cartState;

  const location = useLocation();

  //genero una funcion para obtener los productos por su numero id
  const getProductById = id => products.find(product => product.id === id);

  //obtengo el producto actual que me servira para mostrar los datos en la ui
  const currentProduct = getProductById(location.state.id);
  const {brand, description, free_shipping, id, img_url, name, price, stock} = currentProduct;

  return (
    <>
      <StyledMain>
        <StyledLink to={"/productos"}><StyledArrow /></StyledLink>
        <StyledFrame>
          <StyledImg imgUrl={img_url} />
          <StyledDescriptionContainer>
            <StyledH3>{name}</StyledH3>
            <StyledH4>{brand}</StyledH4>
            <StyledText>{description}</StyledText>
            {free_shipping && <StyledShippingMessage>¡Este producto tiene envío gratuito!</StyledShippingMessage>}
            <StyledPrice>$ {price}</StyledPrice>
            <StyledBtn className='btn-style1'>Agregar al carrito</StyledBtn>
          </StyledDescriptionContainer>
        </StyledFrame>
      </StyledMain>
    </>
  )
}
