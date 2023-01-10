import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addProductToCart } from '../../../../redux/actions/cartActions.js';
import { hideModal, showModal } from '../../../../redux/actions/modalActions.js';

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
  filter: ${({stock, quantity}) => (stock === quantity) ? 'grayscale(0.9)' : 'none' };
`;

export const ProductCard = ({productId, productName,productBrand,productDescription,productPrice,productStock, productImg, productFreeShipping}) => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  //obtengo el estado y selecciono el del carrito
  const state = useSelector(state => state.cart);
  const {cart} = state


  const getProductCartQuantity = () => {
    const cartProduct = cart.find(cartProduct => cartProduct.id === productId);
    return cartProduct ? cartProduct.quantity : 0;
  }

  const product = {
    id: productId,
    name: productName,
    brand: productBrand,
    description: productDescription,
    price: productPrice,
    stock: productStock,
    img_url: productImg,
    free_shipping: productFreeShipping
  };

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
    <StyledCard>
      <StyledImg imgUrl={productImg} />
      <StyledTitle>{productName}</StyledTitle>
      <StyledBrand>{productBrand}</StyledBrand>
      <StyledPrice>$ {productPrice}</StyledPrice>
      <StyledBtnContainer>
        <StyledButton className='btn-style1' stock={productStock} quantity={getProductCartQuantity()} onClick={() => addProduct(product)}>Agregar</StyledButton>
        <StyledButton className='btn-style2' onClick={()=>navigate(`${productName}`,{state:{id:productId}})} >+ Info</StyledButton>
      </StyledBtnContainer>
    </StyledCard>
  )
}

