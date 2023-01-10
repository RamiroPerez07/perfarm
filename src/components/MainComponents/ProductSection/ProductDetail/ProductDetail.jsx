import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  max-width: 1980px;
  min-height: 100vh;
  display: grid;
  align-items: start;
  justify-items: center;
  grid-auto-rows: min-content;
  padding: 20px;
`;

const StyledFrame = styled.div`
  background-color: ${({theme})=>theme.frameColor};
  width: 100%;
  min-height: 400px;
  border-radius: 8px;
  padding: 15px;
  /*display:grid;
  grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
  gap: 15px;
  align-items: center;
  justify-items: center;*/
`;

const StyledImg = styled.div`
  width: 200px;
  min-height: 200px;
  background-image: ${({imgUrl})=>`url('${imgUrl}')`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
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
        <StyledFrame>
          <StyledImg imgUrl={img_url} />
          Esto es un detalle del producto {name}
        </StyledFrame>
      </StyledMain>
    </>
  )
}
